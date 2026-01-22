import type { Config } from "tailwindcss";

export default {
  theme: {
    extend: {
      colors: {
        // Vos couleurs personnalisées
      },
      fontFamily: {
        ubuntu: ["Ubuntu", "sans-serif"],
        dm: ["DM Sans", "sans-serif"],
        nunito: ["Nunito", "sans-serif"],
      },
    },
  },
} satisfies Config;
