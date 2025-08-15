import './App.css';
import HomeScreen from './Screens/HomeScreen';
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import ProductScreen from './Screens/ProductScreen';
import CartScreen from './Screens/CartScreen';

function App() {
  const openMenu = () =>{
    document.querySelector(".side-bar").classList.add('open');
  }
  const closeMenu = () =>{
    document.querySelector(".side-bar").classList.remove('open');
  }
  return (
    <BrowserRouter>
    <div className="grid-container">
            <header className="header">
                <div className="brand">
                    <button onClick={openMenu}>
                        &#9776;
                    </button>
                    <Link to="/">Niloofar Asoubar</Link>
                </div>
                <div className="header-links">
                    <a href="cart.html">Cart</a>
                    <a href="signin.html">Sign In</a>
                </div>
            </header>
            <aside className="side-bar">
                <h3>shopping categories</h3>
                <button className="sidebar-close-button" onClick={closeMenu}>x</button>
                <ul>
                    <li>
                        <a href="index.html">Paintings</a>
                    </li>
                    <li>
                        <a href="index.html">Posters</a>
                    </li>
                </ul>
            </aside>
            <main className="main">
                <div className="content">
                  <Routes>
                    <Route path="/product/:id" element={<ProductScreen />} />
                    <Route path="/cart/:id?" element={<CartScreen />} />
                    <Route path="/" exact={true} element={<HomeScreen />}/>
                  </Routes>
                </div>
            </main>
            <footer className="footer">
                all rights reserved.
            </footer>
        </div>
        </BrowserRouter>
  );
}

export default App;
