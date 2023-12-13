import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home';
import About from './components/about';
import Cart from './components/cart';
import Categories from './components/categories';
import NavMenu from './navmenu'; // Assuming this is a non-routing component

function App() {
  return (
    <div className="App">
      <Router>
        <NavMenu />
        <Routes>
          <Route path="/" element={<Home />} /> {/* This renders the Home component by default */}
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/categories" element={<Categories />} />
          {/* Add a catch-all route to render Home if no route matches */}
          <Route path="*" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
