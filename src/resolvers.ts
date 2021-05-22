import { Resolvers } from './types'
import { getID } from './dataSource'
import merge from 'lodash/merge'
import { resolvers as scalars } from 'graphql-scalars'
import { resolvers as annotationResolvers } from './Annotation/resolvers'
import { resolvers as documentResolvers } from './Document/resolvers'
import { resolvers as emailResolvers } from './Email/resolvers'
import { resolvers as extensionsResolvers } from './extensions/resolvers'
import { resolvers as organizationResolvers } from './Organization/resolvers'
import { resolvers as pageResolvers } from './Page/resolvers'
import { resolvers as queueResolvers } from './Queue/resolvers'
import { resolvers as userResolvers } from './User/resolvers'
import { resolvers as workspaceResolvers } from './Workspace/resolvers'

export const resolvers: Resolvers = merge(
  scalars,
  annotationResolvers,
  documentResolvers,
  emailResolvers,
  extensionsResolvers,
  organizationResolvers,
  pageResolvers,
  queueResolvers,
  userResolvers,
  workspaceResolvers,
  {
    Node: {
      __resolveType(obj, context, info) {}
    },
    Query: {
      async token(root, args, { dataSources }, info) {
        return { key: await dataSources.rossum.token }
      }
    },
    Mutation: {
      async login(root, args, { dataSources }, info) {
        return dataSources.rossum.login()
      }
    }
  }
)
