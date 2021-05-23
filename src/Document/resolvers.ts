import { Resolvers } from '../types'
import { Node } from '@graphql-api/tools'
import { getID } from '../dataSource'

export const resolvers: Resolvers = {
  RossumDocument: {
    id(root) {
      const id = root.id || root.url ? getID(root.url) : null
      return Node.toId('RossumDocument', id)
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
