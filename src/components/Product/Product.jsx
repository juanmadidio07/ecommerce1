import { Link } from 'react-router-dom'
import './Product.css'

const Product = ({ product }) => {
    return (
        <div className="container card m-2" style={{ width: "20rem", height:"30rem"}}>
            <Link className="btn" to={`/item/${product.id}`}>
                    <img
                        src={product.img}
                        className="card-img-top"
                        alt={product.name} />
                    <div className="card-body">
                        <p className='product-desc'>{product.description}</p>
                    </div>
                <h3>${product.price}</h3>
                <p className='envio-gratis'>Envio Gratis</p>
            </Link>
        </div>
    )
}

export default Product