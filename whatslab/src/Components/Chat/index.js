import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

import {
  ChatWrapper,
  ChatContainer,
  CardMenssagem,
  FormEnviarMenssagem,
} from './style';
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

    this.setState({
      usuarioInputvalue: '',
      menssagemInputvalue: '',
    });

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
        <ChatContainer>
          <section>
            {this.state.chat.map(({ user, msg }, index) => (
              <CardMenssagem key={index}>
                <span>
                  {user}: <i>{msg}</i>
                </span>
              </CardMenssagem>
            ))}
          </section>

          <FormEnviarMenssagem>
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
            <button type="submit" onClick={this.showMenssagem}>
              <FontAwesomeIcon icon={faPaperPlane} />
            </button>
          </FormEnviarMenssagem>
        </ChatContainer>
      </ChatWrapper>
    );
  }
}

export default Chat;
