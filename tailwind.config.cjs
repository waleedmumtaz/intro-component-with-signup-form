const config = {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
      backgroundImage: {
        'intro-mobile': 'url(/assets/bg-intro-mobile.png)',
        'intro-desktop': 'url(/assets/bg-intro-desktop.png)',
      },
      colors: {
        cstm: {
          primary: {
            red: 'hsl(0, 100%, 74%)',
            green: 'hsl(154, 59%, 51%)',
          },
          accent: {
            blue: 'hsl(248, 32%, 49%)',
          },
          neutral: {
            'dark-blue': 'hsl(249, 10%, 26%)',
            'grayish-blue': 'hsl(246, 25%, 77%)',
          },
        },
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },

  plugins: [],
}

module.exports = config
