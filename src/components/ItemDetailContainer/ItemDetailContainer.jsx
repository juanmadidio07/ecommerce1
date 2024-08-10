
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductDetail from "../ProductDetail/ProductDetail";
//import { getProductById } from "../../async-mocks";
import './ItemDetailContainer.css'
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../services/firebase";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState()
  const [loading, setLoading] = useState(true)
  const { id } = useParams()
  // console.log(id)
  useEffect(() => {
    getDoc(doc(db, "products", id))
      .then((querySnapshot) => {
        const product = {id: querySnapshot.id, ...querySnapshot.data()}
        setProduct(product);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setLoading(false)
      })
  }, [id]);

  return (
      <div className="ItemDetailContainer">
        {loading ? 
          <h3 className="loading">
            Cargando detalle...
            </h3>  :  <ProductDetail {...product} />}
      </div>
  );
}


export default ItemDetailContainer