import React from 'react';
import './App.css';

import Chat from './Components/Chat';
import InputApp from './Components-Input/InputApp'

class App extends React.Component {
  render() {
    return (
      <main className="App">
        <Chat />
        <InputApp 
        placeholder={"Usuário"}
        />
      </main>
    );
  }
}

export default App;
