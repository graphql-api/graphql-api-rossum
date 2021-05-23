import { gql } from 'graphql-tag'
import { loadTypedefsSync } from '@graphql-tools/load'
import { mergeTypeDefs } from '@graphql-tools/merge'
import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader'
import { join } from 'path'

const loadedTypeDefs = loadTypedefsSync(
  join(process.cwd(), 'packages/api/rossum/src/**/*.graphql'),
  { loaders: [new GraphQLFileLoader()], noLocation: true }
)

export const typeDefs = mergeTypeDefs(
  loadedTypeDefs.map(({ rawSDL }) => rawSDL)
)
