module.exports = {
    purge: [],
    theme: {
      extend: {
        gridTemplateColumns: {
          // Simple 16 column grid
         '16': 'auto 1fr',
      }
    },
    variants: {
      backgroundColor: ['responsive', 'hover', 'focus','active'],
      fontSize: ['responsive', 'hover']
    },
    plugins: []
  }
}