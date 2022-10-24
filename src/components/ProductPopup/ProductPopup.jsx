import "./ProductPopup.css";
import kros from './img/kros.jpg';

function ProductPopup({active, setActive, name, gender, price}) {
  return (
    <div className={active ? "productWrap active" : "productWrap"}>
      <div className={active ? "Product active" : "Product"} onClick={e => e.stopPropagation()}>
        <div className="productCloser" onClick={setActive(false)}>X</div>
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
          <div className="productInfoLike">
            <label htmlFor="like" className="productInfoLikeHolder">
              Добавить в избранное
              <a href="Добавить в избранное" className="like" id="like">
                {" "}
                X
              </a>
            </label>
          </div>
          <div className="productInfoButtonHolder">
            <button className="productCount">КОЛИЧЕСТВО</button>
            <button className="productCart">ДОБАВИТЬ В КОРЗИНУ</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPopup;
