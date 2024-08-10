import { useCart } from '../../hooks/useCart'
import './CartItem.css'

const CartItem = ({ id, img, name, quantity, price }) => {
  const { removeItem } = useCart()
  const handleRemove = (id) => {
    removeItem(id)
  }
  return (
    <article className="container cardItem">
      <header className='cardItemHeader'>
        <h2>{name}</h2>
      </header>
      <section>
        <p>Cantidad: <b>{quantity}</b></p>
        <p>Precio por unidad: <b>$ {price}</b></p>
      </section>
      <footer>
        <p>Subtotal : <b>${price * quantity}</b></p>
        <button className='btn btn-danger' onClick={() => handleRemove(id)}>Eliminar Producto</button>
      </footer>
    </article>
  )
}

export default CartItem