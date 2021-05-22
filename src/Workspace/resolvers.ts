import { Resolvers } from '../types'

export const resolvers: Resolvers = {
  Workspace: {
    id: (root) => String(root.id),
    async organization(root, args, { dataSources }) {
      if (root.organization)
        return dataSources.rossum.organizations.retrieve({
          url: root.organization
        })
      return null
    },
    async queues(root, args, { dataSources }) {
      if (root.queues)
        return root.queues.map((q) => dataSources.rossum.queues.retrieve(q))
      return null
    }
  },
  Query: {
    async retrieveWorkspace(root, args, { dataSources: { rossum } }) {
      return rossum.workspaces.retrieve(args.input)
    },
    async listWorkspaces(root, args, { dataSources }) {
      const workspaces = await dataSources.rossum.workspaces.list(args.input)
      return workspaces
    }
  }
}
