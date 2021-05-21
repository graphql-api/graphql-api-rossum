import { gql } from 'graphql-tag'

export const typeDefs = gql`
  type Workspace implements Node {
    id: Int!
    url: String
    name: String
    autopilot: Boolean
    organization: Organization
    queues: [Queue]
  }
`
