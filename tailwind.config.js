module.exports = {
  content: ["*"],
  theme: {
    screens: {
      'sm': '576px',
      'md': '768px',
      'lg': '992px',
      'xl': '1280px',
      '2xl': '1920px',
    },
    extend: {
      colors: {
        'white-rgba-0.4': '',
        'primary-hover' : '#f0a822',
        'primary-active': '#eb8b11',
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
           //padding: '0px 10px',
          '@screen sm': {
            maxWidth: '576px',
            margin:'auto',
          },
          '@screen md': {
            maxWidth: '768px',
          },
          '@screen lg': {
            maxWidth: '992px',
          },
            '@screen xl': {
              maxWidth: '1280px',
            }
        }
      })
    }
  ],
}
