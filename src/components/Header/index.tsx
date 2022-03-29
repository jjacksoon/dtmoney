import { useState } from 'react'
import logoImg from '../../assets/logo.svg'
import { Container, Content } from './styles'
import Modal from 'react-modal'

interface HeaderProps{
  onOpenNewTransactionModal: () => void; //prop que é uma função cujo retorno é  vazio
}

export function Header({onOpenNewTransactionModal}: HeaderProps){
  return(
    <Container>
      <Content>
      <img src= {logoImg} alt="DT Money" />
      <button type="button" onClick={onOpenNewTransactionModal}>Nova transação</button>
 
      </Content>
    </Container>
  )
}