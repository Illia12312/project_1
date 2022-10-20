import "./Product.css";
import sneaker from "./../../img/sneaker.jpg";

const Product = ({ name, gender, price }) => {
  return (
    <div className="newItemsItem">
      <img src={sneaker} className="newItemsImg"></img>
      <div className="newItemsArticle">Артикул: DC7501-300</div>
      <div className="newItemsName">{name}</div>
      <div className="newItemsGender">{gender}</div>
      <div className="newItemsPrice">{price} грн.</div>
    </div>
  );
};

export default Product;

// Air Jordan 5 Retro
// Для мужчин
// 6000 грн.
