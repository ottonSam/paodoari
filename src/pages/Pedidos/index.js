import React from 'react';

import Header from '../../components/Header';
import PedidoForm from '../../components/PedidoForm';

// import { Container } from './styles';

function Pedidos() {
    
  return(
    <div>
      <Header />
      <h1>Pedidos</h1>
      <PedidoForm day="Segunda Feira" dayNumber={1} />
      <PedidoForm day="Terça Feira" dayNumber={2} />
      <PedidoForm day="Quarta Feira" dayNumber={3} />
      <PedidoForm day="Quinta Feira" dayNumber={4} />
      <PedidoForm day="Sexta Feira" dayNumber={5} />
      <PedidoForm day="Sábado" dayNumber={6} />
    </div>
  );
}

export default Pedidos;