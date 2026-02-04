import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer style={{
      backgroundColor: '#2c3e50',
      color: 'white',
      marginTop: 'auto'
    }}>
      {/* Main Footer Content */}
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '3rem 2rem',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '2rem'
      }}>
        {/* About Section */}
        <div>
          <h3 style={{
            fontSize: '1.5rem',
            marginBottom: '1rem',
            color: '#ff5722'
          }}>
            🍴 Food Delivery
          </h3>
          <p style={{
            color: '#bdc3c7',
            lineHeight: '1.6',
            fontSize: '0.95rem'
          }}>
            Delivering happiness to your doorstep! Order from your favorite restaurants and enjoy delicious meals at home.
          </p>
          <div style={{
            display: 'flex',
            gap: '1rem',
            marginTop: '1.5rem'
          }}>
            {/* Social Media Icons */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                width: '40px',
                height: '40px',
                backgroundColor: '#3b5998',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '1.2rem',
                textDecoration: 'none',
                transition: 'transform 0.3s ease'
              }}
              onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              f
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                width: '40px',
                height: '40px',
                backgroundColor: '#1da1f2',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '1.2rem',
                textDecoration: 'none',
                transition: 'transform 0.3s ease'
              }}
              onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              𝕏
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                width: '40px',
                height: '40px',
                background: 'linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '1.2rem',
                textDecoration: 'none',
                transition: 'transform 0.3s ease'
              }}
              onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              📷
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 style={{
            fontSize: '1.2rem',
            marginBottom: '1rem',
            color: 'white'
          }}>
            Quick Links
          </h4>
          <ul style={{
            listStyle: 'none',
            padding: 0,
            margin: 0
          }}>
            <li style={{ marginBottom: '0.75rem' }}>
              <Link
                to="/"
                style={{
                  color: '#bdc3c7',
                  textDecoration: 'none',
                  transition: 'color 0.3s ease'
                }}
                onMouseOver={(e) => e.currentTarget.style.color = '#ff5722'}
                onMouseOut={(e) => e.currentTarget.style.color = '#bdc3c7'}
              >
                🏠 Home
              </Link>
            </li>
            <li style={{ marginBottom: '0.75rem' }}>
              <Link
                to="/cart"
                style={{
                  color: '#bdc3c7',
                  textDecoration: 'none',
                  transition: 'color 0.3s ease'
                }}
                onMouseOver={(e) => e.currentTarget.style.color = '#ff5722'}
                onMouseOut={(e) => e.currentTarget.style.color = '#bdc3c7'}
              >
                🛒 Cart
              </Link>
            </li>
            <li style={{ marginBottom: '0.75rem' }}>
              <a
                href="#about"
                style={{
                  color: '#bdc3c7',
                  textDecoration: 'none',
                  transition: 'color 0.3s ease'
                }}
                onMouseOver={(e) => e.currentTarget.style.color = '#ff5722'}
                onMouseOut={(e) => e.currentTarget.style.color = '#bdc3c7'}
              >
                ℹ️ About Us
              </a>
            </li>
            <li style={{ marginBottom: '0.75rem' }}>
              <a
                href="#terms"
                style={{
                  color: '#bdc3c7',
                  textDecoration: 'none',
                  transition: 'color 0.3s ease'
                }}
                onMouseOver={(e) => e.currentTarget.style.color = '#ff5722'}
                onMouseOut={(e) => e.currentTarget.style.color = '#bdc3c7'}
              >
                📋 Terms & Conditions
              </a>
            </li>
            <li style={{ marginBottom: '0.75rem' }}>
              <a
                href="#privacy"
                style={{
                  color: '#bdc3c7',
                  textDecoration: 'none',
                  transition: 'color 0.3s ease'
                }}
                onMouseOver={(e) => e.currentTarget.style.color = '#ff5722'}
                onMouseOut={(e) => e.currentTarget.style.color = '#bdc3c7'}
              >
                🔒 Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h4 style={{
            fontSize: '1.2rem',
            marginBottom: '1rem',
            color: 'white'
          }}>
            Contact Us
          </h4>
          <div style={{ color: '#bdc3c7' }}>
            <p style={{
              marginBottom: '1rem',
              display: 'flex',
              alignItems: 'start',
              gap: '0.5rem'
            }}>
              <span style={{ fontSize: '1.2rem' }}>📍</span>
              <span>123 Food Street, Delivery Lane,<br />Your City, 12345</span>
            </p>
            <p style={{
              marginBottom: '1rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              <span style={{ fontSize: '1.2rem' }}>📞</span>
              <a
                href="tel:+1234567890"
                style={{
                  color: '#bdc3c7',
                  textDecoration: 'none',
                  transition: 'color 0.3s ease'
                }}
                onMouseOver={(e) => e.currentTarget.style.color = '#ff5722'}
                onMouseOut={(e) => e.currentTarget.style.color = '#bdc3c7'}
              >
                +1 (234) 567-890
              </a>
            </p>
            <p style={{
              marginBottom: '1rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              <span style={{ fontSize: '1.2rem' }}>✉️</span>
              <a
                href="mailto:support@fooddelivery.com"
                style={{
                  color: '#bdc3c7',
                  textDecoration: 'none',
                  transition: 'color 0.3s ease'
                }}
                onMouseOver={(e) => e.currentTarget.style.color = '#ff5722'}
                onMouseOut={(e) => e.currentTarget.style.color = '#bdc3c7'}
              >
                support@fooddelivery.com
              </a>
            </p>
            <p style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              <span style={{ fontSize: '1.2rem' }}>🕐</span>
              <span>24/7 Customer Support</span>
            </p>
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h4 style={{
            fontSize: '1.2rem',
            marginBottom: '1rem',
            color: 'white'
          }}>
            Stay Updated
          </h4>
          <p style={{
            color: '#bdc3c7',
            marginBottom: '1rem',
            fontSize: '0.95rem'
          }}>
            Subscribe to get special offers and updates!
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert('Thanks for subscribing! 🎉');
            }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem'
            }}
          >
            <input
              type="email"
              placeholder="Enter your email"
              required
              style={{
                padding: '0.75rem',
                borderRadius: '8px',
                border: 'none',
                fontSize: '0.95rem',
                outline: 'none'
              }}
            />
            <button
              type="submit"
              style={{
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
              Subscribe 📧
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{
        borderTop: '1px solid rgba(255,255,255,0.1)',
        padding: '1.5rem 2rem',
        textAlign: 'center',
        backgroundColor: '#34495e'
      }}>
        <p style={{
          margin: 0,
          color: '#bdc3c7',
          fontSize: '0.9rem'
        }}>
          © 2026 Food Delivery. All rights reserved. Made with ❤️ for food lovers.
        </p>
        <p style={{
          margin: '0.5rem 0 0 0',
          color: '#95a5a6',
          fontSize: '0.85rem'
        }}>
          Powered by React & MongoDB | Designed for Beginners
        </p>
      </div>
    </footer>
  );
};

export default Footer;
