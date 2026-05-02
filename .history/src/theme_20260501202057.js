import { createTheme } from "@mui/material/styles";

export const getTheme = (darkMode) =>
  createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      // Vous pouvez personnaliser d'autres couleurs ici
      primary: {
        main: "#4A90E2", // votre bleu personnalisé
      },
      secondary: {
        main: "#f50057",
      },
    },
    // Optionnel : ajuster les composants si besoin
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: "12px",
          },
        },
      },
    },
  });
