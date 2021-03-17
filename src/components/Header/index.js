import React from 'react';
import { Link } from 'react-router-dom';

import Logout from '../Logout';

// import { Container } from './styles';

function Header() {
  return (
    <div>
      <div>
        <Link to="/">
          Início
        </Link>
      </div>
      <div>
        <Link to="/pedido">
          Pedidos
        </Link>
      </div>
      <div>
        <Link to="/meuspedidos">
          Meus Pedidos
        </Link>
      </div>
      <div>
        <Link to="/perfil">
          Perfil
        </Link>
      </div>
      <div>
        <Logout />
      </div>
    </div>
    );
}

export default Header;