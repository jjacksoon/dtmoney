import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import { createServer, Model } from 'miragejs';

createServer({
  models: {   //Criação de um BD da API
    transaction: Model, //BD Vazio
  },

  seeds(server){
    server.db.loadData({
      transactions: [
        {
        id:1, 
        title: 'Freelance de website', 
        type: 'deposit', 
        category: 'Development', 
        amount: 6000, 
        createdAt: new Date('2021-02-12 09:00:00')
        },
        {
          id:2, 
          title: 'Aluguel', 
          type: 'withdraw', 
          category: 'Casa', 
          amount: 1200, 
          createdAt: new Date('2021-02-14 11:00:00')
        },
      ],
    })
  },

  routes(){
    this.namespace = 'api';
    
    //Requisição GET
    this.get('/transactions', () => {
      return this.schema.all('transaction');
    })

    //Requisição POST
    this.post('/transactions', (schema, request) =>{
      const data = JSON.parse(request.requestBody) //conversão para JSON
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