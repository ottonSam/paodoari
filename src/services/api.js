import axios from 'axios';

export default axios.create({
  baseURL: 'https://bakerydeliveryapi.herokuapp.com',
});