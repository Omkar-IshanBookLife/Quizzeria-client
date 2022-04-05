import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {ChakraProvider} from "@chakra-ui/react"
import Navbar from './components/navbar';

ReactDOM.render(
  <ChakraProvider>
    <React.StrictMode>
      <Navbar />
      <App />
    </React.StrictMode>
  </ChakraProvider>,
  document.getElementById('root')
);
