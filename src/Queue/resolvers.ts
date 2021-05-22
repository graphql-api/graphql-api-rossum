import { Resolvers } from '../types'

export const resolvers: Resolvers = {
  Queue: {
    async export(root, args, { dataSources }) {
      if (root.id) return dataSources.rossum.export(root.id)
      return null
    }
  }
}
