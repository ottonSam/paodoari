import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Logo } from './styles';

import Logout from '../Logout';

// import { Container } from './styles';

function Header() {
  return (
    <Container>
        <Logo>
          <img src="logo.png"  />
        </Logo>
        <Link to="/">
          Início
        </Link>
        <Link to="/pedidos">
          Pedidos
        </Link>
        <Link to="/perfil">
          Perfil
        </Link>
        <Logout />
    </Container>
    );
}

export default Header;