import React, {createContext, useReducer} from 'react'
import { CartReducer } from './cartReducer';


export const CartContext = createContext();

export default function CartContextProvider(props) {

    const [cartData, dispatch] = useReducer(CartReducer, {shopingCart:[],totalPrice:0,qty:0})

    return (
        <CartContext.Provider value={{...cartData, dispatch}}>
            {props.children}
        </CartContext.Provider>
    )
}
