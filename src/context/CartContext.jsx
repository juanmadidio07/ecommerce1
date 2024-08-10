import { createContext, useState } from "react";

export const CartContext = createContext()

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([])

    const isInCart = (id) => {
        return cart.some(prod => prod.id === id)
    }

    const addItem = (productToAdd) => {
        if (!isInCart(productToAdd.id)) {
            setCart(prev => [...prev, productToAdd])
        } else {
            setNotification('danger', "Product is Already in Cart")
        }
    }

    const removeItem = (id) => {
        const cartUpdated = cart.filter((prod) => prod.id !== id)
        setCart(cartUpdated)
    }

    const clearCart = () =>{
        setCart([])
    }

    const getTotalQuantity = () => {
        let accu = 0;
        cart.forEach(prod => {
            accu += prod.quantity
        })
        return accu;
    }

    const getTotal = () => {
        let accu = 0
        cart.forEach((item) => {
            accu += item.quantity * item.price
        })
        return accu
    }

    const totalQuantity = getTotalQuantity()


    const data = {
        cart,
        isInCart,
        addItem,
        totalQuantity,
        getTotal,
        removeItem,
        clearCart
    }
    return (
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}
