import { Link } from "react-router-dom";
import ProductCount from "../ProductCount/ProductCount";
import { useCart } from "../../hooks/useCart"
import { useNotification } from "../../context/NotificationContext";


const ProductDetail = ({ name, img, description, stock, category, id, price }) => {
    const {addItem, isInCart} = useCart()
    const {setNotification} = useNotification()

    const handleAdd = (count) => {
        const productObj = {
            id, name, price, quantity : count
        }
        addItem(productObj)
        setNotification('success', `Se agregaron ${count} de ${name}`)
    }

    return (
        <article>
            <div className="container mt-5">
                <h2>{name}</h2>
                <div className="grid card mb-3" style={{ maxwidth: "540rem" }}>
                    <div className="row">
                        <div className="col-md-4">
                            <img src={img} className="img-fluid rounded-start" alt={name} />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{name}</h5>
                                <p className="card-text">{description}</p>
                                <h2 className="card-text"><b>${price}</b></h2>
                                <p>Cantidad Disponible: <b>{stock}</b></p>
                            </div>
                            <div className="mt-5">
                                {
                                    isInCart(id) ? (
                                        <Link className="btn btn-primary d-block m-4" to='/cart'>Finalizar Compra</Link>
                                    ) : (
                                        
                                        <ProductCount stock={stock} onAdd={handleAdd} />
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
}

export default ProductDetail