import { useContext, useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const Restaurant = () => {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();
  const [addedItems, setAddedItems] = useState({});
  const [restaurant, setRestaurant] = useState(null);
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Fetch restaurant and menu data from backend
  useEffect(() => {
    fetchRestaurantData();
  }, [id]);

  const fetchRestaurantData = async () => {
    try {
      setLoading(true);
      setError('');

      // Fetch restaurant details
      const restaurantResponse = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/restaurants/${id}`);
      if (!restaurantResponse.ok) {
        throw new Error('Restaurant not found');
      }
      const restaurantData = await restaurantResponse.json();
      setRestaurant(restaurantData);

      // Fetch menu items
      const menuResponse = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/restaurants/${id}/menu`);
      if (!menuResponse.ok) {
        throw new Error('Failed to fetch menu');
      }
      const menuData = await menuResponse.json();
      setMenu(menuData);

      setLoading(false);
    } catch (error) {
      console.error('Error fetching restaurant data:', error);
      setError(error.message || 'Failed to load restaurant data');
      setLoading(false);
    }
  };

  const handleAddToCart = (item) => {
    addToCart(item);
    setAddedItems({ ...addedItems, [item._id]: true });
    setTimeout(() => {
      setAddedItems({ ...addedItems, [item._id]: false });
    }, 1000);
  };

  if (loading) {
    return (
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '1.5rem',
        color: '#666'
      }}>
        Loading restaurant... 🍽️
      </div>
    );
  }

  if (error || !restaurant) {
    return (
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '2rem'
      }}>
        <h2 style={{ color: '#f44336', marginBottom: '1rem' }}>⚠️ {error || 'Restaurant Not Found'}</h2>
        <p style={{ color: '#666', textAlign: 'center', marginBottom: '1rem' }}>
          {error ? 'Make sure the backend is running.' : 'The restaurant you are looking for does not exist.'}
        </p>
        <button
          onClick={() => navigate('/')}
          style={{
            padding: '0.75rem 1.5rem',
            backgroundColor: '#ff5722',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}
        >
          ← Back to Home
        </button>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
      {/* Restaurant Header */}
      <div style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${restaurant.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '4rem 2rem',
        color: 'white',
        textAlign: 'center'
      }}>
        <button
          onClick={() => navigate('/')}
          style={{
            position: 'absolute',
            top: '6rem',
            left: '2rem',
            backgroundColor: 'rgba(255,255,255,0.9)',
            border: 'none',
            padding: '0.5rem 1rem',
            borderRadius: '20px',
            cursor: 'pointer',
            fontWeight: 'bold',
            color: '#333'
          }}
        >
          ← Back
        </button>

        <h1 style={{ fontSize: '3rem', margin: '0 0 0.5rem 0', fontWeight: 'bold' }}>
          {restaurant.name}
        </h1>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem', fontSize: '1.2rem' }}>
          <span>⭐ {restaurant.rating}</span>
          <span>•</span>
          <span>{restaurant.cuisine} Cuisine</span>
        </div>
      </div>

      {/* Menu Section */}
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '3rem 2rem'
      }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '2rem', color: '#333', fontWeight: 'bold' }}>
          Our Menu
        </h2>

        {menu.length > 0 ? (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
            gap: '1.5rem'
          }}>
            {menu.map(item => (
              <div
                key={item._id}
                style={{
                  backgroundColor: 'white',
                  borderRadius: '12px',
                  padding: '1.5rem',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                  cursor: 'pointer'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 6px 16px rgba(0,0,0,0.15)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
                }}
              >
                <div style={{ marginBottom: '1rem' }}>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    marginBottom: '0.5rem'
                  }}>
                    <h3 style={{ margin: 0, fontSize: '1.3rem', color: '#333', fontWeight: 'bold' }}>
                      {item.name}
                    </h3>
                    <span style={{
                      backgroundColor: '#f0f0f0',
                      padding: '0.3rem 0.6rem',
                      borderRadius: '12px',
                      fontSize: '0.75rem',
                      color: '#666',
                      whiteSpace: 'nowrap',
                      marginLeft: '0.5rem'
                    }}>
                      {item.category}
                    </span>
                  </div>
                  <p style={{ margin: '0.5rem 0', color: '#666', fontSize: '0.9rem' }}>
                    {item.description}
                  </p>
                </div>

                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginTop: '1rem'
                }}>
                  <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#ff5722' }}>
                    ₹{item.price}
                  </span>
                  <button
                    onClick={() => handleAddToCart(item)}
                    style={{
                      padding: '0.6rem 1.5rem',
                      backgroundColor: addedItems[item._id] ? '#4caf50' : '#ff5722',
                      color: 'white',
                      border: 'none',
                      borderRadius: '8px',
                      fontSize: '1rem',
                      fontWeight: 'bold',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      minWidth: '120px'
                    }}
                    onMouseOver={(e) => {
                      if (!addedItems[item._id]) {
                        e.currentTarget.style.backgroundColor = '#e64a19';
                      }
                    }}
                    onMouseOut={(e) => {
                      if (!addedItems[item._id]) {
                        e.currentTarget.style.backgroundColor = '#ff5722';
                      }
                    }}
                  >
                    {addedItems[item._id] ? '✓ Added!' : '+ Add'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p style={{ textAlign: 'center', color: '#666', fontSize: '1.2rem', marginTop: '3rem' }}>
            No menu items available at the moment.
          </p>
        )}
      </div>

      {/* View Cart Floating Button */}
      <button
        onClick={() => navigate('/cart')}
        style={{
          position: 'fixed',
          bottom: '2rem',
          right: '2rem',
          backgroundColor: '#4caf50',
          color: 'white',
          border: 'none',
          padding: '1rem 2rem',
          borderRadius: '50px',
          fontSize: '1.1rem',
          fontWeight: 'bold',
          cursor: 'pointer',
          boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
          transition: 'transform 0.2s ease',
          zIndex: 1000
        }}
        onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
        onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
      >
        🛒 View Cart
      </button>
    </div>
  );
};

export default Restaurant;
