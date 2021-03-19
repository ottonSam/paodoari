import React, { useEffect, useState } from 'react';

import api from '../../services/api';

import Header from '../../components/Header';

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
      <h1>Perfil</h1>
      <p>{user.email}</p>
      <p>{user.cidade}</p>
      <p>{user.cpf}</p>
      <p>{user.estado}</p>
      <p>{user.logadouro}</p>
      <p>{user.numero}</p>
      <p>{user.ponto_de_referencia}</p>
      <p>{user.telefone}</p>
      <p>{user.data_de_nascimento}</p>
      <p>{user.usuario}</p>
    </div>
  );
}

export default Perfil;