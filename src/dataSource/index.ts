import { RESTDataSource } from 'apollo-datasource-rest'

const urlToId = (url) => url.split('/').pop()

export const getID = (urlOrID) =>
  typeof urlOrID === 'string' && urlOrID.startsWith('http')
    ? urlToId(urlOrID)
    : urlOrID

const cruds = ['list', 'retrieve', 'create', 'update', 'delete'] as const
type Crud = UnpackedReadonly<typeof cruds>

const crudKeys = [
  ['annotations', ['list', 'retrieve', 'update', 'delete']],
  'connectors',
  ['documents', ['list', 'retrieve']],
  'emails',
  'inboxes',
  'hooks',
  'memberships',
  'notes',
  ['organizations', ['list', 'retrieve', 'create']],
  ['organization_groups', ['list', 'retrieve']],
  ['pages', ['list', 'retrieve']],
  'queues',
  'relations',
  'schemas',
  'suggested_edits',
  ['users', ['list', 'retrieve', 'create', 'update']],
  ['groups', ['list', 'retrieve']],
  'workspaces'
] as const

type UnpackedReadonlyKey<U> = U extends readonly [infer F, readonly any[]]
  ? F
  : U
type UnpackedReadonly<G> = G extends readonly (infer I)[] ? I : G
type CrudKeys = UnpackedReadonly<typeof crudKeys>

type ApiPath = UnpackedReadonlyKey<CrudKeys>

type ConfigTuple = [ApiPath, Crud[]]
type Config = (ApiPath | ConfigTuple)[]

type IRossumDataSource = {
  [key in ApiPath]?: any
}

type CrudOperation = {
  retrieve<R extends {} = {}>(params: { id: string } | string): Promise<R>
  list<R extends {} = {}>({ filter, order }): Promise<R>
  create<P extends {} = {}, R extends {} = {}>(params: P): Promise<R>
  update<P extends {} = {}, R extends {} = {}>(
    params: { id: string } & P
  ): Promise<R>
  delete<R extends {} = {}>(params: { id } | string): Promise<R>
}

type Operation<K extends Crud = Crud> = { [P in K]: CrudOperation[P] }

export class RossumDataSource extends RESTDataSource {
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

  token: Promise<string>
  constructor() {
    super()
    this.baseURL = 'https://api.elis.rossum.ai/v1/'
    this.token = fetch(`${this.baseURL}auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: process.env.ROSSUM_USERNAME,
        password: process.env.ROSSUM_PASSWORD
      })
    })
      .then((data) => data.json())
      .then((data) => data.key)

    const config = (crudKeys as unknown) as Config
    config.forEach((key) => {
      const [name, ops]: ConfigTuple = Array.isArray(key)
        ? key
        : [key, (cruds as unknown) as Crud[]]
      ops.forEach((op) => {
        const method = this[
          `${op}Entity` as
            | 'listEntity'
            | 'retrieveEntity'
            | 'createEntity'
            | 'deleteEntity'
        ]
        if (this[name]) {
          this[name][op] = method
        } else {
          this[name] = { [op]: method } as any
        }
      })
    })
  }

  async willSendRequest(request) {
    const token = await this.token
    request.headers.set('Authorization', `token ${token}`)
  }

  async login() {
    return this.post(
      'auth/login',
      JSON.stringify({
        username: process.env.ROSSUM_USERNAME,
        password: process.env.ROSSUM_PASSWORD
      })
    )
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

  async rotateAnnotation({
    id,
    rotation
  }: {
    id: string
    rotation: 0 | 90 | 180 | 270
  }) {
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

  listEntity(path) {
    return ({ filter }) => this.get(path)
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
