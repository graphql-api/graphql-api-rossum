import { typeDefs as scalars } from 'graphql-scalars'
import { gql } from 'graphql-tag'
// import { typeDefs as annotationTypeDefs } from './Annotation/typeDefs'
// import { typeDefs as documentTypeDefs } from './Document/typeDefs'
// import { typeDefs as workspaceTypeDefs } from './Workspace/typeDefs'
import {
  loadSchemaSync,
  loadTypedefsSync,
  loadDocumentsSync
} from '@graphql-tools/load'
import { mergeTypeDefs } from '@graphql-tools/merge'
import {
  GraphQLFileLoader,
  GraphQLFileLoaderOptions
} from '@graphql-tools/graphql-file-loader'
import { join } from 'path'

const loadedTypeDefs = loadTypedefsSync(
  join(process.cwd(), 'packages/api/rossum/**/*.graphql'),
  {
    loaders: [new GraphQLFileLoader()],
    noLocation: true
  }
)

const rootTypeDefs = gql`
  ${scalars}

  interface Node {
    id: Int
    url: String
  }

  type Token {
    key: String
  }

  extend type Query {
    token: Token
  }

  type Mutation {
    login: Token
  }
`

export const typeDefs = mergeTypeDefs([
  rootTypeDefs,
  ...loadedTypeDefs.map(({ rawSDL }) => rawSDL)
])
