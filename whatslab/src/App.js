import React from 'react';
import './App.css';
import InputApp from './Components-Input/InputApp'
class App extends React.Component {
  render() {
    return (
      <main className="App">
        <InputApp 
        placeholder = {"Usuário"}
        />
      </main>
    );
  }
}

export default App;
