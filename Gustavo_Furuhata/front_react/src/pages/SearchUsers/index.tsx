import React, { useState, useEffect } from 'react';
import { FiArrowLeft } from 'react-icons/fi';

import { Link } from 'react-router-dom';
import api from '../../services/api';

import { Container } from './styles';

interface IUser {
  id: string;
  name: string;
  email: string;
}

const SearchUsers: React.FC = () => {
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    async function loadUsers(): Promise<void> {
      const response = await api.get('/usuarios');
      setUsers(response.data);
    }

    loadUsers();
  }, []);

  return (
    <Container>
      <Link to="/">
        <FiArrowLeft /> Voltar
      </Link>
      <h1>Usuários cadastrados</h1>
      {users.map((user) => (
        <div key={user.id}>
          <span>ID: {user.id}</span>
          <span>Nome: {user.name}</span>
          <span>Email: {user.email}</span>
        </div>
      ))}
    </Container>
  );
};

export default SearchUsers;
