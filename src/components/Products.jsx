import Product from "./Product"
const Products = (props) => {
  return (
    <>
      <Product
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKWnoC889ot-GyzaxGve1sbDZjMO7qu6Pmpg&s"
        name="Iphone 12"
        price={800} />

      <Product
        image="https://hnsgsfp.imgix.net/9/images/detailed/71/Apple_iPhone_13_128GB_-_Midnight_(IMG_1).jpg?fit=fill&bg=0FFF&w=1536&h=900&auto=format,compress"
        name="Iphone 13"
        price={1000} />

      <Product
        image="https://d2ihpvt6nd5q28.cloudfront.net/wp-content/uploads/2023/02/iPhone_14_Blue_PDP_Image_Position-1A_LAES.jpg"
        name="Iphone 14"
        price={1500} />

      <Product
        image="https://cdn.dxomark.com/wp-content/uploads/medias/post-157904/Apple-iPhone-15_-blue_featured-image-packshot-review.jpg"
        name="Iphone 15"
        price={2000} />
    </>
  )
}

export default Products