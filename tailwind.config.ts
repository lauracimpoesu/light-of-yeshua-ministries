
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        
        // Core royal gold colors
        gold: {
          lightest: '#FFF6D8', // Very light gold/cream
          lighter: '#FFE8A3', // Light gold
          light: '#F5D76E', // Medium-light gold
          DEFAULT: '#D4AF37', // Classic royal gold
          medium: '#C5A028', // Medium gold
          dark: '#AA8A19',   // Darker gold
          darkest: '#886C01', // Very dark gold
        },
        
        // System UI colors derived from our gold palette
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))'
        }
      },
      fontFamily: {
        seasons: ['The Seasons', 'serif'],
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0'
          },
          to: {
            height: 'var(--radix-accordion-content-height)'
          }
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)'
          },
          to: {
            height: '0'
          }
        },
        'fade-in': {
          '0%': {
            opacity: '0',
            transform: 'translateY(10px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        'floating': {
          '0%, 100%': {
            transform: 'translateY(0)'
          },
          '50%': {
            transform: 'translateY(-10px)'
          }
        },
        'glow': {
          '0%, 100%': {
            boxShadow: '0 0 10px 2px rgba(212, 175, 55, 0.3)'
          },
          '50%': {
            boxShadow: '0 0 20px 6px rgba(212, 175, 55, 0.6)'
          }
        },
        'pulse-glow': {
          '0%, 100%': {
            opacity: '1',
            boxShadow: '0 0 10px 2px rgba(212, 175, 55, 0.3)'
          },
          '50%': {
            opacity: '0.8',
            boxShadow: '0 0 20px 6px rgba(212, 175, 55, 0.6)'
          }
        },
        'gold-shine': {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' }
        },
        'gold-shimmer': {
          '0%': { 
            backgroundPosition: '0% 50%',
            opacity: 0.8
          },
          '50%': { 
            backgroundPosition: '100% 50%',
            opacity: 1
          },
          '100%': { 
            backgroundPosition: '0% 50%',
            opacity: 0.8
          }
        },
        'royal-pulse': {
          '0%, 100%': {
            boxShadow: '0 0 15px rgba(212, 175, 55, 0.5)',
            borderColor: 'rgba(212, 175, 55, 0.6)'
          },
          '50%': {
            boxShadow: '0 0 25px rgba(212, 175, 55, 0.8)',
            borderColor: 'rgba(212, 175, 55, 1)'
          }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in': 'fade-in 0.5s ease-out forwards',
        'floating': 'floating 3s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'gold-shine': 'gold-shine 8s linear infinite',
        'gold-shine-slow': 'gold-shine 12s linear infinite',
        'gold-shimmer': 'gold-shimmer 6s ease-in-out infinite',
        'royal-pulse': 'royal-pulse 3s ease-in-out infinite'
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
