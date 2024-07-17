import { useState } from 'react'

function ProductCount({ initialValue = 1, stock, onAdd }) {
  const [count, setCount] = useState(initialValue);


  const decrement = () => {
    if (count > 1) {
      setCount(count => count - 1)
    }
  }
  const increment = () => {
    if (count < stock) {
      setCount(count => count + 1);
    }
  };

  return (
    <>
      <h1>{count}</h1>
      <button className='btn m-2' onClick={decrement}>-</button>
      <button className='btn btn-outline-dark' onClick={() => onAdd(count)}>Add to Cart</button>
      <button className='btn m-2' onClick={increment}>+</button>
    </>
  );
}

export default ProductCount