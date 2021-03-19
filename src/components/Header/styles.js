import styled from 'styled-components';

export const Logo = styled.div`
  height:70px;
  display: flex;
  align-items: center;
  flex: 1;
  margin-left: 10px;

  img {
    height:60px;
    width:60px;
  }
`;

export const Container = styled.div `
  height: 70px;
  background: #FFF;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;

  a {
    text-decoration: none;
    font-weight: bold;
    color: #333;
    display:flex;
    align-items: center;
    justify-content: center;
    width:80px;
    height: 70px;
    animation: 0.5s;
  }
  a:hover{
    background: #fd643b;
    color: #FFF;
  }
`