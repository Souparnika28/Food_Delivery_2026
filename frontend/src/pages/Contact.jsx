import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  return (
    <div style={{ backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      {/* Header Section */}
      <div style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        padding: '4rem 2rem',
        textAlign: 'center',
        color: 'white'
      }}>
        <h1 style={{ fontSize: '3rem', margin: '0 0 1rem 0', fontWeight: 'bold' }}>
          Get In Touch 💬
        </h1>
        <p style={{ fontSize: '1.2rem', opacity: 0.9 }}>
          Have questions? We'd love to hear from you!
        </p>
      </div>

      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '3rem 2rem'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          marginBottom: '3rem'
        }}>
          {/* Contact Info Cards */}
          <div style={{
            backgroundColor: 'white',
            padding: '2rem',
            borderRadius: '12px',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            textAlign: 'center'
          }}>
            <div style={{
              fontSize: '3rem',
              marginBottom: '1rem'
            }}>📍</div>
            <h3 style={{ marginBottom: '0.5rem', color: '#333' }}>Our Location</h3>
            <p style={{ color: '#666', lineHeight: '1.6' }}>
              123 Food Street<br />
              Delivery Lane<br />
              Your City, 12345
            </p>
          </div>

          <div style={{
            backgroundColor: 'white',
            padding: '2rem',
            borderRadius: '12px',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            textAlign: 'center'
          }}>
            <div style={{
              fontSize: '3rem',
              marginBottom: '1rem'
            }}>📞</div>
            <h3 style={{ marginBottom: '0.5rem', color: '#333' }}>Phone Number</h3>
            <p style={{ color: '#666', lineHeight: '1.6' }}>
              <a href="tel:+1234567890" style={{ color: '#ff5722', textDecoration: 'none' }}>
                +1 (234) 567-890
              </a><br />
              <span style={{ fontSize: '0.9rem' }}>24/7 Customer Support</span>
            </p>
          </div>

          <div style={{
            backgroundColor: 'white',
            padding: '2rem',
            borderRadius: '12px',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            textAlign: 'center'
          }}>
            <div style={{
              fontSize: '3rem',
              marginBottom: '1rem'
            }}>✉️</div>
            <h3 style={{ marginBottom: '0.5rem', color: '#333' }}>Email Us</h3>
            <p style={{ color: '#666', lineHeight: '1.6' }}>
              <a href="mailto:support@fooddelivery.com" style={{ color: '#ff5722', textDecoration: 'none' }}>
                support@fooddelivery.com
              </a><br />
              <span style={{ fontSize: '0.9rem' }}>We reply within 24 hours</span>
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div style={{
          backgroundColor: 'white',
          padding: '3rem',
          borderRadius: '12px',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          <h2 style={{
            textAlign: 'center',
            marginBottom: '2rem',
            color: '#333',
            fontSize: '2rem'
          }}>
            Send Us a Message
          </h2>

          {submitted ? (
            <div style={{
              textAlign: 'center',
              padding: '3rem',
              backgroundColor: '#e8f5e9',
              borderRadius: '12px'
            }}>
              <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>✓</div>
              <h3 style={{ color: '#4caf50', marginBottom: '0.5rem' }}>
                Message Sent Successfully!
              </h3>
              <p style={{ color: '#666' }}>
                Thank you for contacting us. We'll get back to you soon!
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem'
            }}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '1.5rem'
              }}>
                <div>
                  <label style={{
                    display: 'block',
                    marginBottom: '0.5rem',
                    color: '#333',
                    fontWeight: 'bold'
                  }}>
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '2px solid #ddd',
                      borderRadius: '8px',
                      fontSize: '1rem',
                      outline: 'none',
                      transition: 'border-color 0.3s ease'
                    }}
                  />
                </div>

                <div>
                  <label style={{
                    display: 'block',
                    marginBottom: '0.5rem',
                    color: '#333',
                    fontWeight: 'bold'
                  }}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '2px solid #ddd',
                      borderRadius: '8px',
                      fontSize: '1rem',
                      outline: 'none',
                      transition: 'border-color 0.3s ease'
                    }}
                  />
                </div>
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '1.5rem'
              }}>
                <div>
                  <label style={{
                    display: 'block',
                    marginBottom: '0.5rem',
                    color: '#333',
                    fontWeight: 'bold'
                  }}>
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (234) 567-890"
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '2px solid #ddd',
                      borderRadius: '8px',
                      fontSize: '1rem',
                      outline: 'none',
                      transition: 'border-color 0.3s ease'
                    }}
                  />
                </div>

                <div>
                  <label style={{
                    display: 'block',
                    marginBottom: '0.5rem',
                    color: '#333',
                    fontWeight: 'bold'
                  }}>
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="How can we help?"
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '2px solid #ddd',
                      borderRadius: '8px',
                      fontSize: '1rem',
                      outline: 'none',
                      transition: 'border-color 0.3s ease'
                    }}
                  />
                </div>
              </div>

              <div>
                <label style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  color: '#333',
                  fontWeight: 'bold'
                }}>
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell us more about your inquiry..."
                  rows="6"
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '2px solid #ddd',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    outline: 'none',
                    fontFamily: 'inherit',
                    resize: 'vertical',
                    transition: 'border-color 0.3s ease'
                  }}
                />
              </div>

              <button
                type="submit"
                style={{
                  padding: '1rem 2rem',
                  backgroundColor: '#ff5722',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '1.1rem',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  transition: 'background-color 0.3s ease'
                }}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#e64a19'}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#ff5722'}
              >
                Send Message 📤
              </button>
            </form>
          )}
        </div>

        {/* Map Section */}
        <div style={{
          marginTop: '3rem',
          backgroundColor: 'white',
          padding: '2rem',
          borderRadius: '12px',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
          textAlign: 'center'
        }}>
          <h3 style={{ marginBottom: '1rem', color: '#333', fontSize: '1.5rem' }}>
            Visit Our Office
          </h3>
          <div style={{
            backgroundColor: '#f0f0f0',
            height: '300px',
            borderRadius: '8px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: '#666'
          }}>
            <p>🗺️ Map Integration Coming Soon</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
