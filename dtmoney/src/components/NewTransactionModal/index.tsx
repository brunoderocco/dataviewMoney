import Modal from 'react-modal';
import { Container, TransactionTypeContainer, RadioBox } from './styles'
import closeImg from '../../assets/close.png'
import incomeImg from '../../assets/income.png'
import outcomeImg from '../../assets/outcome.png'
import { useState } from 'react';

//new test
interface NewTransactionModalProps{
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose}:NewTransactionModalProps) {
    const[type, setType] = useState ('none');

    return (
        <Modal isOpen={isOpen}
               onRequestClose={onRequestClose}
               overlayClassName="react-modal-overlay"
               className="react-modal-content">

            <button type='button' onClick={onRequestClose} className="react-modal-close">
                <img src={closeImg} />
            </button>

            <Container>
                <h2>Register Transaction</h2>
                <input placeholder='Title'/>
                <input type="number" placeholder='Value'/>

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

                <input placeholder='Category'/>
                <button type='submit'>
                    Cadastrar
                </button>
            </Container>    

        </Modal>
    )
}