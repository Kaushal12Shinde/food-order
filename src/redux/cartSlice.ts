import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface MenuItem{
    name: string,
    price: number,
    link:  string,
}

interface CartItem extends MenuItem{
    quantity: number,
}   

interface CartState {
    items:CartItem[];
}

const initialState: CartState = {
    items:[],
}

const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        addItem: (state, action: PayloadAction<MenuItem>)=>{
            const existingItem = state.items.find(item => item.name ===  action.payload.name);

            if(existingItem){
                existingItem.quantity += 1;
            }
            else{
                state.items.push({...action.payload, quantity:1});
            }
        },

        increaseQuantity: (state, action: PayloadAction<string>) => {
            const item = state.items.find(item => item.name === action.payload);
            if(item){
                item.quantity += 1;
            }
        },

        decreaseQuantiy: (state, action: PayloadAction<string>) => {
            const item = state.items.find(item => item.name === action.payload);
            if(item && item.quantity > 1){
                item.quantity -= 1;
            }
            else{
                state.items = state.items.filter( item => item.name !== action.payload);
            }
        }
    }
});

export const {addItem , increaseQuantity, decreaseQuantiy} =cartSlice.actions;
export default cartSlice.reducer;
