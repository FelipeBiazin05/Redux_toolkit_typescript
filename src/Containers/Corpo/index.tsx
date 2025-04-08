import { CorpoContador, BotaoContador  } from "./styled"

const BodyCounter = () => {
    return(
        <CorpoContador>
            <BotaoContador>-</BotaoContador> 
            <h1>0</h1>
            <BotaoContador>+</BotaoContador>
        </CorpoContador>
    )
}

export default BodyCounter;