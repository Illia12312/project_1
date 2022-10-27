import { useSelector, useDispatch } from 'react-redux';
import './Cart.css';
import Product from './components/Product/Product';
import { setCartPriceACtion } from 'redux-store/cart/actions';

function Cart() {
  const dispatch = useDispatch();
  const email = useSelector((state) => state.entity.email)
  // const cart = JSON.parse(localStorage.getItem(email));
  // dispatch(setCartPriceACtion(cart));
  // const fullPrice = useSelector((state) => state.cart.cartPrice);
  console.log(email)

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
          
          {/* {cart === null ? <div className='emptyCart'>НИЧЕГО НЕТ</div> : cart.map((i) => (
            <Product name={i.title} price={i.price} count={i.count} key={i.id} id={i.id} email={email}/>
          ))} */}

          <footer className="cartFooter">
            <div className="cartFooterCount">1 шт.</div>
            <div className="cartFooterPrice"> грн.</div>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default Cart;
