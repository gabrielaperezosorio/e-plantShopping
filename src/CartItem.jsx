import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateQuantity, removeItem } from './redux/cartSlice'; // adjust path if needed

function CartItem({ onContinueShopping }) {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart.items); // adjust if needed

    const calculateTotalAmount = () => {
        return cart.reduce((total, item) => {
            const price = parseFloat(item.cost.substring(1));
            return total + price * item.quantity;
        }, 0).toFixed(2);
    };

    const handleCheckout = () => {
        alert("Checkout successful! Thank you for your purchase 🌿");
    };

    return (
        <div>
            <h2>Shopping Cart</h2>

            {cart.map((item, index) => (
                <div key={index} className="cart-item">
                    <img src={item.image} alt={item.name} width="100" />
                    <h3>{item.name}</h3>
                    <p>Price: {item.cost}</p>
                    <p>Quantity: {item.quantity}</p>
                    <p>Total: ${parseFloat(item.cost.substring(1)) * item.quantity}</p>

                    <button onClick={() => dispatch(updateQuantity({
                        name: item.name,
                        amount: item.quantity + 1
                    }))}>+</button>

                    <button onClick={() => dispatch(updateQuantity({
                        name: item.name,
                        amount: item.quantity - 1
                    }))}>-</button>

                    <button onClick={() => dispatch(removeItem(item.name))}>
                        Remove
                    </button>
                </div>
            ))}

            <h2>Total Amount: ${calculateTotalAmount()}</h2>

            <button onClick={handleCheckout}>Checkout</button>
            <button onClick={onContinueShopping}>Continue Shopping</button>
        </div>
    );
}

export default CartItem;
