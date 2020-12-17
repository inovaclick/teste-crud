import React, { useCallback, useState } from 'react';

import { useHistory } from 'react-router-dom';
import api from '../../services/api';
import { useToast } from '../../hooks/toast';

import { Container, Form, SubmitButton, ReturnButton } from './styles';

const UpdateUser: React.FC = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [senha_antiga, setSenhaAntiga] = useState('');
  const [id, setId] = useState('');
  const [isEmpty, setIsEmpty] = useState(true);
  const { addToast } = useToast();
  const history = useHistory();

  const handleSubmit = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      if (!id.length) {
        addToast({
          type: 'error',
          title: 'Preencha o campo de ID',
        });
      } else {
        try {
          const response = await api.get(`/usuarios/${id}`);
          setNome(response.data.name);
          setEmail(response.data.email);
          setIsEmpty(false);
        } catch (err) {
          addToast({
            type: 'error',
            title: 'Ocorreu um erro ao buscar usuário',
            description: 'Usuário não encontrado',
          });
          setIsEmpty(true);
        }
      }
    },
    [id, addToast],
  );

  const handleSubmitForm = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      if (!nome.length || !email.length) {
        addToast({
          type: 'error',
          title: 'Preencha todos os campos',
        });
      } else {
        try {
          if (!senha_antiga.length && !senha.length) {
            await api.put(`/usuarios/${id}`, {
              name: nome,
              email,
            });
          } else {
            await api.put(`/usuarios/${id}`, {
              name: nome,
              email,
              old_password: senha_antiga,
              password: senha,
            });
          }
          addToast({
            type: 'success',
            title: 'Usuário atualizado',
            description: `O usuário ${nome} foi atualizado com sucesso`,
          });
          history.push('/');
        } catch (err) {
          addToast({
            type: 'error',
            title: 'Ocorreu um erro ao atualizar usuário',
            description: `${err}`,
          });
        }
      }
    },
    [nome, email, senha, senha_antiga, id, addToast, history],
  );

  const handleChangeId = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setId(event.target.value);
    },
    [],
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

  const handleChangeSenhaAntiga = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSenhaAntiga(event.target.value);
    },
    [],
  );

  const handleReturn = useCallback(() => {
    history.push('/');
  }, [history]);

  return (
    <Container>
      <h1>Atualizar usuário</h1>
      <h3>Digite o ID do usuário que deseja atualizar</h3>
      <Form onSubmit={handleSubmit}>
        <input
          type="text"
          name="Id"
          id="id"
          placeholder="ID"
          onChange={handleChangeId}
          value={id}
        />
        <SubmitButton type="submit">PROCURAR</SubmitButton>
      </Form>
      <ReturnButton type="button" onClick={handleReturn}>
        VOLTAR
      </ReturnButton>
      {!isEmpty ? (
        <Form onSubmit={handleSubmitForm}>
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
            name="Senha antiga"
            id="old_password"
            placeholder="Senha antiga"
            onChange={handleChangeSenhaAntiga}
            value={senha_antiga}
          />
          <input
            type="password"
            name="Senha nova"
            id="password"
            placeholder="Senha nova"
            onChange={handleChangeSenha}
            value={senha}
          />
          <SubmitButton type="submit">ATUALIZAR</SubmitButton>
        </Form>
      ) : null}
    </Container>
  );
};

export default UpdateUser;
