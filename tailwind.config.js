module.exports = {
  content: ["./public/**/*.{html,js,scss}"],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      '2k': '1920px',
      '4k': '2560px',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1.25rem',
        md: '1.75rem',
        lg: '0.875rem',
        xl: '2.25rem',
        '2xl': '3rem',
        '2k': '1rem',
      },
    },
    fontFamily: {
      pop: ['Poppins', 'sans-serif']
    },
    extend: {
      fontSize: {
        'xs': ['.75rem', '1rem'],
        'sm': ['.875rem', '1.25rem'],
        'base': ['1rem', '1.625rem'],
        'lg': ['1.125rem', '1.75rem'],
        'xl': ['1.25rem', '1.875rem'],
        '2xl': ['1.5rem', '2rem'],
        '26' : ['1.625rem', '2.125rem'],
        '30': ['1.875', '2.5rem'],
      },
      colors: {
        dark: '#181819',
        leafGreen:'#2AAB3F',
        red:'#FA5657',
        grey:'#9E9E9E',
        primary:'#20C0E8',
      },
      dropShadow: {
        'one':'0px 0px 4px rgba(0, 0, 0, 0.3)',
        'two':'0px 6px 24px rgba(53, 55, 81, 0.06)',
        'form': ['0px 0px 4px rgba(0, 0, 0, 0.15)', '0px 16px 24px rgba(0, 0, 0, 0.05)', '0px 6px 30px rgba(0, 0, 0, 0.04)', '0px 8px 10px rgba(0, 0, 0, 0.06)'],
      }
    },
  },
  plugins: [],
}

