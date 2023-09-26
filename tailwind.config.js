/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
   
    extend: {

      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'produkt': '#6500D3',
        'produkH':'#7c03ff',
        'discovery':'#FF508C',
        'design':"#6500D3"
      },
      spacing: {

        
        '128': '32rem',
        '140': '38rem',
        '145': '42rem',
        '200': '51rem',
        '1%': '1%',
        '2%': '2%',
        '3%': '3%',
        '4%': '4%',
        '4.2%': '4.2%',
        '5%': '5%',
        '6%': '6%',
        '6.8%': '6.8%',
        '7%': '7%',
        '7.5%': '7.5%',
        '8%': '8%',
        '8.2%': '8.2%',

        '9%': '9%',
        '10%': '10%',
        '10.5%': '10.5%',
        '11%': '11%',
        '12%': '12%',
        '13%': '13%',
        '13.3%': '13.3%',
        '14%': '14%',
        '15%': '15%',
        '16%': '16%',
        '17%': '17%',
        '18%': '18%',
        '18.35%': '18.35%',
        '19%': '19%',
        '19.4%': '19.4%',
        '20%': '20%',
        '21%': '21%',
        '22%': '22%',
        '23%': '23%',
        '36%': '36%',
        '40%': '40%',
        '45%': '45%',
        '42%': '42%',
        '50%': '50%',
        '65%': '65%',

      }
    },
  },
  plugins: [],
}
