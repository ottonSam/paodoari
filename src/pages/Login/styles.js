import styled from 'styled-components';

export const Form = styled.form`
  padding: 10px;
  background: #fff;
  display: flex;
  width:400px;
  flex-direction: column;  
  
  div {
    border-bottom: 1px solid;
    
    & + div {
      margin-top: 20px;
    }
  }
  
  fieldset {
    border: 0px;
    display: flex;
    height: 30px;
    align-items: center;
    font-size: 16px;
  }
  input{
    padding:5px;
    margin: auto;
    width: 350px;
    margin-bottom: 30px;
    height: 50px;
  }
  button{
    width: 350px;
    height: 50px;
    margin: auto;
    margin-bottom: 20px;
    background: #fd643b;
    border: white;
    color: #fff;
    font-weight: bold;
  }
  a{
    font-size: 18;
    margin-left: 15px
  }
`
export const Container = styled.div`
  display:flex;
  flex: 1;
  flex-direction: column;
  max-width: 920px;
  align-items: center;
  margin: auto;
  margin-top: 200px;

  p {
    margin: auto;
    margin-top: 20px;
    margin-bottom: 50px;
    font-size: 20px;
  }

  span {
    font-size: 30px;
    margin-top: 15px;
    padding: 13px;
    background: #fd643b;
    color: #FFF;
    transition: transform 0.3s;
    
    &:hover {
      transform: translateY(12px);
    }
  }

`