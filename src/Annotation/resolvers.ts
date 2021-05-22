import { getID } from '../dataSource'

export const resolvers = {
  Content: {
    __resolveType(obj, context, info) {
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
        return dataSources.rossum.documents.retrieve(id)
      }
      return root.document
    }
  }
}
