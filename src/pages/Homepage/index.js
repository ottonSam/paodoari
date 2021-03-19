import React, { useEffect, useState } from 'react';
import { BiFoodMenu } from 'react-icons/bi';

import api from '../../services/api';

import Header from '../../components/Header';

import { Title, Container, List } from './styles';

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
      <Container>
        <Title>Olá, <span>Bem vindo(a) {user.usuario}!</span></Title>
        <p>Ficamos felizes que você decidiu assinar o nosso serviço de entregas, sendo assim como combinado você pagará R$0,30 na unidade de pão e R$7,00 na unidade de bolo.</p>
        <span>Veja nossos produtos!!</span>
      </Container>
      <List>
        {product.map((prod) => (
          <div>
             <BiFoodMenu size={40} />
            <p key={prod.id}>{prod.produto}</p>
          </div>
        )) }
      </List>
    </div>
  );
}

export default Homepage;