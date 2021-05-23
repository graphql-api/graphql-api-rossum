import { getID } from '../dataSource'
import { Resolvers } from '../types'
import { Node } from '@graphql-api/tools'

export const resolvers: Resolvers = {
  RossumPage: {
    id(root) {
      const id = root.id || root.url ? getID(root.url) : null
      return Node.toId('RossumPage', id)
    }
  },
  Query: {
    async listPages(root, args, { dataSources: { rossum } }) {
      return rossum.pages.list(args.input)
    },
    async retrievePage(root, args, { dataSources: { rossum } }) {
      return rossum.pages.retrieve(args.input)
    }
  }
}
