import { useParams } from "react-router-dom"
import ProductList from "../ProductList/ProductList"
import Footer from "../Footer/Footer"
import Carousel from "../Carousel/Carousel"
import './ItemListContainer.css'
import { useNotification } from "../../context/NotificationContext"
import { getProducts } from "../../services/firestore/products"
import { useAsync } from "../../hooks/useAsync"


const ItemListContainer = () => {
  const { category } = useParams()
  const { setNotification } = useNotification()
  const asyncFunction = () => getProducts(category)

  const {data: products, loading, error} = useAsync(asyncFunction, [category] )

  if (loading) {
    return (
      <h3 className="loading">Cargando Productos...</h3>
    );
  }

  if (error) {
    return (
      setNotification('danger', 'Error al Cargar Productos')
    );
  }


  return (
    <>
      <Carousel />
      <ProductList products={products} />
      <Footer />
    </>

  )
}

export default ItemListContainer