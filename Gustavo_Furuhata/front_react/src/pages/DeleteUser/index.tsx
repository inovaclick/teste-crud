import React, { useCallback, useState } from 'react';

import { useHistory } from 'react-router-dom';
import api from '../../services/api';
import { useToast } from '../../hooks/toast';

import {
  Container,
  Form,
  SubmitButton,
  ReturnButton,
  UserCard,
  DeleteCard,
} from './styles';

interface IUser {
  id: string;
  name: string;
  email: string;
}

const DeleteUser: React.FC = () => {
  const [id, setId] = useState('');
  const [user, setUser] = useState<IUser>({} as IUser);
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
          setUser(response.data);
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

  const handleDelete = useCallback(async () => {
    try {
      await api.delete(`/usuarios/${id}`);

      addToast({
        type: 'success',
        title: 'Usuário removido',
        description: `O usuário ${user.name} foi removido com sucesso`,
      });
      history.push('/');
    } catch (err) {
      addToast({
        type: 'error',
        title: 'Ocorreu um erro ao remover usuário',
        description: `${err}`,
      });
    }
  }, [user, id, addToast, history]);

  const handleChangeId = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setId(event.target.value);
    },
    [],
  );

  const handleReturn = useCallback(() => {
    history.push('/');
  }, [history]);

  return (
    <Container>
      <h1>Remover usuário</h1>
      <h3>Digite o ID do usuário que deseja remover</h3>
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
        <DeleteCard>
          <UserCard>
            <span>ID: {user.id}</span>
            <span>Nome: {user.name}</span>
            <span>Email: {user.email}</span>
          </UserCard>
          <SubmitButton type="button" onClick={handleDelete}>
            CONFIRMAR EXCLUSÃO
          </SubmitButton>
        </DeleteCard>
      ) : null}
    </Container>
  );
};

export default DeleteUser;
