import styled from 'styled-components';

export const Title = styled.h1`
  margin-top: 30px;
  font-size: 30px;
  color: #333;

  span {
    background: #fd643b;
    padding: 13px;
    color: #FFF;
  }
`

export const Container = styled.div`
  display:flex;
  flex: 1;
  flex-direction: column;
  max-width: 920px;
  margin: 20px;
  align-items: center;
  margin: auto;

  p {
    margin-top: 20px;
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

export const List = styled.div`
  max-width: 920px;
  margin: auto;
  padding: 20px;

  div{
    padding: 10px;
    background: #fff;
    border: 1px solid #fff;
    border-radius: 5px 0px 5px 0px;
    margin-left: 16px;
    display:flex;
    align-items: center;
    transition: transform 0.3s;

    &:hover {
      transform: translateX(10px);
    }

    & + div {
      margin-top: 16px
    }

    svg {
      padding: 10px;
      border: 1px solid #333;
      color: #333;
      border-radius: 50%;
    }

    p {
      margin-left: 20px;
      font-size: 20px;
    }
  }
`