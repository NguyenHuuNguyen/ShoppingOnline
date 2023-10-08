import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
    name: 'products',
    initialState: {
        cart: [] as any[],
    },
    reducers: {
        addToCart: (state, action) => {
            state.cart.push(action.payload);
        },
        resetCart: (state) => {
            state.cart = [];
        },
    },
});

export const { addToCart, resetCart } = productSlice.actions;
export default productSlice.reducer;
