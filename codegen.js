module.exports = {
  schema: './src/**/*.graphql',
  generates: {
    './schema.graphql': {
      plugins: ['schema-ast'],
      config: {
        federation: false,
        includeDirectives: false
      }
    },
    './federation/schema.graphql': {
      plugins: ['schema-ast'],
      config: {
        federation: true,
        includeDirectives: true
      }
    },
    './dist/types.d.ts': { plugins: ['typescript'] },
    './dist/resolvers.d.ts': { plugins: ['typescript-resolvers'] }
  }
}
