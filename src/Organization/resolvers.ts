import { getID } from '../dataSource'
import { Node } from '@graphql-api/tools'
import { Resolvers } from '../types'

export const resolvers: Resolvers = {
  RossumOrganization: {
    id(root) {
      const id = root.id || root.url ? getID(root.url) : null
      return Node.toId('RossumOrganization', id)
    },
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
