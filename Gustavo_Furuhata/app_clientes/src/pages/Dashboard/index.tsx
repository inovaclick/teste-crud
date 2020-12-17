import React, { useCallback, useEffect, useState } from 'react';
import { Text } from 'react-native';

import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

import {
  Container,
  Header,
  HeaderTitle,
  UserButton,
} from './styles';

const Dashboard: React.FC = () => {
  const { navigate } = useNavigation();

  const navigateToNewUser = useCallback(() => {
    navigate('AddUser');
  }, [navigate]);

  const navigateToSearchUsers = useCallback(() => {
    navigate('SearchUsers');
  }, [navigate]);

  const navigateToSearchUser = useCallback(() => {
    navigate('SearchUser');
  }, [navigate]);

  const navigateToUpdateUser = useCallback(() => {
    navigate('UpdateUser');
  }, [navigate]);

  const navigateToDeleteUser = useCallback(() => {
    navigate('DeleteUser');
  }, [navigate]);

  return (
    <Container>
      <Header>
        <HeaderTitle>
          Inovaclick {'\n'}
          Teste CRUD
        </HeaderTitle>
      </Header>
      <UserButton onPress={navigateToNewUser}>
          <Text style={{ fontSize: 24, color: '#f2f2f2' }}><Icon name="plus" size={24} color="#ff9000" /> Adicionar usuário</Text>
      </UserButton>

      <UserButton onPress={navigateToSearchUsers}>
          <Text style={{ fontSize: 24, color: '#f2f2f2' }}><Icon name="search" size={24} color="#ff9000" /> Buscar usuários</Text>
      </UserButton>

      <UserButton onPress={navigateToSearchUser}>
          <Text style={{ fontSize: 24, color: '#f2f2f2' }}><Icon name="search" size={24} color="#ff9000" /> Buscar usuário por ID</Text>
      </UserButton>

      <UserButton onPress={navigateToUpdateUser}>
          <Text style={{ fontSize: 24, color: '#f2f2f2' }}><Icon name="edit" size={24} color="#ff9000" /> Atualizar usuário</Text>
      </UserButton>

      <UserButton onPress={navigateToDeleteUser}>
          <Text style={{ fontSize: 24, color: '#f2f2f2' }}><Icon name="trash-2" size={24} color="#ff9000" /> Remover usuário</Text>
      </UserButton>
    </Container>
  );
};

export default Dashboard;
