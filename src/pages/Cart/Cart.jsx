import { useSelector } from 'react-redux';
import './Cart.css';
import Product from './components/Product/Product';

function Cart() {
  const email = useSelector((state) => state.entity.email)
  const cart = JSON.parse(localStorage.getItem(email));

  return (
    <div className="cartWrapper">
      <header className="sectionCartHeader">
        <div className="container">              
          <h1 className="mainTitle">Корзина товаров</h1>
        </div>
      </header>
      <div className="sectionCartBody">
        <div className="container">
          <header className="cartHeader">
            <div className="cartHeaderTitle">наименование</div>
            <div className="cartHeaderCount">количество</div>
            <div className="cartHeaderCost">стоимость</div>
          </header>
          
          <Product/>

          <footer className="cartFooter">
            <div className="cartFooterCount">1 шт.</div>
            <div className="cartFooterPrice">6000 грн.</div>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default Cart;
