export function preserveDirectivesPlugin() {
  const CLIENT_DIRECTIVE_REGEX = /^['"]use client['"];\n?/

  return {
    name: 'preserve-directives',
    renderChunk(code: string, chunk: any) {
      // Add 'use client' to all component chunks (individual components)
      const isComponentChunk = chunk.fileName?.startsWith('components/')

      if (isComponentChunk) {
        return {
          code: `'use client';\n${code.replace(CLIENT_DIRECTIVE_REGEX, '')}`,
          map: null,
        }
      }

      return null
    },
  }
}
