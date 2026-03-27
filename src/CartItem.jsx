import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from './redux/cartSlice'; // adjust path if needed
import CartItem from './CartItem';
import './ProductList.css';

function ProductList({ onHomeClick }) {
    const [showCart, setShowCart] = useState(false);
    const dispatch = useDispatch();

    const plantsArray = [/* keep your existing data exactly as-is */];

    const handleAddToCart = (plant) => {
        dispatch(addItem(plant));
    };

    return (
        <div>
            <div className="navbar">
                <h2>Paradise Nursery</h2>
                <div>
                    <button onClick={() => setShowCart(false)}>Home</button>
                    <button onClick={() => setShowCart(true)}>Cart</button>
                </div>
            </div>

            {!showCart ? (
                <div>
                    {plantsArray.map((category, index) => (
                        <div key={index}>
                            <h2>{category.category}</h2>
                            <div className="product-grid">
                                {category.plants.map((plant, i) => (
                                    <div key={i} className="plant-card">
                                        <img src={plant.image} alt={plant.name} />
                                        <h3>{plant.name}</h3>
                                        <p>{plant.description}</p>
                                        <p>{plant.cost}</p>
                                        <button onClick={() => handleAddToCart(plant)}>
                                            Add to Cart
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <CartItem onContinueShopping={() => setShowCart(false)} />
            )}
        </div>
    );
}

export default ProductList;
