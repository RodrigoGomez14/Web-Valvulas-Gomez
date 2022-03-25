import './App.css';
import Home from './Pages/Home';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Layout from './Layout'
import { ParallaxProvider } from 'react-scroll-parallax';
function App() {
  const themeProvider = createTheme({
    palette: {
        white:'#fff',
        primary: {
          light: '#48a999',
          main: '#00796b',
          dark: '#004c40',
          contrastText: '#fff',
        },
        secondary: {
          light: '#ff5c8d',
          main: '#d81b60',
          dark: '#a00037',
          contrastText: '#000',
        },
        danger:{
          main:'#c62828'
        },
        success:{
          main:'#2e7d32'
        },
        type:'dark'
    },
  });
  return (
    <ThemeProvider theme={themeProvider}>
      <ParallaxProvider>
        <Router>
          <Routes>
            <Route exact path='/' element={<Layout component={<Home/>}/>}></Route>
            <Route exact path='/Productos' element={<Layout component={<Home/>}/>}></Route>
            <Route exact path='/Nosotros' element={<Layout component={<Home/>}/>}></Route>
            <Route exact path='/Contacto' element={<Layout component={<Home/>}/>}></Route>
          </Routes>
        </Router>
      </ParallaxProvider>
    </ThemeProvider>
  );
}

export default App;
