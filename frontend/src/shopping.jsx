import React from 'react';
import { Link } from 'react-router-dom';
import './shopping.css';
import dummy from './dummy.png';

const ShoppingPage = () => {
  const products = [
    {
      title: '3D Three.js Baseplate Template',
      description: 'A foundational template for your 3D projects using Three.js.',
      price: '$49.99',
      stripeLink: 'https://stripe.com/baseplate-checkout', // Replace with actual Stripe checkout link
    },
    {
      title: 'Customizable 3D Three.js Template',
      description: 'A 3D Three.js template we’ll customize for you.',
      price: '$99.99',
      stripeLink: 'https://stripe.com/customizable-checkout', // Replace with actual Stripe checkout link
    },
    {
      title: 'Full 3D Website Design & Coding',
      description: 'We’ll design and code the entire 3D website for you.',
      price: '$299.99',
      stripeLink: 'https://stripe.com/full-design-checkout', // Replace with actual Stripe checkout link
    },
  ];

  return (
    <div className="shopping-page">
      <h1>Shop Our 3D Website Templates</h1>
      <div className="products">
        {products.map((product, index) => (
          <div className="product-card" key={index}>
            <img src={dummy} alt={"Dummy"} />
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p className="price">{product.price}</p>
            <a href={product.stripeLink} className="buy-button">Buy Now</a>
          </div>
        ))}
      </div>
      <Link to="/">
        <button className="back-button">Home</button>
      </Link>
    </div>
  );
};

export default ShoppingPage;
