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
        incrementar: (state) => {
            state.valor += 1;
        },
        decrementar: (state) => {
            state.valor -= 1;
        }
    }
})

export const { incrementar, decrementar } = counterSlice.actions;
export default counterSlice.reducer;