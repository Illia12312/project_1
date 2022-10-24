import "./Product.css";
import sneaker from "./../../img/sneaker.jpg";
import ProductPopup from "components/ProductPopup/ProductPopup";
import { useState } from "react";

const Product = ({ name, gender, price }) => {
  const [active, setActive] = useState(false);

  return (
    <div className="newItemsItem" onClick={() => setActive(true)}>
      <img src={sneaker} className="newItemsImg"></img>
      <div className="newItemsArticle">Артикул: DC7501-300</div>
      <div className="newItemsName">{name}</div>
      <div className="newItemsGender">{gender}</div>
      <div className="newItemsPrice">{price} грн.</div>
      <ProductPopup active={active} name={name} gender={gender} price={price} setActive={setActive}/>
    </div>
  );
};

export default Product;