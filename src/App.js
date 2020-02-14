import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled from "styled-components";

const Center = styled.div`
  display: flex;
  justify-content: center;
`



function App() {
  return (
    <Center>
      <img src={logo} className="App-logo" alt="logo" />
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </Center>
  );
}

export default App;
