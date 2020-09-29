import React, { createContext, useContext, useReducer } from 'react'
import { products } from '../product.js'
const CartContext = createContext();
export const useCart = () => useContext(CartContext);

//reducer
const initialState = { cart: [] };

function reducer(state, action){
    switch(action.type){
        case "ADD":
             return{
                 ...state,
                 cart: [
                     ...state.cart, 
                     products.find((p) => p.sku === action.payload)
                    ]
             }
        case 'REMOVE':
             const indexInCart = state.cart.findIndex((p) => p.sku === action.payload);
             const newCart = [...state.cart];
             newCart.splice(indexInCart, 1);
             return { ...state, cart: newCart };
        case 'EMPTY':
            return { cart: [] }
        default:
            return state
    }
}



export function CartProvider({ children }){

    const [state, dispatch] = useReducer(reducer, initialState);

    const addItem = sku => dispatch({type: 'ADD', payload: sku});
    const removeItem = sku => dispatch({type: 'REMOVE', payload: sku});
    const emptyCart = () => dispatch({ type: 'EMPTY' });
    function countItemsInCart(sku){
        const itemsInCart = state.cart.filter((product) => product.sku === sku) ?? [];
        return itemsInCart.length;
    }
    function totalPrice(){
        return groupCartItems().reduce( (totalPrice, product) => {
            
            return totalPrice + product.price * product.quantity;

        }, 0);
    }
   

    function groupCartItems(){
        return state.cart.reduce( (newCart, product) => {
            const indexInCart = newCart.findIndex((p)=> p.sku === product.sku);
            const isInCart = indexInCart != -1;

            if(isInCart){
                newCart[indexInCart].quantity = newCart[indexInCart].quantity + 1;
                return newCart;
            }

            newCart.push({ ...product, quantity: 1});
            return newCart;
        }, []);
    }
    return(
        <CartContext.Provider value={{
            addItem,
            removeItem,
            cart: state.cart, 
            cartGroupByItems: groupCartItems(),
            countItemsInCart,
            emptyCart,
            totalPrice: totalPrice()
        }}>
            {children}
        </CartContext.Provider>
    )
}