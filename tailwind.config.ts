import type { Config } from "tailwindcss";

const defaultTheme = require("tailwindcss/defaultTheme");
const flowbite = require("flowbite-react/tailwind");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      primary: {
        50: "var(--primary-50)",
        100: "var(--primary-100)",
        200: "var(--primary-200)",
        300: "var(--primary-300)",
        400: "var(--primary-400)",
        500: "var(--primary-500)",
        600: "var(--primary-600)",
        700: "var(--primary-700)",
        800: "var(--primary-800)",
        900: "var(--primary-900)",
      },
      secondary: {
        50: "var(--secondary-50)",
        100: "var(--secondary-100)",
        200: "var(--secondary-200)",
        300: "var(--secondary-300)",
        400: "var(--secondary-400)",
        500: "var(--secondary-500)",
        600: "var(--secondary-600)",
        700: "var(--secondary-700)",
        800: "var(--secondary-800)",
        900: "var(--secondary-900)",
      },
      tertiary: {
        50: "var(--tertiary-50)",
        100: "var(--tertiary-100)",
        200: "var(--tertiary-200)",
        300: "var(--tertiary-300)",
        400: "var(--tertiary-400)",
        500: "var(--tertiary-500)",
        600: "var(--tertiary-600)",
        700: "var(--tertiary-700)",
        800: "var(--tertiary-800)",
        900: "var(--tertiary-900)",
      },
      exclusive: {
        50: "var(--exclusive-50)",
        100: "var(--exclusive-100)",
        200: "var(--exclusive-200)",
        300: "var(--exclusive-300)",
        400: "var(--exclusive-400)",
        500: "var(--exclusive-500)",
        600: "var(--exclusive-600)",
        700: "var(--exclusive-700)",
        800: "var(--exclusive-800)",
        900: "var(--exclusive-900)",
      },
      success: {
        50: "var(--success-50)",
        100: "var(--success-100)",
        200: "var(--success-200)",
        300: "var(--success-300)",
        400: "var(--success-400)",
        500: "var(--success-500)",
        600: "var(--success-600)",
        700: "var(--success-700)",
        800: "var(--success-800)",
        900: "var(--success-900)",
      },
      alerts: {
        50: "var(--alerts-50)",
        100: "var(--alerts-100)",
        200: "var(--alerts-200)",
        300: "var(--alerts-300)",
        400: "var(--alerts-400)",
        500: "var(--alerts-500)",
        600: "var(--alerts-600)",
        700: "var(--alerts-700)",
        800: "var(--alerts-800)",
        900: "var(--alerts-900)",
      },
      neutral: {
        50: "var(--neutral-50)",
        100: "var(--neutral-100)",
        200: "var(--neutral-200)",
        300: "var(--neutral-300)",
        400: "var(--neutral-400)",
        500: "var(--neutral-500)",
        600: "var(--neutral-600)",
        700: "var(--neutral-700)",
        800: "var(--neutral-800)",
        900: "var(--neutral-900)",
      },
    },
    screens: {
      xs: "475px",
      ...defaultTheme.screens,
    },
  },
  plugins: [require("@tailwindcss/forms"), flowbite.plugin()],
};
export default config;
