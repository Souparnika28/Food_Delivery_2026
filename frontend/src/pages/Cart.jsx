import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const Cart = () => {
  const { cart, addToCart, decreaseQty, removeFromCart, getTotal, clearCart } = useContext(CartContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleCheckout = async () => {
    // Check if user is logged in
    const token = localStorage.getItem('token');
    if (!token) {
      alert('Please login first to place an order');
      navigate('/login');
      return;
    }

    if (cart.length === 0) {
      alert('Your cart is empty');
      return;
    }

    setLoading(true);
    setError('');

    try {
      // Send order to backend
      const response = await fetch('${import.meta.env.VITE_API_BASE_URL}/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          items: cart,
          total: getTotal()
        }),
      });

      const data = await response.json();

      if (response.ok) {
        clearCart();
        navigate('/OrderSuccess');
      } else {
        if (response.status === 401 || response.status === 403) {
          setError('Session expired. Please login again.');
          localStorage.removeItem('token');
          localStorage.removeItem('username');
          setTimeout(() => navigate('/login'), 2000);
        } else {
          setError(data.message || 'Failed to place order');
        }
      }
    } catch (error) {
      console.error('Order error:', error);
      setError('Cannot connect to server. Make sure the backend is running.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '1rem', maxWidth: '600px', margin: '0 auto' }}>
      <h2>Your Cart</h2>

      {error && (
        <div style={{ color: 'red', padding: '0.5rem', backgroundColor: '#ffe6e6', borderRadius: '4px', marginBottom: '1rem' }}>
          {error}
        </div>
      )}

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map(item => (
            <div key={item.id} style={{ marginBottom: '1rem', borderBottom: '1px solid #eee', paddingBottom: '1rem' }}>
              <p style={{ fontWeight: 'bold' }}>{item.name}</p>
              <p>₹{item.price} × {item.quantity} = ₹{item.price * item.quantity}</p>

              <button onClick={() => decreaseQty(item.id)} style={{ padding: '0.3rem 0.8rem' }}>-</button>
              <button onClick={() => addToCart(item)} style={{ marginLeft: '5px', padding: '0.3rem 0.8rem' }}>+</button>
              <button onClick={() => removeFromCart(item.id)} style={{ marginLeft: '10px', color: 'red', padding: '0.3rem 0.8rem' }}>Remove</button>
            </div>
          ))}

          <h3 style={{ marginTop: '1.5rem' }}>Total: ₹{getTotal()}</h3>
          <button
            onClick={handleCheckout}
            disabled={loading}
            style={{
              padding: '0.75rem 1.5rem',
              backgroundColor: loading ? '#ccc' : '#4caf50',
              color: 'white',
              border: 'none',
              cursor: loading ? 'not-allowed' : 'pointer',
              fontSize: '1rem',
              borderRadius: '4px',
              marginTop: '1rem'
            }}
          >
            {loading ? 'Placing Order...' : 'Place Order'}
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
