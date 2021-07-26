import styled from 'styled-components';

export const ChatWrapper = styled.section`
  align-items: center;
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const ChatContainer = styled.section`
  align-items: flex-start;
  background: #e5ddd5;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: flex-end;
  padding: 8px 0;
  width: 600px;

  section {
    padding: 0 2%;
  }
`;

export const CardMenssagem = styled.p`
  align-items: center;
  background: whitesmoke;
  border-radius: 10px;
  display: flex;
  height: 50px;
  justify-content: center;
  margin: 6px 0;
  padding: 0 6px;

  span {
    font-weight: bold;
  }

  i {
    font-style: normal;
    font-weight: normal;
  }
`;

export const FormEnviarMenssagem = styled.form`
  display: flex;
  justify-content: space-between;
  padding: 0 1%;
  width: 100%;

  input {
    border: 0;
    border-radius: 8px;
    margin: 0 5px;
    padding: 10px 5px;
  }

  input:nth-child(1) {
    width: 30%;
  }

  input:nth-child(2) {
    width: 80%;
  }

  button {
    background: whitesmoke;
    border: 0;
    border-radius: 100px;
    width: 10%;
  }
`;
