import api from './api';
const token = localStorage.getItem('token');

var Authenticated = Boolean;

function withToken(){
  api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`;
  api.get('/users')
    .then(
      Authenticated = true
    ).catch( function(e){
      Authenticated = false;
      localStorage.removeItem('token');
    });
}

if(!token){
  Authenticated = false;
} else {
  withToken();
}

export const isAuthenticated = () => Authenticated;