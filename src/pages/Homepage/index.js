import React, { useEffect, useState } from 'react';

import api from '../../services/api';

import Header from '../../components/Header';

// import { Container } from './styles';

function Homepage() {

  const [user, setUser] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await api.get('/users');
      setUser(data);
    })();
  }, []);  

  return(
    <div>
      <Header />
      <h1>Pagina de inicio</h1>
      <ul>
          <li>({user.id})</li>
          <li>({user.usuario})</li>
          <li>({user.telefone})</li>
      </ul>
    </div>
  );
}

export default Homepage;