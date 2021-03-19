import React, { useEffect, useState } from 'react';

import api from '../../services/api';

import Header from '../../components/Header';

import { Container, Title, List } from '../Homepage/styles';

// import { Container } from './styles';

function Perfil() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    (async () => {
      const userData = await api.get('/users');
      setUser(userData.data);
    })();
  }, []);  
  return(
    <div>
      <Header />
      <Container>
        <Title>Perfil, <span>Detalhes do Cliente!</span></Title>
        <List>  
          <p>Email: {user.email}</p>
          <p>Usuário: {user.usuario}</p>
          <p>Cpf: {user.cpf}</p>
          <p>Telefone: {user.telefone}</p>
          <p>Data de Nascimento: {user.data_de_nascimento}</p>
          <p>Estado: {user.estado}</p>
          <p>Cidade: {user.cidade}</p>
          <p>Logadouro: {user.logadouro}</p>
          <p>Numero da casa: {user.numero}</p>
          <p>Ponto de referencia{user.ponto_de_referencia}</p>
        </List>
      </Container>
    </div>
  );
}

export default Perfil;