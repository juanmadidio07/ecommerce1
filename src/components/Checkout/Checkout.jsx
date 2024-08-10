import { useState } from 'react'
import { useCart } from '../../hooks/useCart'
import { addDoc, collection, documentId, getDocs, query, where, writeBatch } from 'firebase/firestore'
import { db } from '../../services/firebase'
import { useNotification } from '../../context/NotificationContext'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

const Checkout = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false)
  const [orderCreated, setOrderCreated] = useState(false)
  const {setNotification} = useNotification()
  const { register, handleSubmit, reset } = useForm()

  const { cart, totalQuantity, getTotal, clearCart } = useCart()
  const total = getTotal()

  const createOrder = async (data) => {
    setLoading(true)
    try {
      const objOrder = {
        buyer: {
          firstName: data.name,
          lastName: data.lastname,
          phone: data.address,
          address: data.number
        },
        items: cart,
        totalQuantity,
        total,
        date: new Date()
      }
      const ids = cart.map((item) => item.id)

      const productRef = collection(db, "products")

      const productsAddedFromFirestore = await getDocs(
        query(productRef, where(documentId(), "in", ids)))
      const { docs } = productsAddedFromFirestore

      const outOfStock = []
      const batch = writeBatch(db)

      docs.forEach((doc) => {
        const dataDoc = doc.data()
        const stockDB = dataDoc.stock

        const productAddedToCart = cart.find((prod) => prod.id === doc.id)
        const productQuantity = productAddedToCart?.quantity

        if (stockDB >= productQuantity) {
          batch.update(doc.ref, { stock: stockDB - productQuantity })
        } else {
          outOfStock.push({ id: doc.id, ...dataDoc })
        }
      })

      if (outOfStock.length === 0) {
        await batch.commit()

        const orderRef = collection(db, "orders")
        const orderAdded = await addDoc(orderRef, objOrder)
        setNotification('success', `El Nro de su orden es ${orderAdded.id}`)

        setOrderCreated(true)
        clearCart()
        reset()
        navigate('/')
      } else {
        setNotification('danger', 'No se pudo Generar la Orden, Intente mas Tarde')
      }
    } catch (error) {
      setNotification('danger', 'Se Produjo un error, intentar de nuevo')
    } finally {
      setLoading(false)
    }

    if (loading) {
      return <h1>Se esta generando la orden</h1>
    }

    if (orderCreated) {
      return <h1>La orden fue creada correctamente</h1>
    }
  }

  return (
    <div className='container'>
      <h1>Finalizar Compra</h1>
      <hr/>
      <form onSubmit={handleSubmit(createOrder)}>
        <div className="mb-3">
          <label className="form-label">Nombre</label>
          <input type="text" className="form-control" {...register('name',{required: true})} />
        </div>
        <div className="mb-3">
          <label className="form-label">Apellido</label>
          <input type="text" className="form-control" {...register('lastname',{required: true})} />
        </div>
        <div className="mb-3">
          <label className="form-label">Direccion</label>
          <input type="text" className="form-control" {...register('address',{required: true})} />
        </div>
        <div className="mb-3">
          <label className="form-label">Telefono</label>
          <input type="number" className="form-control" {...register('number',{required: true})} />
        </div>
        <button className="btn btn-primary" type='submit'>
          Generar Orden
        </button>
      </form>
    </div>
  )
}

export default Checkout