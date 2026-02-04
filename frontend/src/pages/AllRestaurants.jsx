import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const AllRestaurants = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCuisine, setFilterCuisine] = useState('All');
  const [sortBy, setSortBy] = useState('rating');

  // Fetch restaurants from backend
  useEffect(() => {
    fetchRestaurants();
  }, []);

  const fetchRestaurants = async () => {
    try {
      const response = await fetch('http://localhost:4000/api/restaurants');
      if (!response.ok) {
        throw new Error('Failed to fetch restaurants');
      }
      const data = await response.json();
      setRestaurants(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching restaurants:', error);
      setError('Failed to load restaurants. Make sure the backend is running.');
      setLoading(false);
    }
  };

  // Get unique cuisines
  const cuisines = ['All', ...new Set(restaurants.map(r => r.cuisine))];

  // Filter and sort restaurants
  let filteredRestaurants = restaurants.filter(restaurant => {
    const matchesSearch = restaurant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         restaurant.cuisine.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCuisine = filterCuisine === 'All' || restaurant.cuisine === filterCuisine;
    return matchesSearch && matchesCuisine;
  });

  // Sort restaurants
  if (sortBy === 'rating') {
    filteredRestaurants.sort((a, b) => b.rating - a.rating);
  } else if (sortBy === 'deliveryTime') {
    filteredRestaurants.sort((a, b) => {
      const timeA = parseInt(a.deliveryTime.split('-')[0]);
      const timeB = parseInt(b.deliveryTime.split('-')[0]);
      return timeA - timeB;
    });
  } else if (sortBy === 'name') {
    filteredRestaurants.sort((a, b) => a.name.localeCompare(b.name));
  }

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
    <div style={{ backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      {/* Header */}
      <div style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        padding: '3rem 2rem',
        textAlign: 'center',
        color: 'white'
      }}>
        <h1 style={{ fontSize: '2.5rem', margin: '0 0 1rem 0', fontWeight: 'bold' }}>
          All Restaurants 🍽️
        </h1>
        <p style={{ fontSize: '1.1rem', opacity: 0.9 }}>
          Discover amazing food from {restaurants.length} restaurants
        </p>
      </div>

      {/* Filters Section */}
      <div style={{
        backgroundColor: 'white',
        padding: '1.5rem 2rem',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '1rem',
          alignItems: 'center'
        }}>
          {/* Search */}
          <input
            type="text"
            placeholder="🔍 Search restaurants or cuisine..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              padding: '0.75rem 1rem',
              border: '2px solid #ddd',
              borderRadius: '8px',
              fontSize: '1rem',
              outline: 'none'
            }}
          />

          {/* Filter by Cuisine */}
          <select
            value={filterCuisine}
            onChange={(e) => setFilterCuisine(e.target.value)}
            style={{
              padding: '0.75rem 1rem',
              border: '2px solid #ddd',
              borderRadius: '8px',
              fontSize: '1rem',
              outline: 'none',
              cursor: 'pointer'
            }}
          >
            {cuisines.map(cuisine => (
              <option key={cuisine} value={cuisine}>{cuisine} Cuisine</option>
            ))}
          </select>

          {/* Sort By */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            style={{
              padding: '0.75rem 1rem',
              border: '2px solid #ddd',
              borderRadius: '8px',
              fontSize: '1rem',
              outline: 'none',
              cursor: 'pointer'
            }}
          >
            <option value="rating">Sort by Rating</option>
            <option value="deliveryTime">Sort by Delivery Time</option>
            <option value="name">Sort by Name</option>
          </select>
        </div>
      </div>

      {/* Results Count */}
      <div style={{
        maxWidth: '1200px',
        margin: '2rem auto 1rem',
        padding: '0 2rem'
      }}>
        <p style={{ color: '#666', fontSize: '1rem' }}>
          Showing {filteredRestaurants.length} restaurant{filteredRestaurants.length !== 1 ? 's' : ''}
        </p>
      </div>

      {/* Restaurant Grid */}
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 2rem 3rem'
      }}>
        {filteredRestaurants.length === 0 ? (
          <div style={{
            textAlign: 'center',
            padding: '4rem 2rem',
            backgroundColor: 'white',
            borderRadius: '12px'
          }}>
            <h3 style={{ marginBottom: '0.5rem' }}>No restaurants found</h3>
            <p style={{ color: '#666' }}>Try adjusting your filters or search term</p>
          </div>
        ) : (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
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
                  cursor: 'pointer',
                  position: 'relative',
                  height: '100%'
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
                  {/* Image */}
                  <div style={{
                    width: '100%',
                    height: '200px',
                    backgroundImage: `url(${restaurant.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    position: 'relative'
                  }}>
                    {/* Discount Badge */}
                    {restaurant.discount && (
                      <div style={{
                        position: 'absolute',
                        top: '10px',
                        left: '10px',
                        backgroundColor: '#ff5722',
                        color: 'white',
                        padding: '0.4rem 0.8rem',
                        borderRadius: '20px',
                        fontWeight: 'bold',
                        fontSize: '0.85rem'
                      }}>
                        {restaurant.discount}
                      </div>
                    )}

                    {/* Open/Closed Badge */}
                    <div style={{
                      position: 'absolute',
                      top: '10px',
                      right: '10px',
                      backgroundColor: restaurant.isOpen ? '#4caf50' : '#f44336',
                      color: 'white',
                      padding: '0.3rem 0.6rem',
                      borderRadius: '20px',
                      fontSize: '0.75rem',
                      fontWeight: 'bold'
                    }}>
                      {restaurant.isOpen ? 'OPEN' : 'CLOSED'}
                    </div>
                  </div>

                  {/* Content */}
                  <div style={{ padding: '1.5rem' }}>
                    {/* Name and Rating */}
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'start',
                      marginBottom: '0.5rem'
                    }}>
                      <h3 style={{
                        margin: 0,
                        fontSize: '1.3rem',
                        color: '#333',
                        fontWeight: 'bold'
                      }}>
                        {restaurant.name}
                      </h3>
                      <div style={{
                        backgroundColor: '#4caf50',
                        color: 'white',
                        padding: '0.3rem 0.6rem',
                        borderRadius: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.2rem',
                        fontSize: '0.9rem',
                        fontWeight: 'bold'
                      }}>
                        ⭐ {restaurant.rating}
                      </div>
                    </div>

                    {/* Cuisine and Reviews */}
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      marginBottom: '0.75rem'
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
                      <span style={{ color: '#999', fontSize: '0.85rem' }}>
                        ({restaurant.reviewCount} reviews)
                      </span>
                    </div>

                    {/* Description */}
                    <p style={{
                      color: '#666',
                      fontSize: '0.9rem',
                      lineHeight: '1.5',
                      marginBottom: '1rem'
                    }}>
                      {restaurant.description}
                    </p>

                    {/* Specialties */}
                    <div style={{
                      display: 'flex',
                      gap: '0.5rem',
                      flexWrap: 'wrap',
                      marginBottom: '1rem'
                    }}>
                      {restaurant.specialties && restaurant.specialties.map((specialty, index) => (
                        <span key={index} style={{
                          backgroundColor: '#fff3e0',
                          color: '#f57c00',
                          padding: '0.2rem 0.6rem',
                          borderRadius: '12px',
                          fontSize: '0.75rem',
                          fontWeight: 'bold'
                        }}>
                          {specialty}
                        </span>
                      ))}
                    </div>

                    {/* Delivery Info */}
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      paddingTop: '1rem',
                      borderTop: '1px solid #eee',
                      fontSize: '0.9rem',
                      color: '#666'
                    }}>
                      <span>🕐 {restaurant.deliveryTime}</span>
                      <span>{restaurant.priceRange}</span>
                      <span>{restaurant.deliveryFee === 'Free' ? '🆓 Free' : `💰 ${restaurant.deliveryFee}`}</span>
                    </div>

                    {/* Min Order */}
                    <div style={{
                      marginTop: '0.75rem',
                      fontSize: '0.85rem',
                      color: '#999'
                    }}>
                      Min order: ₹{restaurant.minOrder}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AllRestaurants;
