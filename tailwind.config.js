/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1663F9',
          hover: '#1251cc',
          light: '#EBF2FE',
        },
        dark: {
          DEFAULT: '#1F2326',
          muted: '#4B5563',
          border: '#E5E7EB',
        },
        light: {
          DEFAULT: '#F0F0F0',
          pure: '#FFFFFF',
        },
        secondary: {
          pink: '#F961D8',
          orange: '#F5953A',
          blue: '#3DB0E5',
          rose: '#FF7999',
        },
        danger: '#FC5230',
      },
      fontFamily: {
        heading: ['Sora', 'sans-serif'],
        sans: ['Poppins', 'sans-serif'],
      },
      fontSize: {
        'h1': ['60px', { lineHeight: '76px' }],
        'h2': ['50px', { lineHeight: '60px' }],
        'h3': ['34px', { lineHeight: '42px' }],
        'h4': ['28px', { lineHeight: '38px' }],
        'h5': ['20px', { lineHeight: '28px' }],
        'p1': ['20px', { lineHeight: '28px' }],
        'p2': ['18px', { lineHeight: '26px' }],
        'p3': ['16px', { lineHeight: '20px' }],
        'sub1': ['18px', { lineHeight: '24px' }],
        'sub2': ['16px', { lineHeight: '24px' }],
        'sub3': ['16px', { lineHeight: '20px' }],
        'b1': ['18px', { lineHeight: '26px' }],
        'b2': ['16px', { lineHeight: '24px' }],
        'b3': ['14px', { lineHeight: '20px' }],
        'b4': ['12px', { lineHeight: '16px' }],
      },
    },
  },
  plugins: [],
}
