import './App.css';
import './index.css'
import RoutesPage from './routes';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { createTheme } from "@mui/material";
import KanitTTF from "./Kanit-Regular.ttf"

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: "Kanit"
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          "@font-face": {
            fontFamily: "Kanit",
            src: `url(${KanitTTF}) format("truetype")`
          },
        }
      }
    },
  });
  return (
    <div className='App'>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RoutesPage></RoutesPage>
      </ThemeProvider>
    </div>

  );
}
export default App;
