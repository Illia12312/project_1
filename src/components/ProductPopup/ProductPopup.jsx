import "./ProductPopup.css";
import kros from './img/kros.jpg';
import heart from './img/heart.png';
import { setCartAction, setLikeAction, setCartFromLocalAction } from "redux-store/cart/actions";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

function ProductPopup({active, name, gender, price, setActive, id}) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const email = useSelector((state) => state.entity.email);
  const [count, setCount] = useState(1);
  const [activeCount, setActiveCount] = useState(false)


  const customFunc = (cart, id, name, price, gender, count) =>{
    dispatch(setCartAction(cart, id, name, price, gender, count));    
  }
  const likeFunc = (name, price, gender) => {
    dispatch(setLikeAction(name, price, gender))
  }
  const activeFunc = (active, setActiveCount) => {
    active ? setActiveCount(false) : setActiveCount(true);
  }

  return (
    <div className={active ? "productWrapL active" : "productWrapL"}>
      <div className={active ? "ProductL active" : "ProductL"} onClick={e => e.stopPropagation()}>
        <div className="productCloser" onClick={() => setActive(false)}>x</div>
        <div className="productImgHolder">
          <div className="productImg">
            <img src={kros} alt="img" />
          </div>
          <div className="productImgSlider"></div>
        </div>
        <div className="productInfoHolder">
          <h1 className="productInfoTitle">
          {name}
          </h1>
          <div className="productInfoGender">{gender}</div>
          <div className="productInfoPriceHolder">
            <div className="productInfoPrice">
              <span>{price}</span>
            </div>
            <div className="productInfoArticle">
              <span>Артикул: DM0581-001</span>
            </div>
          </div>
          <h4 className="productInfoSizeTitle">ВЫБЕРИТЕ РАЗМЕР</h4>
          <div className="productInfoSizeHolder">
            <span className="sizeButtonSpan">US</span>
            <button className="sizeButton">7</button>
            <button className="sizeButton">6.5</button>
            <button className="sizeButton">12</button>
            <button className="sizeButton">13</button>
            <button className="sizeButton">13</button>
            <button className="sizeButton">13.5</button>
            <button className="sizeButton">13.5</button>
          </div>
          <div className="productInfoLike" onClick={e => e.stopPropagation()}> 
            <label htmlFor="like" className="productInfoLikeHolder" onClick={() => likeFunc(name, price, gender)}>
              Добавить в избранное
              <a href="Добавить в избранное" className="like" id="like">
              </a>
            </label>
            <img src={heart} alt="heart" className="productPopupHeart"/>
          </div>
          <div className="productInfoButtonHolder" onClick={e => e.stopPropagation()}>
            {activeCount && <div className="countHolder">
              <div className="countNumbersHolder">
                <div className="countNumber" onClick={() => setCount(1)}>1</div>
                <div className="countNumber" onClick={() => setCount(2)}>2</div>
                <div className="countNumber" onClick={() => setCount(3)}>3</div>
                <div className="countNumber" onClick={() => setCount(4)}>4</div>
              </div>
            </div>}
            <button className="productCount" onClick={() => activeFunc(activeCount, setActiveCount)}>КОЛИЧЕСТВО {`(${count})`}</button>
            <button className="productCart" onClick={(e) => {customFunc(cart, id, name, price, gender, count); e.stopPropagation()}}>ДОБАВИТЬ В КОРЗИНУ</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPopup;
