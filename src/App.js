import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home';
import About from './components/about';
import Cart from './components/cart';
import Categories from './components/categories';
import NavMenu from './navmenu'; 
import Details from './components/Details';

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
          <Route path='/details' element={<Details />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
