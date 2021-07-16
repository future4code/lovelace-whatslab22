import React from 'react';
import { ChatWrapper } from './style';
import Input from '../Components-Input/InputApp';

class Chat extends React.Component {
  state = {
    chat: [],
    usuarioInputvalue: '',
    menssagemInputvalue: '',
  };

  getUsuarioInputValue = ({ target }) =>
    this.setState({ usuarioInputvalue: target.value });

  getMenssagemInputValue = ({ target }) => {
    this.setState({ menssagemInputvalue: target.value });
  };

  showMenssagem = (event) => {
    event.preventDefault();

    const arrCopia = this.state.chat;
    const dados = {
      user: this.state.usuarioInputvalue,
      msg: this.state.menssagemInputvalue,
    };

    this.setState({ chat: [...arrCopia, dados] });
  };

  render() {
    return (
      <ChatWrapper>
        <div>
          <section>
            {this.state.chat.map(({user, msg}, index) => (
              <span key={index}>
                <strong>{user}: <span>{msg}</span></strong>
              </span>
            ))}
          </section>
          <form>
            <Input
              placeholder="Usuário"
              value={this.state.usuarioInputvalue}
              onChange={this.getUsuarioInputValue}
            />
            <Input
              placeholder="Mensagem"
              value={this.state.menssagemInputvalue}
              onChange={this.getMenssagemInputValue}
            />
            <button onClick={this.showMenssagem}>Enviar</button>
          </form>
        </div>
      </ChatWrapper>
    );
  }
}

export default Chat;
