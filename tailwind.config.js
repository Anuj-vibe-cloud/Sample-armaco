module.exports = {
  content: ["./pages/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        primary: {
          DEFAULT: "#8B4513", // coffee-brown
          50: "#F7F3F0", // coffee-brown-50
          100: "#EDE4DC", // coffee-brown-100
          200: "#DBC9B8", // coffee-brown-200
          300: "#C9AE95", // coffee-brown-300
          400: "#B79371", // coffee-brown-400
          500: "#8B4513", // coffee-brown-500
          600: "#7A3D11", // coffee-brown-600
          700: "#69350F", // coffee-brown-700
          800: "#582D0D", // coffee-brown-800
          900: "#47250B", // coffee-brown-900
        },
        // Secondary Colors
        secondary: {
          DEFAULT: "#D2B48C", // warm-tan
          50: "#FAF8F4", // warm-tan-50
          100: "#F5F1E9", // warm-tan-100
          200: "#EBE3D3", // warm-tan-200
          300: "#E1D5BD", // warm-tan-300
          400: "#D7C7A7", // warm-tan-400
          500: "#D2B48C", // warm-tan-500
          600: "#C5A373", // warm-tan-600
          700: "#B8925A", // warm-tan-700
          800: "#AB8141", // warm-tan-800
          900: "#9E7028", // warm-tan-900
        },
        // Accent Colors
        accent: {
          DEFAULT: "#CD853F", // golden-coffee
          50: "#FAF6F1", // golden-coffee-50
          100: "#F5EDE3", // golden-coffee-100
          200: "#EBDBC7", // golden-coffee-200
          300: "#E1C9AB", // golden-coffee-300
          400: "#D7B78F", // golden-coffee-400
          500: "#CD853F", // golden-coffee-500
          600: "#B8763A", // golden-coffee-600
          700: "#A36735", // golden-coffee-700
          800: "#8E5830", // golden-coffee-800
          900: "#79492B", // golden-coffee-900
        },
        // Background Colors
        background: "#FFF8DC", // soft-cream
        surface: "#F5F5DC", // subtle-beige
        // Text Colors
        text: {
          primary: "#2F1B14", // deep-coffee-brown
          secondary: "#6B4423", // medium-brown
        },
        // Status Colors
        success: {
          DEFAULT: "#228B22", // natural-green
          50: "#F0F8F0", // natural-green-50
          100: "#E1F1E1", // natural-green-100
          200: "#C3E3C3", // natural-green-200
          300: "#A5D5A5", // natural-green-300
          400: "#87C787", // natural-green-400
          500: "#228B22", // natural-green-500
          600: "#1F7D1F", // natural-green-600
          700: "#1C6F1C", // natural-green-700
          800: "#196119", // natural-green-800
          900: "#165316", // natural-green-900
        },
        warning: {
          DEFAULT: "#FF8C00", // warm-orange
          50: "#FFF7F0", // warm-orange-50
          100: "#FFEFE1", // warm-orange-100
          200: "#FFDFC3", // warm-orange-200
          300: "#FFCFA5", // warm-orange-300
          400: "#FFBF87", // warm-orange-400
          500: "#FF8C00", // warm-orange-500
          600: "#E67E00", // warm-orange-600
          700: "#CC7000", // warm-orange-700
          800: "#B36200", // warm-orange-800
          900: "#995400", // warm-orange-900
        },
        error: {
          DEFAULT: "#B22222", // muted-red
          50: "#F8F0F0", // muted-red-50
          100: "#F1E1E1", // muted-red-100
          200: "#E3C3C3", // muted-red-200
          300: "#D5A5A5", // muted-red-300
          400: "#C78787", // muted-red-400
          500: "#B22222", // muted-red-500
          600: "#A01F1F", // muted-red-600
          700: "#8E1C1C", // muted-red-700
          800: "#7C1919", // muted-red-800
          900: "#6A1616", // muted-red-900
        },
      },
      fontFamily: {
        heading: ['Playfair Display', 'serif'],
        body: ['Inter', 'sans-serif'],
        caption: ['Source Sans Pro', 'sans-serif'],
        data: ['JetBrains Mono', 'monospace'],
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      fontWeight: {
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      },
      boxShadow: {
        'soft': '0 2px 4px rgba(139, 69, 19, 0.1)',
        'medium': '0 4px 6px rgba(139, 69, 19, 0.1)',
        'large': '0 8px 16px rgba(139, 69, 19, 0.1)',
        'floating': '0 8px 24px rgba(139, 69, 19, 0.15)',
        'neumorphic': 'inset 2px 2px 4px rgba(139, 69, 19, 0.1), inset -2px -2px 4px rgba(255, 255, 255, 0.8)',
        'neumorphic-hover': 'inset 1px 1px 2px rgba(139, 69, 19, 0.15), inset -1px -1px 2px rgba(255, 255, 255, 0.9)',
        'neumorphic-active': 'inset 3px 3px 6px rgba(139, 69, 19, 0.2), inset -3px -3px 6px rgba(255, 255, 255, 0.7)',
      },
      borderRadius: {
        'card': '8px',
        'button': '4px',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      transitionDuration: {
        'fast': '200ms',
        'normal': '300ms',
      },
      backdropBlur: {
        'glass': '10px',
      },
      animation: {
        'skeleton': 'loading 1.5s infinite',
      },
      keyframes: {
        loading: {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' },
        },
      },
    },
  },
  plugins: [],
}