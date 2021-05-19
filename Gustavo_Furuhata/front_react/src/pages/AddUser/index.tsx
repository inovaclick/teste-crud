import React, { useCallback, useState } from 'react';

import { useHistory } from 'react-router-dom';
import api from '../../services/api';
import { useToast } from '../../hooks/toast';

import { Container, Form, SubmitButton, ReturnButton } from './styles';

const AddUser: React.FC = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const { addToast } = useToast();
  const history = useHistory();

  const handleSubmit = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      if (!nome.length || !email.length || !senha.length) {
        addToast({
          type: 'error',
          title: 'Preencha todos os campos',
        });
      } else {
        try {
          await api.post('/usuarios', {
            name: nome,
            email,
            password: senha,
          });
          setNome('');
          setSenha('');
          setEmail('');
          addToast({
            type: 'success',
            title: 'Usuário cadastrado',
            description: `O usuário ${nome} foi cadastrado com sucesso`,
          });
          history.push('/');
        } catch (err) {
          addToast({
            type: 'error',
            title: 'Ocorreu um erro ao cadastrar usuário',
            description: `${err}`,
          });
        }
      }
    },
    [nome, email, senha, addToast, history],
  );

  const handleChangeNome = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setNome(event.target.value);
    },
    [],
  );

  const handleChangeEmail = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(event.target.value);
    },
    [],
  );

  const handleChangeSenha = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSenha(event.target.value);
    },
    [],
  );

  const handleReturn = useCallback(() => {
    history.push('/');
  }, [history]);

  return (
    <Container>
      <h1>Cadastrar usuário</h1>
      <Form onSubmit={handleSubmit}>
        <input
          type="text"
          name="Nome"
          id="name"
          placeholder="Nome"
          onChange={handleChangeNome}
          value={nome}
        />
        <input
          type="email"
          name="Email"
          id="email"
          placeholder="Email"
          onChange={handleChangeEmail}
          value={email}
        />
        <input
          type="password"
          name="Senha"
          id="password"
          placeholder="Senha"
          onChange={handleChangeSenha}
          value={senha}
        />
        <SubmitButton type="submit">CADASTRAR</SubmitButton>
      </Form>
      <ReturnButton type="button" onClick={handleReturn}>
        VOLTAR
      </ReturnButton>
    </Container>
  );
};

export default AddUser;
