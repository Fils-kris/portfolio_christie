/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./index_tailwind.html",
    "./**/*.html",
  ],
  theme: {
    extend: {
      colors: {
        violet: {
          dark: '#55198b',
          light: '#8c43ce',
        },
        accent: {
          blue: '#645beb',
          teal: '#09d3ac',
        },
        gray: {
          text: '#868e96',
        },
        dark: {
          bg: '#171c28',
          text: '#ffffff',
        },
        card: {
          bg: '#1e2532',
        },
        border: {
          color: '#2a3142',
        },
        social: {
          linkedin: '#0e76a8',
          github: '#333333',
          twitter: '#1da1f2',
        },
        light: {
          text: '#b8c5d6',
        },
        success: '#09d3ac',
        error: '#ff6b6b',
      },
      spacing: {
        xs: '0.5rem',
        sm: '1rem',
        md: '1.5rem',
        lg: '2rem',
        xl: '3rem',
        '2xl': '4rem',
      },
      boxShadow: {
        sm: '0 2px 8px rgba(85, 25, 139, 0.1)',
        md: '0 8px 24px rgba(85, 25, 139, 0.15)',
        lg: '0 16px 40px rgba(85, 25, 139, 0.2)',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      animation: {
        spin: 'spin 1s linear infinite',
        float: 'float 6s ease-in-out infinite',
        slideUp: 'slideUp 0.8s ease',
        slideDown: 'slideDown 0.8s ease',
        bounce: 'bounce 2s infinite',
        fadeIn: 'fadeIn 0.4s ease',
        fadeInUp: 'fadeInUp 0.6s ease forwards',
        progressBar: 'progressBar 1.5s ease forwards',
      },
      keyframes: {
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(30px)' },
        },
        slideUp: {
          from: {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        slideDown: {
          from: {
            opacity: '0',
            transform: 'translateY(-30px)',
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        bounce: {
          '0%, 100%': { transform: 'translateX(-50%) translateY(0)' },
          '50%': { transform: 'translateX(-50%) translateY(10px)' },
        },
        fadeIn: {
          from: {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        fadeInUp: {
          from: {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        progressBar: {
          from: {
            width: '0 !important',
          },
        },
      },
    },
  },
  plugins: [],
}
