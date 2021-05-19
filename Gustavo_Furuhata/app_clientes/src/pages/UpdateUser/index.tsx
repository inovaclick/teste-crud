import React, { useCallback, useEffect, useState, useRef } from 'react';
import Icon from 'react-native-vector-icons/Feather';
import api from '../../services/api';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import {
  Alert, KeyboardAvoidingView, ScrollView, TextInput, Platform,
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

interface UpdateFormData {
  name: string;
  email: string;
  old_password?: string;
  password?: string;
}

const UpdateUser: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const emailRef = useRef<TextInput>(null);
  const oldPasswordRef = useRef<TextInput>(null);
  const passwordRef = useRef<TextInput>(null);
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

  const handleUpdate = useCallback(
    async (data: UpdateFormData) => {
      try {
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          name: Yup.string().required('Nome obrigatório'),
          email: Yup.string()
            .required('Email obrigatório')
            .email('Digite um email válido'),
          password: Yup.string(),
          old_password: Yup.string(),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        if (!data.old_password?.length && !data.password?.length) {
          console.log(data);
          await api.put(`usuarios/${user.id}`, {
            name: data.name,
            email: data.email,
          });
        } else {
          await api.put(`usuarios/${user.id}`, data);
        }

        Alert.alert(
          'Atualização realizada com sucesso'
        );

        navigation.navigate('Dashboard');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);

          return;
        }
        console.log(err);

        Alert.alert(
          'Erro na atualização',
          'Ocorreu um erro ao fazer a atualização. Cheque as credenciais',
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
                <Form ref={formRef} onSubmit={handleUpdate} initialData={{ name: user.name, email: user.email }}>
                <Input
                  autoCapitalize="words"
                  name="name"
                  icon="user"
                  returnKeyType="next"
                  placeholder="Nome"
                  onSubmitEditing={() => {
                    emailRef.current?.focus();
                  }}
                />
                <Input
                  ref={emailRef}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  autoCorrect={false}
                  name="email"
                  icon="mail"
                  returnKeyType="next"
                  placeholder="E-mail"
                  onSubmitEditing={() => {
                    oldPasswordRef.current?.focus();
                  }}
                />
                <Input
                  ref={oldPasswordRef}
                  secureTextEntry
                  name="old_password"
                  icon="lock"
                  placeholder="Senha antiga"
                  textContentType="password"
                  returnKeyType="next"
                  onSubmitEditing={() => {
                    passwordRef.current?.focus();
                  }}
                />
                <Input
                  ref={passwordRef}
                  secureTextEntry
                  name="password"
                  icon="lock"
                  placeholder="Senha nova"
                  textContentType="newPassword"
                  returnKeyType="send"
                  onSubmitEditing={() => {
                    formRef.current?.submitForm();
                  }}
                />

                <Button onPress={() => formRef.current?.submitForm()}>
                  Cadastrar
                </Button>
              </Form>
                ) : null}
            </Container>
          </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export default UpdateUser;
