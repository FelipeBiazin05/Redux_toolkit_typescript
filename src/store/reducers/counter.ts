import { createSlice } from "@reduxjs/toolkit";

type CounterTipagem = {
    valor: number,
}

const initialState: CounterTipagem = {
    valor: 0,
}

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        incrementar: (state, action) => {
            state.valor += action.payload;
        },
        decrementar: (state, action) => {
            state.valor -= action.payload;
        }
    }
})

export const { incrementar, decrementar } = counterSlice.actions;
export default counterSlice.reducer;