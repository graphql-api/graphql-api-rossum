import { typeDefs as scalars } from 'graphql-scalars'
import { gql } from 'apollo-server-micro'

export const typeDefs = gql`
  ${scalars}

  interface Node {
    id: Int
    url: String
  }

  type Workspace implements Node {
    id: Int!
    url: String
    name: String
    autopilot: Boolean
    organization: Organization
    queues: [Queue]
  }

  type Document implements Node {
    id: Int
    url: String
    file: String
    s3_name: String
    annotations: [Annotation]
    mime_type: String
    arrived_at: String
    original_file_name: String
    content: String
    original: String
  }

  type Page {
    id: Int!
    url: String
    annotation: String
    number: Int
    rotation_deg: Int
    mime_type: String
    s3_name: String
    content: String
  }

  type AnnotationSchema {
    id: Int!
  }

  enum CONTENT_CATEGORY {
    section
    datapoint
    multivalue
    tuple
  }

  enum CONTENT_VALUE_TYPE {
    number
    string
  }

  interface Content {
    category: CONTENT_CATEGORY
    schema_id: String
  }

  type Tuple implements Content {
    category: CONTENT_CATEGORY
    schema_id: String
  }

  type Multivalue implements Content {
    category: CONTENT_CATEGORY
    schema_id: String
    children: JSON
  }

  type Datapoint implements Content {
    category: CONTENT_CATEGORY
    schema_id: String
    rir_confidence: String
    value: String
    type: CONTENT_VALUE_TYPE
  }

  type ContentSection {
    id: Int!
    url: String
    schema_id: String
    category: CONTENT_CATEGORY
    children: [Content]
  }

  type AnnotationContent implements Node {
    id: Int!
    url: String
  }

  type Annotation implements Node {
    id: Int
    url: String
    document: Document
    queue: String
    schema: AnnotationSchema
    relations: [String]
    pages: [Page]
    modifier: String
    modified_at: DateTime
    confirmed_at: DateTime
    exported_at: String
    assigned_at: String
    status: String
    rir_poll_id: String
    messages: [String]
    content: [ContentSection]
    time_spent: Int
  }

  type WebhookConfig {
    url: String
  }

  type Webhook implements Node {
    id: Int!
    url: String
    type: String
    name: String
    active: Boolean
    config: WebhookConfig
    events: [String]
    run_after: [String]
    queues: [Queue]
  }

  type Queue implements Node {
    id: Int!
    url: String
    name: String
    workspace: Workspace
    export: [Annotation]
  }

  type User implements Node {
    id: Int!
    url: String
    first_name: String
    last_name: String
    email: String
    date_joined: DateTime
    username: String
    organization: Organization
    is_active: Boolean
    last_login: DateTime
    oidc_id: String
    queues: [String]
    groups: [String]
  }

  type Token {
    key: String
  }

  type Organization implements Node {
    id: Int!
    url: String
    name: String
    workspaces: [Workspace]
    users: [User]
    trial_expires_at: String
    is_trial: Boolean
  }

  extend type Query {
    documents: [Document]
    webhooks: [Webhook]
    workspaces: [Workspace]
    organizations: [Organization]
    token: Token
  }

  type Mutation {
    login: Token
    testWebhook(input: String): TestWebhookPayload
  }

  type TestWebhookResponse {
    messages: [String]
    operations: [String]
  }

  type TestWebhookPayload {
    response: TestWebhookResponse
  }
`
