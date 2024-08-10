import { useCart } from '../../hooks/useCart'
import CartItem from '../CartItem/CartItem'
import { Link } from 'react-router-dom'
import './Cart.css'

const Cart = () => {
    const { cart, getTotal, totalQuantity, clearCart } = useCart()
    const total = getTotal()

    if (totalQuantity === 0) {
        return <h1 className='cart'>No hay items en el carrito</h1>
    }
    return (
        <div className=''>
            {cart.map((item) => (
                <CartItem key={item.id} {...item} />
            ))}
            <div className='container grid'>
                <h3 className='m-2'>Total : $ {total}</h3>
                <button className='btn btn-danger m-2' onClick={clearCart}>Limpiar Carrito</button>
                <Link to="/checkout" className="btn btn-primary m-2">Finalizar Compra</Link>
            </div>
        </div>
    )
}

export default Cart