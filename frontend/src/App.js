import data from './data';
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
                        <a href="index.html">Paintings</a>
                    </li>
                    <li>
                        <a href="index.html">Posters</a>
                    </li>
                </ul>
            </aside>
            <main className="main">
                <div className="content">
                    <ul className="products">
                      {
                        data.products.map(product => 
                          <li>
                            <div className="product">
                                <img className="product-image" src={product.image} alt="product"></img>
                                <div className="product-name">
                                    <a href="product.html">{product.name}</a>
                                </div>
                                <div className="product-artist">{product.artist}</div>
                                <div className="product-price">${product.price}</div>
                                <div className="product-rating">{product.rating} stars({product.numReviews} reviews)</div>
                            </div>
                        </li>
                        )
                      }
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
