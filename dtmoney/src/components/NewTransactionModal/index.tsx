import Modal from 'react-modal';
import { Container, TransactionTypeContainer } from './styles'
import closeImg from '../../assets/close.png'
import incomeImg from '../../assets/income.png'
import outcomeImg from '../../assets/outcome.png'

//new test
interface NewTransactionModalProps{
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose}:NewTransactionModalProps) {
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
                    <button type='button'>
                        <img src={incomeImg} alt="Income"  />
                        <span>Income</span>
                    </button>
                    <button type='button'>
                        <img src={outcomeImg} alt="Outcome"/>
                        <span>Outcome</span>
                    </button>
                </TransactionTypeContainer>

                <input placeholder='Category'/>
                <button type='submit'>
                    Cadastrar
                </button>
            </Container>    

        </Modal>
    )
}