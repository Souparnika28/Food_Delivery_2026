import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Fetch restaurants from backend
  useEffect(() => {
    fetchRestaurants();
  }, []);

  const fetchRestaurants = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/restaurants`);
      if (!response.ok) {
        throw new Error('Failed to fetch restaurants');
      }
      const data = await response.json();
      // Get top 3 restaurants for home page
      setRestaurants(data.slice(0, 3));
      setLoading(false);
    } catch (error) {
      console.error('Error fetching restaurants:', error);
      setError('Failed to load restaurants. Make sure the backend is running.');
      setLoading(false);
    }
  };

  const filteredRestaurants = restaurants.filter(restaurant =>
    restaurant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    restaurant.cuisine.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
        Loading restaurants... 🍽️
      </div>
    );
  }

  if (error) {
    return (
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '2rem'
      }}>
        <h2 style={{ color: '#f44336', marginBottom: '1rem' }}>⚠️ Error</h2>
        <p style={{ color: '#666', textAlign: 'center' }}>{error}</p>
        <button
          onClick={fetchRestaurants}
          style={{
            marginTop: '1rem',
            padding: '0.75rem 1.5rem',
            backgroundColor: '#ff5722',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer'
          }}
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#f5f5f5'
    }}>
      {/* Hero Section */}
      <div style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        padding: '4rem 2rem',
        textAlign: 'center',
        color: 'white'
      }}>
        <h1 style={{
          fontSize: '3rem',
          margin: '0 0 1rem 0',
          fontWeight: 'bold'
        }}>
          Delicious Food, Delivered Fast 🍔
        </h1>
        <p style={{
          fontSize: '1.2rem',
          margin: '0 0 2rem 0',
          opacity: 0.9
        }}>
          Order from your favorite restaurants and enjoy hot meals at your doorstep
        </p>

        {/* Search Bar */}
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <input
            type="text"
            placeholder="Search for restaurants or cuisine..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              width: '100%',
              padding: '1rem 1.5rem',
              fontSize: '1rem',
              border: 'none',
              borderRadius: '50px',
              boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
              outline: 'none'
            }}
          />
        </div>
      </div>

      {/* Restaurants Section */}
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '3rem 2rem'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '2rem'
        }}>
          <h2 style={{
            fontSize: '2rem',
            margin: 0,
            color: '#333',
            fontWeight: 'bold'
          }}>
            Popular Restaurants Near You
          </h2>
          <Link to="/restaurants" style={{ textDecoration: 'none' }}>
            <button style={{
              padding: '0.75rem 1.5rem',
              backgroundColor: '#667eea',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontSize: '1rem',
              fontWeight: 'bold',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease'
            }}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#5568d3'}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#667eea'}
            >
              View All Restaurants →
            </button>
          </Link>
        </div>

        {filteredRestaurants.length === 0 ? (
          <p style={{ textAlign: 'center', color: '#666', fontSize: '1.2rem' }}>
            No restaurants found. Try a different search term.
          </p>
        ) : (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '2rem'
          }}>
            {filteredRestaurants.map(restaurant => (
              <Link
                key={restaurant._id}
                to={`/restaurant/${restaurant._id}`}
                style={{ textDecoration: 'none' }}
              >
                <div style={{
                  backgroundColor: 'white',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 12px 24px rgba(0,0,0,0.15)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
                }}
                >
                  {/* Restaurant Image */}
                  <div style={{
                    width: '100%',
                    height: '200px',
                    backgroundImage: `url(${restaurant.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    position: 'relative'
                  }}>
                    <div style={{
                      position: 'absolute',
                      top: '10px',
                      right: '10px',
                      backgroundColor: 'rgba(255,255,255,0.95)',
                      padding: '0.4rem 0.8rem',
                      borderRadius: '20px',
                      fontWeight: 'bold',
                      fontSize: '0.9rem',
                      color: '#333'
                    }}>
                      ⭐ {restaurant.rating}
                    </div>
                  </div>

                  {/* Restaurant Info */}
                  <div style={{ padding: '1.5rem' }}>
                    <h3 style={{
                      margin: '0 0 0.5rem 0',
                      fontSize: '1.5rem',
                      color: '#333',
                      fontWeight: 'bold'
                    }}>
                      {restaurant.name}
                    </h3>

                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      marginBottom: '1rem'
                    }}>
                      <span style={{
                        backgroundColor: '#f0f0f0',
                        padding: '0.3rem 0.8rem',
                        borderRadius: '20px',
                        fontSize: '0.85rem',
                        color: '#666'
                      }}>
                        {restaurant.cuisine}
                      </span>
                      <span style={{ color: '#999', fontSize: '0.9rem' }}>
                        🕐 {restaurant.deliveryTime}
                      </span>
                    </div>

                    <button style={{
                      width: '100%',
                      padding: '0.75rem',
                      backgroundColor: '#ff5722',
                      color: 'white',
                      border: 'none',
                      borderRadius: '8px',
                      fontSize: '1rem',
                      fontWeight: 'bold',
                      cursor: 'pointer',
                      transition: 'background-color 0.3s ease'
                    }}
                    onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#e64a19'}
                    onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#ff5722'}
                    >
                      View Menu →
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* Features Section */}
      <div style={{
        backgroundColor: 'white',
        padding: '3rem 2rem',
        marginTop: '2rem'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem',
          textAlign: 'center'
        }}>
          <div>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🚀</div>
            <h3 style={{ color: '#333', marginBottom: '0.5rem' }}>Fast Delivery</h3>
            <p style={{ color: '#666' }}>Get your food delivered in 30 minutes or less</p>
          </div>
          <div>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>💳</div>
            <h3 style={{ color: '#333', marginBottom: '0.5rem' }}>Easy Payment</h3>
            <p style={{ color: '#666' }}>Multiple payment options for your convenience</p>
          </div>
          <div>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>⭐</div>
            <h3 style={{ color: '#333', marginBottom: '0.5rem' }}>Quality Food</h3>
            <p style={{ color: '#666' }}>Fresh ingredients and hygienically prepared meals</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
