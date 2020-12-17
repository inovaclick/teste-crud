import React, { useCallback } from 'react';

import { useHistory } from 'react-router-dom';

import { Container, Card } from './styles';

const Dashboard: React.FC = () => {
  const history = useHistory();

  const handleAddUser = useCallback(() => {
    history.push('/add');
  }, [history]);

  const handleSearchUsers = useCallback(() => {
    history.push('/users');
  }, [history]);

  const handleSearchUser = useCallback(() => {
    history.push('/user');
  }, [history]);

  const handleUpdateUser = useCallback(() => {
    history.push('/update');
  }, [history]);

  const handleDeleteUpdateUser = useCallback(() => {
    history.push('/delete');
  }, [history]);

  return (
    <Container>
      <Card type="button" color="#337e3e" onClick={handleAddUser}>
        Cadastrar usuário
      </Card>
      <Card type="button" color="#0e6161" onClick={handleSearchUsers}>
        Buscar todos os usuários
      </Card>
      <Card type="button" color="#1f3b3b" onClick={handleSearchUser}>
        Buscar usuário por ID
      </Card>
      <Card type="button" color="#245297" onClick={handleUpdateUser}>
        Atualizar usuário
      </Card>
      <Card type="button" color="#2a8d8d" onClick={handleDeleteUpdateUser}>
        Remover usuário
      </Card>
    </Container>
  );
};

export default Dashboard;
