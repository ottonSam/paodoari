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
    margin-left: auto;
    width: 40px
  }
  input[type=submit]{
    width: 200px;
    height: 30px;
    margin: auto;
    margin-top: 20px;
    background: #fd643b;
    border: white;
    color: #fff;
    font-weight: bold;

    &:hover{
      zoom: 120%;
    }
  }
  
`
export const Container = styled.div`
  margin: auto;
  margin-top: 40px;


  h2 {
    width: 400px;
    text-align: center;
    font-size: 24px;
    padding: 10px;
    background: #fd643b;
    color: #fff;
  }
`