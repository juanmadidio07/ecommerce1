import { Link } from 'react-router-dom'

const Product = ({ product }) => {
    return (
        <div className="card m-3 mt-5" style={{ width: "18rem"}}>
            <div className='row'>
                <div className='col'>
                    <img
                        src={product.img}
                        className="card-img-top"
                        alt={product.name} />
                    <div className="card-body">
                        <h5 className="card-title">{product.name}</h5>
                        <p className="card-text">{product.description}</p>
                        <Link className="btn btn-primary d-block" to={`/item/${product.id}`}>See More</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product