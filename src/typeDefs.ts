import { typeDefs as scalars } from 'graphql-scalars'
import { gql } from 'graphql-tag'
import { typeDefs as annotationTypeDefs } from './Annotation/typeDefs'
import { typeDefs as documentTypeDefs } from './Document/typeDefs'
import { typeDefs as workspaceTypeDefs } from './Workspace/typeDefs'

export const typeDefs = gql`
  ${scalars}

  ${documentTypeDefs}

  interface Node {
    id: Int
    url: String
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
