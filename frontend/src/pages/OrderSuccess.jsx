import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

function OrderSuccess() {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    // Countdown timer
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '2rem'
    }}>
      <div style={{
        backgroundColor: 'white',
        borderRadius: '20px',
        padding: '3rem',
        maxWidth: '500px',
        width: '100%',
        textAlign: 'center',
        boxShadow: '0 10px 40px rgba(0,0,0,0.2)'
      }}>
        {/* Success Animation */}
        <div style={{
          width: '100px',
          height: '100px',
          margin: '0 auto 2rem',
          backgroundColor: '#4caf50',
          borderRadius: '50%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '4rem',
          animation: 'bounce 1s ease'
        }}>
          ✓
        </div>

        <style>{`
          @keyframes bounce {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.2); }
          }
        `}</style>

        <h1 style={{
          fontSize: '2.5rem',
          color: '#333',
          margin: '0 0 1rem 0',
          fontWeight: 'bold'
        }}>
          Order Placed Successfully! 🎉
        </h1>

        <p style={{
          fontSize: '1.1rem',
          color: '#666',
          margin: '0 0 2rem 0',
          lineHeight: '1.6'
        }}>
          Thank you for your order! Your delicious meal is being prepared and will be delivered to you soon.
        </p>

        {/* Order Details Box */}
        <div style={{
          backgroundColor: '#f5f5f5',
          padding: '1.5rem',
          borderRadius: '12px',
          marginBottom: '2rem'
        }}>
          <h3 style={{ margin: '0 0 1rem 0', color: '#333', fontSize: '1.2rem' }}>What's Next?</h3>
          <div style={{ textAlign: 'left', color: '#666' }}>
            <p style={{ margin: '0.5rem 0', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ fontSize: '1.5rem' }}>👨‍🍳</span>
              <span>Restaurant is preparing your order</span>
            </p>
            <p style={{ margin: '0.5rem 0', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ fontSize: '1.5rem' }}>🚴</span>
              <span>Delivery partner will pick it up</span>
            </p>
            <p style={{ margin: '0.5rem 0', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ fontSize: '1.5rem' }}>🏠</span>
              <span>Your food will arrive hot and fresh!</span>
            </p>
          </div>
        </div>

        {/* Estimated Time */}
        <div style={{
          backgroundColor: '#fff3e0',
          padding: '1rem',
          borderRadius: '12px',
          marginBottom: '2rem',
          border: '2px dashed #ff9800'
        }}>
          <p style={{ margin: 0, color: '#f57c00', fontWeight: 'bold', fontSize: '1.1rem' }}>
            🕐 Estimated Delivery: 25-30 minutes
          </p>
        </div>

        {/* Action Buttons */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem'
        }}>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <button style={{
              width: '100%',
              padding: '1rem',
              backgroundColor: '#ff5722',
              color: 'white',
              border: 'none',
              borderRadius: '12px',
              fontSize: '1.1rem',
              fontWeight: 'bold',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease'
            }}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#e64a19'}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#ff5722'}
            >
              Order More Food 🍽️
            </button>
          </Link>

          <button
            onClick={() => navigate('/')}
            style={{
              width: '100%',
              padding: '1rem',
              backgroundColor: 'white',
              color: '#667eea',
              border: '2px solid #667eea',
              borderRadius: '12px',
              fontSize: '1rem',
              fontWeight: 'bold',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = '#667eea';
              e.currentTarget.style.color = 'white';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = 'white';
              e.currentTarget.style.color = '#667eea';
            }}
          >
            Back to Home {countdown > 0 ? `(${countdown}s)` : ''}
          </button>
        </div>

        {/* Fun Message */}
        <p style={{
          marginTop: '2rem',
          fontSize: '0.9rem',
          color: '#999',
          fontStyle: 'italic'
        }}>
          Hungry for more? We're always here to serve you! 😋
        </p>
      </div>
    </div>
  );
}

export default OrderSuccess;
