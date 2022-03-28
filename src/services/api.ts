//Pasta services serve como uma espécie de pasta para serviços de dados, isto é, locais onde possa buscar dados sejam eles de uma api, um banco de dados, etc.

import axios from 'axios';
//Setando instâncias padrão para todas as requisições da API
export const api = axios.create({
  baseURL: 'http://localhost:3000/api',
});
