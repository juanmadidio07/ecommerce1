import { memo } from 'react'
import Product from '../Product/Product'
import "./ProductList.css"
const ProductList = ({ products }) => {
    return (
        <div className="grid">
            {products.map(product => <Product product={product} key={product.id} />)}
        </div>
    )
}

export default memo(ProductList)