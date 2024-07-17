import { useState } from "react";
import { Link } from "react-router-dom";
import ProductCount from "../ProductCount/ProductCount";

const ProductDetail = ({ name, img, description, stock, category, id, price }) => {
    const [quantity, setQuantity] = useState(0)

    const handleAdd = (cantidad) => {
        const objetToAdd = {
            id, name, price
        }
        console.log(objetToAdd)
        console.log('agregue al carrito', cantidad)
        setQuantity(cantidad)
    }

    return (
        <div className="container">
            <h2>{name}</h2>
            <div className="card align-items-center">
                <img 
                    src={img}
                    style={{ width: 300 }}
                    className="card-img-top"
                    alt={name}
                />
                <div className="card-body">
                    <p className="card-text">{description}</p>
                    <p className="card-text">Categoria: {category}</p>
                    <h2 className="card-text">Precio: $ {price}</h2>
                    <h2 className="card-text">Disponible - {stock}</h2>
                </div>
            </div>
            <div>
                {
                    quantity === 0 ? (
                        <ProductCount stock={stock} onAdd={handleAdd} />
                    ) : (
                        <Link className="btn btn-primary d-block m-4" to='/cart'>Finalizar Compra</Link>
                    )
                }
            </div>
        </div>
    );
}

export default ProductDetail