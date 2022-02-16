import { Resolvers } from './types'
import { getID } from './dataSource'
import merge from 'lodash/merge'
import { Node } from '@graphql-api/tools'
import {
  // resolvers as scalars,

  URLResolver as URL,
  URLMock,
  DateTimeResolver as DateTime,
  DateTimeMock,
  JSONResolver as JSON,
  JSONMock,
  EmailAddressResolver as EmailAddress,
  EmailAddressMock
} from 'graphql-scalars'
import { resolvers as annotationResolvers } from './Annotation/resolvers'
import { resolvers as authResolvers } from './Auth/resolvers'
import { resolvers as documentResolvers } from './Document/resolvers'
import { resolvers as emailResolvers } from './Email/resolvers'
import { resolvers as extensionsResolvers } from './extensions/resolvers'
import { resolvers as organizationResolvers } from './Organization/resolvers'
import { resolvers as pageResolvers } from './Page/resolvers'
import { resolvers as queueResolvers } from './Queue/resolvers'
import { resolvers as userResolvers } from './User/resolvers'
import { resolvers as workspaceResolvers } from './Workspace/resolvers'

const scalars = {
  URL,
  DateTime,
  JSON,
  EmailAddress
}

export const resolvers: Resolvers = merge(
  scalars,
  annotationResolvers,
  authResolvers,
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
      __resolveType(obj, context, info) {
        const id = obj.id || (obj.url && getID(obj.url))
        if (!!id) return Node.fromId(id)?.[0] ?? null
        return null
      }
    }
  }
)
