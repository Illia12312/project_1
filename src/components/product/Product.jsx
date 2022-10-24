import "./Product.css";
import sneaker from "./../../img/sneaker.jpg";
import ProductPopup from "components/ProductPopup/ProductPopup";
import { useState } from "react";

const Product = ({ name, gender, price }) => {
  const [active, setActive] = useState(false);

  const activeFunc = () =>{
    setActive(true);
  }

  return (
    <div className="newItemsItem" onClick={activeFunc}>
      <img src={sneaker} className="newItemsImg"></img>
      <div className="newItemsArticle">Артикул: DC7501-300</div>
      <div className="newItemsName">{name}</div>
      <div className="newItemsGender">{gender}</div>
      <div className="newItemsPrice">{price} грн.</div>
      <ProductPopup active={active} setActive={setActive} name={name} gender={gender} price={price}/>
    </div>
  );
};

export default Product;

// Air Jordan 5 Retro
// Для мужчин
// 6000 грн.
