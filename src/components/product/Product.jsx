import "./Product.css";
import sneaker from "./../../img/sneaker.jpg";
import ProductPopup from "components/ProductPopup/ProductPopup";
import { useState } from "react";
import { useAuth } from "hooks/useAuth";

const Product = ({ name, gender, price, id }) => {
  const [active, setActive] = useState(false);
  const {isAuth} = useAuth();
  

  return (
    <div className="newItemsItem" onClick={() => isAuth ? setActive(true) : alert("registration")}>
      <img src={sneaker} className="newItemsImg"></img>
      <div className="newItemsArticle">Артикул: DC7501-300</div>
      <div className="newItemsName">{name}</div>
      <div className="newItemsGender">{gender}</div>
      <div className="newItemsPrice">{price} грн.</div>
      <ProductPopup active={active} name={name} gender={gender} price={price} setActive={setActive} id={id}/>
    </div>
  );
};

export default Product;