import logo from './logo.svg';
import './App.css';

function App() {
  const openMenu = () =>{
    document.querySelector(".side-bar").classList.add('open');
  }
  const closeMenu = () =>{
    document.querySelector(".side-bar").classList.remove('open');
  }
  return (
    <div className="grid-container">
            <header className="header">
                <div className="brand">
                    <button onClick={openMenu}>
                        &#9776;
                    </button>
                    <a href="index.html">niloofar asoubar</a>
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
                        <a href="index.html">paintings</a>
                    </li>
                    <li>
                        <a href="index.html">posters</a>
                    </li>
                </ul>
            </aside>
            <main className="main">
                <div className="content">
                    <ul className="products">
                        <li>
                            <div className="product">
                                <img className="product-image" src="/images/picture1.jpg" alt="product"></img>
                                <div className="product-name">
                                    <a href="product.html">Maanalaiset / Subterraneans</a>
                                </div>
                                <div className="product-artist">Timo Sälekivi</div>
                                <div className="product-price">$100</div>
                                <div className="product-rating">4.5 stars(8 reviews)</div>
                            </div>
                        </li>
                        <li>
                            <div className="product">
                                <img className="product-image" src="/images/picture1.jpg" alt="product"></img>
                                <div className="product-name">
                                    <a href="product.html">Maanalaiset / Subterraneans</a>
                                </div>
                                <div className="product-artist">Timo Sälekivi</div>
                                <div className="product-price">$100</div>
                                <div className="product-rating">4.5 stars(8 reviews)</div>
                            </div>
                        </li>
                        <li>
                            <div className="product">
                                <img className="product-image" src="/images/picture1.jpg" alt="product"></img>
                                <div className="product-name">
                                    <a href="product.html">Maanalaiset / Subterraneans</a>
                                </div>
                                <div className="product-artist">Timo Sälekivi</div>
                                <div className="product-price">$100</div>
                                <div className="product-rating">4.5 stars(8 reviews)</div>
                            </div>
                        </li>
                        <li>
                            <div className="product">
                                <img className="product-image" src="/images/picture1.jpg" alt="product"></img>
                                <div className="product-name">
                                    <a href="product.html">Maanalaiset / Subterraneans</a>
                                </div>
                                <div className="product-artist">Timo Sälekivi</div>
                                <div className="product-price">$100</div>
                                <div className="product-rating">4.5 stars(8 reviews)</div>
                            </div>
                        </li>
                        <li>
                            <div className="product">
                                <img className="product-image" src="/images/picture1.jpg" alt="product"></img>
                                <div className="product-name">
                                    <a href="product.html">Maanalaiset / Subterraneans</a>
                                </div>
                                <div className="product-artist">Timo Sälekivi</div>
                                <div className="product-price">$100</div>
                                <div className="product-rating">4.5 stars(8 reviews)</div>
                            </div>
                        </li>
                        <li>
                            <div className="product">
                                <img className="product-image" src="/images/picture1.jpg" alt="product"></img>
                                <div className="product-name">
                                    <a href="product.html">Maanalaiset / Subterraneans</a>
                                </div>
                                <div className="product-artist">Timo Sälekivi</div>
                                <div className="product-price">$100</div>
                                <div className="product-rating">4.5 stars(8 reviews)</div>
                            </div>
                        </li>
                    </ul>
                </div>
            </main>
            <footer className="footer">
                all rights reserved.
            </footer>
        </div>
  );
}

export default App;
