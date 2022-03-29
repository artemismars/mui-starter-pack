import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material";
import { purple } from "@mui/material/colors";

const customTheme = createTheme({
  palette: {
    primary: {
      main: '#f4f4f4'
    },
    secondary: purple,
  },
  typography: {
    fontFamily: 'Quicksand',
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 600
  }
})

function App() {
  return (
    <ThemeProvider theme={customTheme}>
    <Router>
      <Routes>
        <Route path='/' element={<Home />}/>
      </Routes>
    </Router>
    </ThemeProvider>
  );
}

export default App;
