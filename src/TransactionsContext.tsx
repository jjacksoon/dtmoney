import  {createContext, ReactNode, useEffect, useState} from 'react'
import { api } from './services/api';

interface Transaction{
  id: number, 
  title: string, 
  amount: number, 
  type: string, 
  category:string, 
  createdAt: string
}
interface TransactionsProviderProps{
  children: ReactNode; //Tipagem ReactNode aceita qualquer tipo de conteudo valido pelo react (tags html, jsx, texto ou qualquer coisa que eu possa colocar dentro do jsx)
}

//Fazendo, via typescript, que o TransactionIput herde da interface Transaction todas as tipagens, exceto id e createdAt
type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>;

interface TransactionsContextData {
  transactions: Transaction[],
  createTransaction: (transaction: TransactionInput) => Promise<void>;
}

export const TransactionsContext = createContext<TransactionsContextData>({} as TransactionsContextData);

export function TransactionsProvider({children}: TransactionsProviderProps){
  const[transactions, setTransactions] = useState<Transaction[]>([]);
  
  //Requisição para a API Fictícia
  useEffect(() => {
    api.get('transactions')
    .then(response => setTransactions(response.data.transactions))
  }, []);
  
  async function createTransaction(transactionInput: TransactionInput){
    const response = await api.post('/transactions', {...transactionInput, createdAt: new Date()})
    const {transaction} = response.data;
    setTransactions([...transactions, transaction]);
  }


  return(
    <TransactionsContext.Provider value={{transactions, createTransaction}}>
      {children}
    </TransactionsContext.Provider>
  );
}