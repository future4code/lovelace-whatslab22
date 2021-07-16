import React from 'react';
import { ChatWrapper } from './style';
import Input from '../../Components-Input/InputApp'

class Chat extends React.Component {
  render() {
    return (
      <ChatWrapper>
      
        <div >
        <section>
          Texto
         
          </section>
          <form>
          <Input 
          placeholder = "Usuário"
          /> 
          <Input 
          placeholder = "Mensagem"
          /> 
          <button>Enviar</button>
          </form>
        </div>
       
      </ChatWrapper>
    );
  }
}

export default Chat;
