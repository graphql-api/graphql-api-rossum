import { getID } from '../dataSource'
import { Resolvers } from '../types'
import { Node } from '@graphql-api/tools'

export const resolvers: Resolvers = {
  RossumWorkspace: {
    id(root) {
      const id = root.id || root.url ? getID(root.url) : null
      return Node.toId('RossumWorkspace', id)
    },
    async organization(root, args, { dataSources }) {
      if (root.organization)
        return dataSources.rossum.organizations.retrieve(root.organization)
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
