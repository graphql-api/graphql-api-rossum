import { GraphQLResolverMap } from 'apollo-graphql'
import { RossumDataSource } from './dataSource'

export type Resolvers = GraphQLResolverMap<{
  dataSources: { rossum: RossumDataSource }
}>

export interface WebhookRequestBody {
  request_id: string
  timestamp: string
  hook: string
  action: string
  event: string
  annotation: Annotation
  document: Document
}

export interface Annotation {
  document: string
  id: number
  queue: string
  schema: string
  pages: string[]
  modifier: any
  modified_at: any
  confirmed_at: any
  exported_at: any
  assigned_at: any
  status: string
  previous_status: string
  rir_poll_id: string
  messages: any
  url: string
  content: string
  time_spent: number
  metadata: any
}

export interface Document {
  id: number
  url: string
  s3_name: string
  mime_type: string
  arrived_at: string
  original_file_name: string
  content: string
  metadata: any
}
