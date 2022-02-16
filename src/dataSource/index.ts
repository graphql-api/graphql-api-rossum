import { RESTDataSource } from 'apollo-datasource-rest'
import { AuthorizationToken } from './types'
export { getRossumContext } from './context'

const urlToId = (url) => url.split('/').pop()

export const getID = (urlOrID) =>
  typeof urlOrID === 'string' && urlOrID.startsWith('http') ? urlToId(urlOrID) : urlOrID

const LIST = 'list'
type List = typeof LIST
const RETRIEVE = 'retrieve'
type Retrieve = typeof RETRIEVE
const CREATE = 'create'
type Create = typeof CREATE
const UPDATE = 'update'
type Update = typeof UPDATE
const DELETE = 'delete'
type Delete = typeof DELETE

const cruds = [LIST, RETRIEVE, CREATE, UPDATE, DELETE] as [List, Retrieve, Create, Update, Delete]
type Crud = UnpackedReadonly<typeof cruds>

const crudKeys = [
  ['annotations', [LIST, RETRIEVE, UPDATE, DELETE]],
  'connectors',
  ['documents', [LIST, RETRIEVE]],
  'emails',
  'inboxes',
  'hooks',
  'memberships',
  'notes',
  ['organizations', [LIST, RETRIEVE, CREATE]],
  ['organization_groups', [LIST, RETRIEVE]],
  ['pages', [LIST, RETRIEVE]],
  'queues',
  'relations',
  'schemas',
  'suggested_edits',
  ['users', [LIST, RETRIEVE, CREATE, UPDATE]],
  ['groups', [LIST, RETRIEVE]],
  'workspaces'
] as const

type UnpackedReadonlyKey<U> = U extends readonly [infer F, readonly any[]] ? F : U
type UnpackedReadonly<G> = G extends readonly (infer I)[] ? I : G
type CrudKeys = UnpackedReadonly<typeof crudKeys>

type ApiPath = UnpackedReadonlyKey<CrudKeys>

type ConfigTuple = [ApiPath, [List, Retrieve, ...(Create | Update | Delete)[]]]
type Config = (ApiPath | ConfigTuple)[]

type IRossumDataSource = {
  [key in ApiPath]?: any
}

type CrudOperation = {
  retrieve<R extends {} = {}>(params: { id: string } | string): Promise<R>
  list<R extends {} = {}, P extends {} = {}>(params?: P): Promise<R>
  create<P extends {} = {}, R extends {} = {}>(params: P): Promise<R>
  update<P extends {} = {}, R extends {} = {}>(params: { id: string } & P): Promise<R>
  delete<R extends {} = {}>(params: { id } | string): Promise<R>
}

type Operation<K extends Crud = Crud> = { [P in K]: CrudOperation[P] }

type RESTDataSourceCredentials =
  | { token: AuthorizationToken }
  | { password: string; username: string }

export class RossumDataSource extends RESTDataSource<RESTDataSourceCredentials | {}> {
  annotations: Operation<'list' | 'retrieve' | 'update' | 'delete'>
  connectors: Operation
  documents: Operation<'list' | 'retrieve'>
  emails: Operation
  inboxes: Operation
  hooks: Operation
  memberships: Operation
  notes: Operation
  organizations: Operation<'list' | 'retrieve' | 'create'>
  organization_groups: Operation<'list' | 'retrieve'>
  pages: Operation<'list' | 'retrieve'>
  queues: Operation
  relations: Operation
  schemas: Operation
  suggested_edits: Operation
  users: Operation<'list' | 'retrieve' | 'create' | 'update'>
  groups: Operation<'list' | 'retrieve'>
  workspaces: Operation

  token: Promise<AuthorizationToken> | AuthorizationToken
  private credentials?: string
  constructor(httpFetch?) {
    super()
    this.baseURL = 'https://api.elis.rossum.ai/v1/'
    if (this.context?.['token']) {
      this.token = this.context['token']
    } else {
      const username = this.context?.['username'] || process.env['ROSSUM_USERNAME']
      const password = this.context?.['password'] || process.env['ROSSUM_PASSWORD']
      if (typeof username === 'string' && typeof password === 'string') {
        this.credentials = JSON.stringify({ username, password })
        try {
          this.token = (httpFetch || fetch)(`${this.baseURL}auth/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: this.credentials
          })
            .then((data) => data.json())
            .then((data) => `token ${data.key}`)
        } catch (error) {
          throw Error(error)
        }
      }
    }

    // const config = crudKeys
    crudKeys.forEach((key) => {
      let name: ApiPath,
        ops: ConfigTuple[1] = cruds
      if (Array.isArray(key)) {
        name = key[0]
        ops = key[1]
      } else if (typeof key === 'string') {
        name = key
      }
      // const [name, ops]: ConfigTuple = Array.isArray(key) ? key : [key, cruds]
      ops.forEach((op) => {
        const method =
          this[`${op}Entity` as 'listEntity' | 'retrieveEntity' | 'createEntity' | 'deleteEntity']
        if (this[name]) {
          this[name][op] = method(name)
        } else {
          this[name] = { [op]: method(name) } as any
        }
      })
    })
  }

  async willSendRequest(request) {
    const token = await this.token
    request.headers.set('Authorization', token)
  }

  async login() {
    if (typeof this.credentials !== 'string') throw Error('no valid Credentials provided')
    const authData = await this.post('auth/login', this.credentials)
  }

  /** HOOK */
  async testHook({ id }) {
    return this.post(
      `hooks/${getID(id)}/test`,
      JSON.stringify({
        config: { insecure_ssl: true },
        payload: {
          action: 'user_update',
          event: 'annotation_content',
          annotation: {},
          document: {}
        }
      }),
      { headers: { 'Content-Type': 'application/json' } }
    )
  }

  /** QUEUE */

  async export(id) {
    const data = await this.get(`queues/${getID(id)}/export?format=json`)
    return data.results ?? null
  }

  /** ANNOTATIONS */

  async rotateAnnotation({ id, rotation }: { id: string; rotation: 0 | 90 | 180 | 270 }) {
    return this.post(`annotations/${id}/rotate`, {
      headers: { 'Content-Type': 'application/json' },
      body: { rotation_deg: rotation }
    })
  }

  /** DOCUMENTS */

  async getOriginal(s3_name) {
    return this.get(`original/${s3_name}`)
  }

  /** USER */

  async changePassword({ new_password1, new_password2, old_password }) {
    return this.post('auth/password/change', {
      new_password1,
      new_password2,
      old_password
    })
  }

  async resetPassword({ email }) {
    return this.post('auth/password/reset', { email })
  }

  /** helper */

  async resolveByURL(url: string) {
    return this.get(url.replace(this.baseURL, ''))
  }

  /** CRUD */
  listEntity = (path) => {
    return (args) => {
      return this.get(path).then((data) => data.results)
    }
  }
  retrieveEntity(path): CrudOperation['retrieve'] {
    return (args) => {
      const id = typeof args === 'string' ? getID(args) : args.id
      return this.get(`${path}/${id}`)
    }
  }
  createEntity(path) {
    return () => this.post(`${path}/create`)
  }
  updateEntity(path) {
    return ({ id, ...args }) => {
      const completePath = `${path}/${id}`
      if (Object.keys(args).length > 1) return this.patch(completePath)
      return this.put(completePath)
    }
  }
  deleteEntity(path): CrudOperation['delete'] {
    return (args) => {
      const id = typeof args === 'string' ? getID(args) : args.id
      if (id) {
        return this.delete(`${path}/${id}`)
      }
      return null
    }
  }
}
