import { Resolvers } from '../types'

export const resolvers: Resolvers = {
  Page: {
    id: (root) => String(root.id)
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
