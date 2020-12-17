import React, { useCallback, useEffect, useState, useRef } from 'react';
import Icon from 'react-native-vector-icons/Feather';
import api from '../../services/api';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import {
  Alert, KeyboardAvoidingView, ScrollView, View, Platform,
} from 'react-native';

import {
  Container,
  Header,
  UserContainer,
  UserInfo,
  UserText,
  UserSearchTitle,
  BackButton,
  BackText,
} from './styles';

import getValidationErrors from '../../utils/getValidationErrors';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { useNavigation } from '@react-navigation/native';

export interface IUser {
  id: string;
  name: string;
  email: string;
}

interface SearchFormData {
  id: string;
}

const SearchUser: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const [user, setUser] = useState<IUser>({} as IUser);
  const navigation = useNavigation();

  const handleSearch = useCallback(
    async (data: SearchFormData) => {
      try {
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          id: Yup.string().required('Insira um ID'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        const response = await api.get(`usuarios/${data.id}`);
        setUser(response.data);
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);

          return;
        }

        Alert.alert(
          'Erro na busca',
          'ID inexistente',
        );
      }
    },
    [navigation],
  );


  return (
    <>
    <KeyboardAvoidingView
        style={{ flex: 1 }}
        enabled
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ flex: 1 }}
        >
          <Container>

            <Header>
              <BackButton onPress={() => navigation.navigate('Dashboard')}>
                <Icon name="arrow-left" size={20} color="#fff" />
                <BackText>Voltar</BackText>
              </BackButton>
            </Header>
            <UserSearchTitle>Digite o ID do usuário</UserSearchTitle>
            <Form ref={formRef} onSubmit={handleSearch}>
              <Input
                name="id"
                icon="search"
                placeholder="ID"
                returnKeyType="send"
                onSubmitEditing={() => {
                  formRef.current?.submitForm();
                }}
              />

              <Button onPress={() => formRef.current?.submitForm()}>
                Buscar
              </Button>
            </Form>
            {user.id ? (
              <UserContainer>
                <UserInfo>
                  <UserText>ID: {user.id}</UserText>
                  <UserText />
                  <UserText>Nome: {user.name}</UserText>
                  <UserText />
                  <UserText>Email: {user.email}</UserText>
                </UserInfo>
              </UserContainer>) : null}
          </Container>
        </ScrollView>
    </KeyboardAvoidingView>
    </>
  );
};

export default SearchUser;
