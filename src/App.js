import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Archive from './pages/Archive';
import ToDo from './pages/ToDo';
import './App.css';
import { theme, CSSReset, ThemeProvider, AlertDialogBody, Flex } from "@chakra-ui/core";

// Let's say you want to add custom colors
const customTheme = {
  ...theme,
  fonts: {
    heading: "'Bebas Neue', cursive",
    body: "'Bebas Neue', cursive",
    monospace: "'Peddana', serif"
  },
  colors: {
    ...theme.colors,
    brand: {
      900: "#1a365d",
      800: "#153e75",
      700: "#2a69ac",
    },
  },
};

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <CSSReset />
      <BrowserRouter>
      <Nav />
      <Flex p={3} direction="column" align="center">
      <Route path="/ToDo"><ToDo /></Route>
      <Route path="/Archive"><Archive /></Route>
      </Flex>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
