

import { GlobalStyle } from './styles/global';
import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import { createServer, Model } from 'miragejs';
import Modal from 'react-modal';
import { useState } from 'react';
import { NewTransactionModal } from './components/NewTransactionModal'

createServer({
    models: {
        transaction: Model,
    },

    routes(){
        this.namespace = "api";

        this.get("/transactions", () => {
            return this.schema.all('transaction')
        })
        
        this.post('/transactions', (schema, request) =>{
            const data = JSON.parse(request.requestBody)

            return schema.create('transaction', data)
        }
        )
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