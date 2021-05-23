import { getID } from '../dataSource'
import { Node } from '@graphql-api/tools'

export const resolvers = {
  RossumContent: {
    __resolveType(obj, context, info) {
      switch (obj.category) {
        case 'datapoint':
          return 'RossumDatapoint'
        case 'multivalue':
          return 'RossumMultivalue'
        case 'tuple':
          return 'RossumTuple'
        default:
          return null
      }
    }
  },
  RossumContentSection: {
    id(root) {
      const id = root.id || root.url ? getID(root.url) : null
      return Node.toId('RossumContentSection', id)
    }
  },
  RossumAnnotationContent: {
    id(root) {
      const id = root.id || root.url ? getID(root.url) : null
      return Node.toId('RossumAnnotationContent', id)
    }
  },
  RossumAnnotation: {
    id(root) {
      const id = root.id || root.url ? getID(root.url) : null
      return Node.toId('RossumAnnotation', id)
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
        return dataSources.rossum.documents.retrieve(id)
      }
      return root.document
    }
  }
}
