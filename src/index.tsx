import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import { createServer, Model } from 'miragejs';

createServer({
  models: {
    transaction: Model, 
  },

  routes(){
    this.namespace = 'api';
    
    //Requisição GET
    this.get('/transactions', () => {
      return this.schema.all('transaction');
    })

    //Requisição POST
    this.post('/transactions', (schema, request) =>{
      const data = JSON.parse(request.requestBody)
      return schema.create('transaction', data); //schema = banco de dados
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);