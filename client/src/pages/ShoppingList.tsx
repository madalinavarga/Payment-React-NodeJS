import React, { useState } from 'react';
import PayPalPayment from './PayPalPayment';

interface Item {
  id: number;
  name: string;
  price: number;
}

const ShoppingList: React.FC = () => {
  const [items, setItems] = useState<Item[]>([
    { id: 1, name: 'Bread', price: 1.5 },
    { id: 2, name: 'Milk', price: 0.99 },
    { id: 3, name: 'Eggs', price: 2.99 },
  ]);
  const [isCheckout, setIsCheckout] = useState(false);
  const [cart, setCart] = useState<Item[]>([]);
  const [amount, setAmount] = useState('');

  const addToCart = (item: Item) => {
    setCart(currentCart => [...currentCart, item]);
  };

  const handlePaymentInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(event.target.value);
  };

  const handleCheckout = () => {
    const price = cart.reduce((total, item) => total + item.price, 0)
    setIsCheckout(true);
    console.log('Payment amount entered:', amount);
    // setCart([]);
    // setAmount('');
  };

  const handlePrice = ():string =>{
    const price = cart.reduce((total, item) => total + item.price, 0); 
    return price.toString()
}


  return (
    <div className="container mx-auto p-4">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-3">Items for Sale</h2>
        <ul className="space-y-3">
          {items.map((item) => (
            <li key={item.id} className="flex justify-between items-center p-3 bg-gray-100 rounded shadow">
              <span>{item.name} - ${item.price.toFixed(2)}</span>
              <button
                className="py-1 px-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
                onClick={() => addToCart(item)}
              >
                Add to Cart
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-3">Shopping Cart</h2>
        <ul className="space-y-3">
          {cart.map((item, index) => (
            <li key={index} className="p-3 bg-gray-100 rounded shadow">{item.name}</li>
          ))}
        </ul>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-3">Payment</h2>
        <input
          type="number"
          value={amount}
          onChange={handlePaymentInput}
          className="p-2 border border-gray-300 rounded"
          placeholder="Enter amount"
        />
        <button
          className="ml-2 py-2 px-4 bg-green-500 text-white rounded hover:bg-green-600 transition duration-300"
          onClick={handleCheckout}
        >
          Checkout
        </button>
      </div>
      {isCheckout && <PayPalPayment amount={handlePrice()} /> }
    </div>
  );
};

export default ShoppingList;
