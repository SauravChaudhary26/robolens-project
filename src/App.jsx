import React, { useState, useMemo } from "react";
import {
   ThemeProvider,
   createTheme,
   CssBaseline,
   IconButton,
   Box,
} from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import BookList from "./components/BookList";

function App() {
   // State to keep track of current theme mode, defaulting to dark mode for now
   const [mode, setMode] = useState("dark");

   // Function to toggle between dark and light modes
   // This could be expanded later to persist user preferences
   const toggleColorMode = () => {
      setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
   };

   // Memoizing the theme to ensure we only recreate the theme object when mode changes.
   // This helps with performance and prevents unnecessary re-renders.
   const theme = useMemo(
      () =>
         createTheme({
            palette: {
               mode, // dynamically set the mode (light/dark) here
            },
         }),
      [mode]
   );

   return (
      // Wrap the app with ThemeProvider to pass down our custom theme
      <ThemeProvider theme={theme}>
         {/* CssBaseline resets and normalizes browser default styles,
             ensuring our theme's global styles are applied consistently */}
         <CssBaseline />

         {/* Box is used here to position the toggle button at the top right corner */}
         <Box sx={{ display: "flex", justifyContent: "flex-end", padding: 2 }}>
            {/* IconButton toggles the color mode.
                We display a different icon based on the current theme */}
            <IconButton onClick={toggleColorMode} color="inherit">
               {mode === "light" ? <Brightness4Icon /> : <Brightness7Icon />}
            </IconButton>
         </Box>

         {/* Render our main component that lists books */}
         <BookList />
      </ThemeProvider>
   );
}

export default App;
