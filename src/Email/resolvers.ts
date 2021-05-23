import { getID } from '../dataSource'
import { Resolvers } from '../types'
import { Node } from '@graphql-api/tools'

export const resolvers: Resolvers = {
  RossumInbox: {
    id(root) {
      const id = root.id || root.url ? getID(root.url) : null
      return Node.toId('RossumInbox', id)
    }
  },
  RossumEmail: {
    id(root) {
      const id = root.id || root.url ? getID(root.url) : null
      return Node.toId('RossumEmail', id)
    }
  }
}
