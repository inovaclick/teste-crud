import React, { useCallback, useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/Feather';
import api from '../../services/api';

import {
  Container,
  Header,
  UsersList,
  UserContainer,
  UserInfo,
  UserText,
  UsersListTitle,
  BackButton,
  BackText,
} from './styles';

import { useNavigation } from '@react-navigation/native';

export interface IUser {
  id: string;
  name: string;
  email: string;
}

const SearchUsers: React.FC = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const navigation = useNavigation();

  useEffect(() => {
    api.get('usuarios').then((response) => {
      setUsers(response.data);
    });
  }, []);


  return (
    <Container>
      <Header>
      <BackButton onPress={() => navigation.navigate('Dashboard')}>
        <Icon name="arrow-left" size={20} color="#fff" />
        <BackText>Voltar</BackText>
      </BackButton>
      </Header>

      <UsersList
        data={users}
        keyExtractor={(user: IUser) => user.id}
        ListHeaderComponent={
          <UsersListTitle>Usuários encontrados</UsersListTitle>
        }
        renderItem={({ item: user }) => (
          <UserContainer
          >
            <UserInfo>
              <UserText>ID: {user.id}</UserText>
              <UserText />
              <UserText>Nome: {user.name}</UserText>
              <UserText />
              <UserText>Email: {user.email}</UserText>
            </UserInfo>
          </UserContainer>
        )}
      />
    </Container>
  );
};

export default SearchUsers;
