import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/home';
import AllRestaurants from './pages/AllRestaurants';
import Restaurant from './pages/Restaurant';
import Cart from './pages/Cart';
import Register from './pages/Register';
import Login from './pages/Login';
import OrderSuccess from './pages/OrderSuccess';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh'
      }}>
        <Navbar />
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/restaurants" element={<AllRestaurants />} />
            <Route path="/restaurant/:id" element={<Restaurant />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/OrderSuccess" element={<OrderSuccess />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={
              <div style={{
                padding: '4rem 2rem',
                textAlign: 'center',
                minHeight: '50vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
              }}>
                <h1 style={{ fontSize: '4rem', margin: '0 0 1rem 0' }}>404</h1>
                <h2 style={{ margin: '0 0 1rem 0' }}>Page Not Found</h2>
                <p style={{ color: '#666', marginBottom: '2rem' }}>
                  The page you're looking for doesn't exist.
                </p>
                <a
                  href="/"
                  style={{
                    color: 'white',
                    backgroundColor: '#ff5722',
                    padding: '0.75rem 2rem',
                    borderRadius: '8px',
                    textDecoration: 'none',
                    fontWeight: 'bold'
                  }}
                >
                  Go Back Home
                </a>
              </div>
            } />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
