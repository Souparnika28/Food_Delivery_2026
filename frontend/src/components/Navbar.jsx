import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Check if user is logged in
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('username');
    if (token && user) {
      setIsLoggedIn(true);
      setUsername(user);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    setIsLoggedIn(false);
    setUsername('');
    setMobileMenuOpen(false);
    alert('Logged out successfully!');
    navigate('/');
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const isActive = (path) => location.pathname === path;

  const navLinkStyle = (path) => ({
    color: 'white',
    textDecoration: 'none',
    padding: '0.6rem 1rem',
    borderRadius: '8px',
    fontSize: '1rem',
    fontWeight: '500',
    transition: 'all 0.3s ease',
    backgroundColor: isActive(path) ? 'rgba(255,255,255,0.2)' : 'transparent',
    position: 'relative'
  });

  return (
    <nav style={{
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '1rem 2rem',
      boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
      position: 'sticky',
      top: 0,
      zIndex: 1000
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'relative'
      }}>
        {/* Logo */}
        <Link to="/" style={{ textDecoration: 'none' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            <span style={{
              fontSize: '2rem',
              filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))'
            }}>🍽️</span>
            <h1 style={{
              color: 'white',
              margin: 0,
              fontSize: '1.6rem',
              fontWeight: 'bold',
              textShadow: '0 2px 4px rgba(0,0,0,0.2)',
              letterSpacing: '0.5px'
            }}>
              Food Delivery
            </h1>
          </div>
        </Link>

        {/* Burger Menu Button - Mobile Only */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            display: 'none',
            backgroundColor: 'rgba(255,255,255,0.2)',
            border: 'none',
            borderRadius: '8px',
            padding: '0.5rem 0.75rem',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
            '@media (max-width: 768px)': {
              display: 'block'
            }
          }}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.3)'}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.2)'}
          className="mobile-menu-btn"
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <div style={{
              width: '24px',
              height: '3px',
              backgroundColor: 'white',
              borderRadius: '2px',
              transition: 'all 0.3s ease',
              transform: mobileMenuOpen ? 'rotate(45deg) translateY(7px)' : 'none'
            }} />
            <div style={{
              width: '24px',
              height: '3px',
              backgroundColor: 'white',
              borderRadius: '2px',
              opacity: mobileMenuOpen ? 0 : 1,
              transition: 'all 0.3s ease'
            }} />
            <div style={{
              width: '24px',
              height: '3px',
              backgroundColor: 'white',
              borderRadius: '2px',
              transition: 'all 0.3s ease',
              transform: mobileMenuOpen ? 'rotate(-45deg) translateY(-7px)' : 'none'
            }} />
          </div>
        </button>

        {/* Desktop Navigation */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem'
        }}
        className="desktop-nav"
        >
          <Link
            to="/"
            style={navLinkStyle('/')}
            onMouseOver={(e) => {
              if (!isActive('/')) {
                e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.15)';
              }
            }}
            onMouseOut={(e) => {
              if (!isActive('/')) {
                e.currentTarget.style.backgroundColor = 'transparent';
              }
            }}
          >
            🏠 Home
          </Link>

          <Link
            to="/restaurants"
            style={navLinkStyle('/restaurants')}
            onMouseOver={(e) => {
              if (!isActive('/restaurants')) {
                e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.15)';
              }
            }}
            onMouseOut={(e) => {
              if (!isActive('/restaurants')) {
                e.currentTarget.style.backgroundColor = 'transparent';
              }
            }}
          >
            🍴 Restaurants
          </Link>

          <Link
            to="/cart"
            style={navLinkStyle('/cart')}
            onMouseOver={(e) => {
              if (!isActive('/cart')) {
                e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.15)';
              }
            }}
            onMouseOut={(e) => {
              if (!isActive('/cart')) {
                e.currentTarget.style.backgroundColor = 'transparent';
              }
            }}
          >
            🛒 Cart
          </Link>

          <Link
            to="/contact"
            style={navLinkStyle('/contact')}
            onMouseOver={(e) => {
              if (!isActive('/contact')) {
                e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.15)';
              }
            }}
            onMouseOut={(e) => {
              if (!isActive('/contact')) {
                e.currentTarget.style.backgroundColor = 'transparent';
              }
            }}
          >
            📞 Contact
          </Link>

          {/* Divider */}
          <div style={{
            width: '1px',
            height: '30px',
            backgroundColor: 'rgba(255,255,255,0.3)',
            margin: '0 0.5rem'
          }} />

          {isLoggedIn ? (
            <>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                backgroundColor: 'rgba(255,255,255,0.15)',
                padding: '0.5rem 1rem',
                borderRadius: '8px'
              }}>
                <span style={{
                  fontSize: '1.5rem'
                }}>👤</span>
                <span style={{
                  color: 'white',
                  fontWeight: '500',
                  fontSize: '0.95rem'
                }}>
                  {username}
                </span>
              </div>
              <button
                onClick={handleLogout}
                style={{
                  backgroundColor: 'rgba(255,255,255,0.95)',
                  color: '#764ba2',
                  border: 'none',
                  padding: '0.6rem 1.2rem',
                  cursor: 'pointer',
                  borderRadius: '8px',
                  fontWeight: 'bold',
                  fontSize: '0.95rem',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = 'white';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.2)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.95)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.15)';
                }}
              >
                🚪 Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/register"
                style={{
                  ...navLinkStyle('/register'),
                  backgroundColor: 'rgba(255,255,255,0.15)',
                  border: '2px solid rgba(255,255,255,0.3)'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.25)';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.5)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.15)';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)';
                }}
              >
                📝 Register
              </Link>
              <Link
                to="/login"
                style={{
                  ...navLinkStyle('/login'),
                  backgroundColor: 'rgba(255,255,255,0.95)',
                  color: '#764ba2',
                  fontWeight: 'bold',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = 'white';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.2)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.95)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.15)';
                }}
              >
                🔐 Login
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            backgroundColor: 'rgba(118, 75, 162, 0.98)',
            backdropFilter: 'blur(10px)',
            padding: '1.5rem',
            boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
            borderRadius: '0 0 12px 12px',
            marginTop: '1rem',
            animation: 'slideDown 0.3s ease-out'
          }}
          className="mobile-menu"
          >
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem'
            }}>
              <Link
                to="/"
                onClick={closeMobileMenu}
                style={{
                  ...navLinkStyle('/'),
                  display: 'block',
                  textAlign: 'center',
                  fontSize: '1.1rem'
                }}
              >
                🏠 Home
              </Link>

              <Link
                to="/restaurants"
                onClick={closeMobileMenu}
                style={{
                  ...navLinkStyle('/restaurants'),
                  display: 'block',
                  textAlign: 'center',
                  fontSize: '1.1rem'
                }}
              >
                🍴 Restaurants
              </Link>

              <Link
                to="/cart"
                onClick={closeMobileMenu}
                style={{
                  ...navLinkStyle('/cart'),
                  display: 'block',
                  textAlign: 'center',
                  fontSize: '1.1rem'
                }}
              >
                🛒 Cart
              </Link>

              <Link
                to="/contact"
                onClick={closeMobileMenu}
                style={{
                  ...navLinkStyle('/contact'),
                  display: 'block',
                  textAlign: 'center',
                  fontSize: '1.1rem'
                }}
              >
                📞 Contact
              </Link>

              <div style={{
                height: '1px',
                backgroundColor: 'rgba(255,255,255,0.3)',
                margin: '0.5rem 0'
              }} />

              {isLoggedIn ? (
                <>
                  <div style={{
                    textAlign: 'center',
                    color: 'white',
                    padding: '0.75rem',
                    backgroundColor: 'rgba(255,255,255,0.15)',
                    borderRadius: '8px',
                    fontSize: '1.1rem'
                  }}>
                    👤 {username}
                  </div>
                  <button
                    onClick={handleLogout}
                    style={{
                      backgroundColor: 'rgba(255,255,255,0.95)',
                      color: '#764ba2',
                      border: 'none',
                      padding: '0.75rem 1rem',
                      cursor: 'pointer',
                      borderRadius: '8px',
                      fontWeight: 'bold',
                      fontSize: '1.1rem',
                      width: '100%'
                    }}
                  >
                    🚪 Logout
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/register"
                    onClick={closeMobileMenu}
                    style={{
                      backgroundColor: 'rgba(255,255,255,0.15)',
                      color: 'white',
                      textDecoration: 'none',
                      padding: '0.75rem 1rem',
                      borderRadius: '8px',
                      fontWeight: 'bold',
                      fontSize: '1.1rem',
                      textAlign: 'center',
                      display: 'block',
                      border: '2px solid rgba(255,255,255,0.3)'
                    }}
                  >
                    📝 Register
                  </Link>
                  <Link
                    to="/login"
                    onClick={closeMobileMenu}
                    style={{
                      backgroundColor: 'rgba(255,255,255,0.95)',
                      color: '#764ba2',
                      textDecoration: 'none',
                      padding: '0.75rem 1rem',
                      borderRadius: '8px',
                      fontWeight: 'bold',
                      fontSize: '1.1rem',
                      textAlign: 'center',
                      display: 'block'
                    }}
                  >
                    🔐 Login
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>

      {/* CSS for responsive design */}
      <style>{`
        @media (max-width: 968px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-btn {
            display: block !important;
          }
        }
        @media (min-width: 969px) {
          .mobile-menu {
            display: none !important;
          }
        }
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
