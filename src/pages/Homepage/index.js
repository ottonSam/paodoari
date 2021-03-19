import React, { useEffect, useState } from 'react';

import api from '../../services/api';

import Header from '../../components/Header';

// import { Container } from './styles';

function Homepage() {

  const [user, setUser] = useState([]);
  const [product, setProduct] = useState([]);

  useEffect(() => {
    (async () => {
      const userData = await api.get('/users');
      setUser(userData.data);
      const productData = await api.get('/product');
      setProduct(productData.data)
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
      <p>Produtos disponíveis</p>
      <ul>
        {product.map((prod) => (
          <li key={prod.id}>{prod.produto}</li>
        )) }
      </ul>
    </div>
  );
}

export default Homepage;