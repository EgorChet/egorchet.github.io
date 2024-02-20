import React from 'react';
import Navbar from './components/Navbar';
// import HomePage from './components/HomePage';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Skills from './components/Skill';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { Element } from 'react-scroll';
import "./App.css"


const theme = createTheme({
  palette: {
    mode: 'light',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      {/* <Element name="home"><HomePage /></Element> */}
      <Element name="about"><AboutMe /></Element>
      <Element name="skills"><Skills /></Element>
      <Element name="projects"><Projects /></Element>
      <Element name="contact"><Contact /></Element>
      <Footer />
    </ThemeProvider>
  );
}

export default App;



