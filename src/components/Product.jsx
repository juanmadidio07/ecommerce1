
const Product = (props) => {
    return (
        <>
        <div className="col-md-4 mb-4">
      <div className="card">
        <img src={props.image} className="card-img-top" style={{width: '18rem'}} alt={props.name} />
        <div className="card-body text-center">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">${props.price}</p>
          <button className="btn btn-dark">Add to Cart</button>
        </div>
      </div>
    </div>
        </>
    )
}

export default Product