import { useState } from 'react'
import './App.css'
import HomePage from './HomePage'


function ProductDetails({ onCalculate, onReset}) {
  const [productName, setProductName] = useState('');
  const [quantity, setquantity] = useState('');
  const [UnitPrice, setUnitPrice] = useState('');

  const calculate = () =>{
    const data = {
      Name: productName,
      quantity: quantity,
      unitPrice: UnitPrice
    };
    onCalculate(data);
  };

  const reset = () => {
    setProductName('');
    setquantity('');
    setUnitPrice('');
    onReset();
  };

  return (
    <div>
    <h3>Product Details</h3>
    <label htmlFor="productName">Product Name</label>
        <input id="productName" type="text" placeholder="Product Name" value={productName} onChange={(e) => setProductName(e.target.value)} />

    <label htmlFor="quantity">Quantity</label>
        <input id="quantity" type="number" placeholder="Quantity" value={quantity} onChange={(e) => setquantity(e.target.value)} />

    <label htmlFor="unitPrice">Unit Price</label>
        <input id="unitPrice" type="number" placeholder="Unit Price" value={UnitPrice} onChange={(e) => setUnitPrice(e.target.value)} />

    <button onClick={calculate}>Calculate</button>
    <button onClick={reset}>Reset</button>
  </div>
  )
}

export default ProductDetails;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                