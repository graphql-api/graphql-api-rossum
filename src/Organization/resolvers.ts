import { Resolvers } from '../types'

export const resolvers: Resolvers = {
  Organization: {
    async users(root, args, { dataSources }) {
      if (root.workspaces)
        return root.workspaces.map((w) => dataSources.rossum.users.retrieve(w))
      return null
    },
    async workspaces(root, args, { dataSources }) {
      if (root.workspaces)
        return root.workspaces.map((w) =>
          dataSources.rossum.workspaces.retrieve(w)
        )
      return null
    }
  }
}
