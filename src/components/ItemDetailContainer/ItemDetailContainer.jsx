
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductDetail from "../ProductDetail/ProductDetail";
import { getProductById } from "../../async-mocks";

const ItemDetailContainer = () => {
const [product, setProduct] = useState()
const {id} = useParams()
// console.log(id)
useEffect(() => {
    getProductById(id)
    .then((res) => {
      setProduct(res);
      // console.log(product)
    })
    .catch((err) => console.log(err));
}, [id]);

  return (
<>
    <ProductDetail {...product} />
</>
  );
}


export default ItemDetailContainer