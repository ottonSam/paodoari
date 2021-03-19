import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";

import api from '../../services/api';

// import { Container } from './styles';

function PedidoForm(props) {

  const { day, dayNumber } = props;
  const [ product, setProduct ] = useState([]);
  const [ requests, setRequest ] = useState([]);
  const [ reqDayExists, setReqDayExists ] = useState(false); 

  let i = 0;
  
  const { register, handleSubmit } = useForm();

  const onSubmit = async data => {
    await api.delete(`/request/day/${reqDayExists}`);
    data.products.map(async (dados) => {
      if(dados.idProduto && dados.quantidade != 0){
        if(reqDayExists) {
          const produto = dados.idProduto;
          const quantidade = dados.quantidade;
          const dia = reqDayExists;
          await api.post('/request', {dia, produto, quantidade});

        } else {
          let dia = dayNumber;
          const newReqDay = await api.post('/requestday', {dia});
          setReqDayExists(newReqDay.data.id);
          
          const produto = dados.idProduto;
          const quantidade = dados.quantidade;
          dia = reqDayExists;
          await api.post('/request', {dia, produto, quantidade});
        
        }
        
        
      }
    })
  };

  function requestExists(produto, produtoNome, fieldName){
    const index = requests.findIndex(val => val.produto == produto);
    if(index >= 0){
      return (
        <div>
          {produtoNome}
          <fieldset>
            <input defaultChecked type="checkbox" name={`${fieldName}.idProduto`} ref={register} value={produto} ></input>
            quantidade
            <input type="number" name={`${fieldName}.quantidade`} ref={register} defaultValue={requests[index].quantidade}></input>
          </fieldset>
        </div>
      );
    } else {
      return (
        <div>
          {produtoNome}
          <fieldset>
            <input  type="checkbox" name={`${fieldName}.idProduto`} ref={register} value={produto} ></input>
            quantidade
            <input type="number" name={`${fieldName}.quantidade`} ref={register} ></input>
          </fieldset>
        </div>
      );
    }
  }

  useEffect(() => {
    (async () => {
      const requestDayData = await api.get('/requestday/user');
      requestDayData.data.map(async (requestDay) => {
        if(requestDay.dia == dayNumber){
          const requestData = await api.get(`/request/day/${requestDay.id}`);
          setReqDayExists(requestDay.id);
          setRequest(requestData.data);
        
        }
      })
      
      
      const productData = await api.get('/product');
      setProduct(productData.data);
    })();
  }, []);


  
  return (
    <div>
      <h2>{day}</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {product.map((prod) => {
          const fieldName = `products[${i}]`;
          i++;
          return (
            <div key={prod.id}>
              {requestExists(prod.id, prod.produto, fieldName)}
            </div>
        )}) }

        <input type="submit" />
      </form>
    </div>
  );
}

export default PedidoForm;