import { getID } from '../dataSource'
import { Node } from '@graphql-api/tools'
import { Resolvers } from '../types'

export const resolvers: Resolvers = {
  RossumQueue: {
    id(root) {
      const id = root.id || root.url ? getID(root.url) : null
      return Node.toId('RossumQueue', id)
    },
    async export(root, args, { dataSources }) {
      if (root.id) return dataSources.rossum.export(root.id)
      return null
    }
  }
}
