import Product from '../Product/Product'

const ProductList = ({ products }) => {
    return (
        <div className="container d-flex">
            {products.map(product => <Product product={product} key={product.id} />)}
        </div>
    )
}

export default ProductList