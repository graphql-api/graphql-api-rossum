import { IResolvers } from 'apollo-server-micro'
import { GraphQLResolverMap } from 'apollo-graphql'
import { RossumDataSource, getID } from '../RossumDataSource'
import { resolvers as scalars } from 'graphql-scalars'

export const resolvers: GraphQLResolverMap<{ dataSources: { rossum: RossumDataSource } }> = {
  ...scalars,
  Content: {
    __resolveType(obj, contect, info) {
      switch (obj.category) {
        case 'datapoint':
          return 'Datapoint'
        case 'multivalue':
          return 'Multivalue'
        case 'tuple':
          return 'Tuple'
        default:
          return null
      }
    }
  },
  Node: {
    __resolveType(obj, context, info) {}
  },
  Annotation: {
    id(root) {
      return root.id || root.url ? getID(root.url) : null
    },
    async document(root, args, { dataSources }) {
      if (root.document && typeof root.document === 'string') {
        const parts = root.document.split('/')
        const id = parts[parts.length - 1]
        return dataSources.rossum.getDocument(id)
      }
      if (!root.document.id && root.document.url) {
        const parts = root.document.url.split('/')
        const id = parts[parts.length - 1]
        return dataSources.rossum.getDocument(id)
      }
      return root.document
    }
  },
  Document: {
    id(root, args, { dataSources }) {
      if (root.url && typeof root.url === 'string') {
        const parts = root.url.split('/')
        const id = Number(parts[parts.length - 1])
        return id
      }
      return null
    },
    content(root) {
      if (!root.content && root.file) {
        return root.file
      }
      return root.content
    },
    file(root) {
      if (root.id) return `/api/rossum/documents/${root.id}`
      return null
    },
    original(root) {
      if (root.s3_name) return `https://api.elis.rossum.ai/v1/original/${root.s3_name}`
    }
  },
  Queue: {
    async export(root, args, { dataSources }) {
      if (root.id) return dataSources.rossum.export(root.id)
      return null
    }
  },
  Webhook: {
    async queues(root, args, { dataSources }) {
      if (root.queues) return root.queues.map((q) => dataSources.rossum.getQueue(q))
      return null
    }
  },
  User: {
    async organization(root, args, { dataSources }) {
      if (root.organization) return dataSources.rossum.getOrganization(root.organization)
      return null
    }
  },
  Workspace: {
    async organization(root, args, { dataSources }) {
      if (root.organization) return dataSources.rossum.getOrganization(root.organization)
      return null
    },
    async queues(root, args, { dataSources }) {
      if (root.queues) return root.queues.map((q) => dataSources.rossum.getQueue(q))
      return null
    }
  },
  Organization: {
    async users(root, args, { dataSources }) {
      if (root.workspaces) return root.workspaces.map((w) => dataSources.rossum.getUser(w))
      return null
    },
    async workspaces(root, args, { dataSources }) {
      if (root.workspaces) return root.workspaces.map((w) => dataSources.rossum.getWorkspace(w))
      return null
    }
  },
  Query: {
    async documents(root, args, { dataSources }) {
      return dataSources.rossum.listDocuments()
    },
    async webhooks(root, args, { dataSources }) {
      return dataSources.rossum.listWebhooks()
    },
    async workspaces(root, args, { dataSources }) {
      const workspaces = await dataSources.rossum.listOrganizations()
      return workspaces
    },
    async organizations(root, args, { dataSources }, info) {
      return dataSources.rossum.listOrganizations()
    },
    async token(root, args, { dataSources }, info) {
      return { key: await dataSources.rossum.token }
    }
  },
  Mutation: {
    async login(root, args, { dataSources }, info) {
      return dataSources.rossum.login()
    },
    async testWebhook(root, args, { dataSources }) {
      return dataSources.rossum.testWebhook(args.id)
    }
  }
}
