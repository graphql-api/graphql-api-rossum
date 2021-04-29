import { RESTDataSource } from 'apollo-datasource-rest'

const urlToId = (url) => url.split('/').pop()

export const getID = (urlOrID) =>
  typeof urlOrID === 'string' && urlOrID.startsWith('http') ? urlToId(urlOrID) : urlOrID

export class RossumDataSource extends RESTDataSource {
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

  /** ORGANIZATION */

  async listOrganizations() {
    const data = await this.get(`organizations`)
    return data.results
  }

  async getOrganization(id) {
    return this.get(`organization/${getID(id)}`)
  }

  /** WORKSPACE */

  async createWorkspace() {
    // return this.post
  }

  async getWorkspace(id) {
    return this.get(`workspaces/${getID(id)}`)
  }

  async listWorkspaces() {
    return this.get(`workspaces`).then((data) => data.results)
  }

  /** WEBHOOK */

  async createWebhook() {}

  async listWebhooks() {
    const data = await this.get(`hooks`)
    return data.results
  }

  async testWebhook(id) {
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

  async createQueue() {}

  async listQueues({ workspace: w }: { workspace?: number }) {
    const search = w && `workspace=${w}`
    return this.get(`queues${search ? `?${search}` : ''}`)
  }

  async getQueue(id) {
    return this.get(`queues/${getID(id)}`)
  }

  async export(id) {
    const data = await this.get(`queues/${getID(id)}/export?format=json`)
    return data.results ?? null
  }

  /** ANNOTATIONS */

  async getAnnotation() {}

  async rotateAnnotation({ id, rotation }: { id: string; rotation: 0 | 90 | 180 | 270 }) {
    return this.post(`annotations/${id}/rotate`, {
      headers: { 'Content-Type': 'application/json' },
      body: { rotation_deg: rotation }
    })
  }

  /** DOCUMENTS */

  async getDocument(id) {
    return this.get(`documents/${id}`)
  }

  async listDocuments() {
    const data = await this.get(`documents`)
    return data?.results ?? null
  }

  async getOriginal(s3_name) {
    return this.get(`original/${s3_name}`)
  }

  /** don't use */
  async deleteDocument(id) {
    return this.delete(`documents/${id}`)
  }

  /** USER */

  async getUser(id) {
    return this.get(`users/${getID(id)}`)
  }

  async resolveByURL(url: string) {
    return this.get(url.replace(this.baseURL, ''))
  }
}
