import React, { useEffect, useState } from 'react';

import api from '../../services/api';

import Header from '../../components/Header';

// import { Container } from './styles';

function MeusPedidos() {

  const [requests, setRequests] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await api.get('/request/user');
      setRequests(data);
    })();
  }, []);  

  return(
    <div>
        <Header />
      <h1>Pagina de meus pedidos</h1>
      <ul>
        {requests.map((request) => (
          <li key={request.id}>{request.pedido}</li>
        )) }
      </ul>
    </div>
  );
}

export default MeusPedidos;