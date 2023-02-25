

import { GlobalStyle } from './styles/global';
import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import { createServer, Server } from 'miragejs';
import Modal from 'react-modal';
import { useState } from 'react';
import { NewTransactionModal } from './components/NewTransactionModal'

createServer({
    routes(){
        this.namespace = "api";
        this.get("/transactions", () => {
            return[
                {id: 1, title: 'Transaction 1', amount : 400, type: 'deposit', category: 'food', CreatedAt: new Date()},
                {id: 2, title: 'Transaction 2', amount : 800, type: 'debit', category: 'fun', CreatedAt: new Date()}
            ]
        })
    },
})

Modal.setAppElement('#root');

export function App() {
    const [isNewTrasactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

    function handleOpenNewTransactionModal() {
        setIsNewTransactionModalOpen(true);
    }

    function handleCoseNewTransactionModal() {
        setIsNewTransactionModalOpen(false);
    }

  return (
    <div className="App">

        <Header onOpenNewTransactionModal = {handleOpenNewTransactionModal} /> 
        <Dashboard />
        <NewTransactionModal isOpen = {isNewTrasactionModalOpen} 
                             onRequestClose = {handleCoseNewTransactionModal}/>
        <GlobalStyle/> 

    </div>
  );
}