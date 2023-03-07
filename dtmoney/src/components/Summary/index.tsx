import { useContext } from 'react'
import incomeImg from '../../assets/income.png'
import outcomeImg from '../../assets/outcome.png'
import totalImg from '../../assets/total.png'
import {Container} from "./styles"
import { TransactionsContext } from '../../TransactionsContext'

export function Summary(){
    const transations = useContext(TransactionsContext);
    console.log("Sumary");
    console.log(transations);

    return (
        <Container>


            <div>
                <header>
                    <p>
                        Entradas
                    </p>
                    <img src={incomeImg} alt="Entradas" />
                </header>
                <strong>R$1000,00</strong>
            </div>

            <div>
                <header>
                    <p>
                        Saidas
                    </p>
                    <img src={outcomeImg} alt="Saidas" />
                </header>
                <strong>- R$500,00</strong>
            </div>

            <div className="highlight-background">
                <header>
                    <p>
                        Total
                    </p>
                    <img src={totalImg} alt="Total" />
                </header>
                <strong>R$500,00</strong>
            </div>
        </Container>
    )
}