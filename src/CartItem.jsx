// Calculate total amount for all products in the cart
const calculateTotalAmount = () => {
  return cart.reduce((total, item) => {
    const price = parseFloat(item.cost.substring(1));
    return total + price * item.quantity;
  }, 0).toFixed(2);
};

const handleContinueShopping = (e) => {
  onContinueShopping(e);
};

const handleIncrement = (item) => {
  dispatch(updateQuantity({
    name: item.name,
    amount: item.quantity + 1
  }));
};

const handleDecrement = (item) => {
  if (item.quantity > 1) {
    dispatch(updateQuantity({
      name: item.name,
      amount: item.quantity - 1
    }));
  } else {
    dispatch(removeItem(item.name));
  }
};

const handleRemove = (item) => {
  dispatch(removeItem(item.name));
};

// Calculate total cost based on quantity for an item
const calculateTotalCost = (item) => {
  const price = parseFloat(item.cost.substring(1));
  return (price * item.quantity).toFixed(2);
};
