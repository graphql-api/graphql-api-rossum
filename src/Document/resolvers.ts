import { Resolvers } from '../types'

export const resolvers: Resolvers = {
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
      if (root.s3_name)
        return `https://api.elis.rossum.ai/v1/original/${root.s3_name}`
    }
  },
  Query: {
    async listDocuments(root, args, { dataSources: { rossum } }) {
      return rossum.documents.list(args?.input)
    },
    async retrieveDocument(root, args, { dataSources: { rossum } }) {
      return rossum.documents.retrieve(args.input)
    }
  }
}
