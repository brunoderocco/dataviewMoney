import { FormEvent, useState } from 'react';
import Modal from 'react-modal';

import closeImg from '../../assets/close.png'
import incomeImg from '../../assets/income.png'
import outcomeImg from '../../assets/outcome.png'

import { api } from '../../services/api';
import { useTransactions } from '../../hooks/useTransactions';

import { Container, TransactionTypeContainer, RadioBox } from './styles'

//new test
interface NewTransactionModalProps{
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose}:NewTransactionModalProps) {
    const { createTransaction } = useTransactions();

    const[title, setTitle] = useState('');
    const[amount, setAmount] = useState(0);
    const[category, setCategory] = useState('');
    
    const[type, setType] = useState ('none');

    async function handleCreateNewTransaction(event: FormEvent){
        event.preventDefault();

        await createTransaction({
            title,
            amount,
            category,
            type
        })

        setTitle('');
        setAmount(0);
        setCategory('');
        setType('none');
        onRequestClose();
    }

    return (
        <Modal isOpen={isOpen}
               onRequestClose={onRequestClose}
               overlayClassName="react-modal-overlay"
               className="react-modal-content">

            <button type='button' onClick={onRequestClose} className="react-modal-close">
                <img src={closeImg} />
            </button>

            <Container onSubmit={handleCreateNewTransaction}>
                <h2>Register Transaction</h2>
                
                <input placeholder='Title'
                    value={title}
                    onChange={event => setTitle(event.target.value)}
                />
                
                <input type="number" placeholder='Value'
                    value={amount}
                    onChange={event=> setAmount(Number(event.target.value))}
                />

                <TransactionTypeContainer>
                    <RadioBox type='button' 
                              onClick={() => {setType('deposit')} }
                              isActive={type ==='deposit'}
                              activeColor="green"
                    >
                        <img src={incomeImg} alt="Income"  />
                        <span>Income</span>
                    </RadioBox>
                    <RadioBox type='button'
                        onClick={() => {setType('withdraw')}}
                        isActive={type ==='withdraw'}
                        activeColor="red"
                    >
                        <img src={outcomeImg} alt="Outcome"/>
                        <span>Outcome</span>
                    </RadioBox>
                </TransactionTypeContainer>

                <input placeholder='Category'
                    value={category}
                    onChange={event=> setCategory(event.target.value)}
                />
                <button type='submit'>
                    Cadastrar
                </button>
            </Container>    

        </Modal>
    )
}