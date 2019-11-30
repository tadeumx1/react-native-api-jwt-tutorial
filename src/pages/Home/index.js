import React, { useState } from 'react'
import PropTypes from 'prop-types'

import {
  Container,
  Title,
  Button,
  ButtonText
} from './styles';

import api from '../../services/api'
import { deleteUser } from '../../utils';

export default function Home(props) {
  const [text, setText] = useState('');

  async function loadProducts() {
    const { data } = await api.get('/product')
    console.warn(data)
    setText(data)
  }

  async function Logout() {
    deleteUser()
      .then(() => {
        props.navigation.navigate('AuthLoading')
      })
  }

  return (
    <Container>
        <Title>Home</Title>
        <Button onPress={loadProducts}>
          <ButtonText>Teste</ButtonText>
        </Button>
        <Button onPress={Logout}>
          <ButtonText>Sair</ButtonText>
        </Button>
        <Title>Resposta API</Title>
        {text ? <Title>{text}</Title> : null}
    </Container>
  );
}

Home.navigationOptions = () => {
  return {
    header: null,
  };
};

Home.propTypes = {
  navigation: PropTypes.shape({
    dispatch: PropTypes.func,
  }).isRequired,
};
