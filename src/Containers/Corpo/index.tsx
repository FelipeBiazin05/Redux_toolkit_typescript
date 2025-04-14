import { RootReducer } from '../../store'
import { useDispatch, useSelector } from "react-redux";
import { CorpoContador, BotaoContador  } from "./styled"
import { decrementar, incrementar } from '../../store/reducers/counter';

const BodyCounter = () => {
    const contadorInicial = useSelector((state: RootReducer) => state.Counter.valor)

    const dispatch = useDispatch();

    return(
        <CorpoContador>
            <BotaoContador onClick={() => dispatch(decrementar(5))}>-</BotaoContador> 
            <h1>{ contadorInicial }</h1>
            <BotaoContador onClick={() => dispatch(incrementar(5))}>+</BotaoContador>
        </CorpoContador>
    )
}

export default BodyCounter;