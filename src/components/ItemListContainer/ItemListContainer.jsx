import { useState, useEffect } from "react"
import { getProducts, getProductsByCategory } from "../../async-mocks"
import { useParams } from "react-router-dom"
import ProductList from "../ProductList/ProductList"

const ItemListContainer = () => {
  const [products, setProducts] = useState([])
  const {category}  =  useParams()
  
  useEffect(()=>{
      if(!category){
          getProducts()
              .then((res)=>{
                  setProducts(res)
              })
              .catch((err)=>console.log(err))
      }else {
          getProductsByCategory(category)
              .then((res)=>{
                  setProducts(res)
              })
              .catch((err)=> console.log(err))
      }
  }, [category])

return (
  <div>
      <ProductList products={products} />
  </div>
)
}

export default ItemListContainer