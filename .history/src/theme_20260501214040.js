// src/theme.js
import { createTheme } from "@mui/material/styles"; // ← import obligatoire

export const getTheme = (darkMode) =>
  createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      background: {
        default: darkMode ? "#121212" : "#f3f4f6", // gris clair
      },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            backgroundColor: darkMode ? "#121212" : "#f3f4f6",
          },
        },
      },
    },
  });
