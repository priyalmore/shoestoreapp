import React, { useState } from 'react';
import ShoeList from './components/ShoeList';
import Cart from './components/Cart';
import shoes from './components/shoes';
import './App.css';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (shoe) => {
    const exists = cart.find(item => item.id === shoe.id);
    if (exists) {
      setCart(cart.map(item =>
        item.id === shoe.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCart([...cart, { ...shoe, quantity: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart
      .map(item =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
      )
      .filter(item => item.quantity > 0));
  };

  return (
    <div className="app">
      <h1>🛒 Shoe Store</h1>
      <div className="container">
        <ShoeList shoes={shoes} addToCart={addToCart} />
        <Cart cart={cart} removeFromCart={removeFromCart} />
      </div>
    </div>
  );
}

export default App;
