import "./GenderPage.css";
import Item from "components/Item/Item";
import Price from "components/price/Price";
import Product from "components/product/Product";
import SizeItem from "components/sizeItem/SizeItem";

const Genderpage = ({ genderName, data, title }) => {
  <div className="productPage">
    <div className="productsItemWrap">
      <h3 className="productsItemTitle">{title}</h3>
    </div>
    <div className="filterWrap">
      <div className="filter">
        <nav className="navFilter">
          <Item name="БРЕНДЫ" />
          <Item name="КОЛЛЕКЦИИ" />
          <SizeItem />
          <Price />
        </nav>
      </div>
      <div className="productsHolder">
        {data.map(
          (item) =>
            item.gender === genderName && (
              <Product
                name={item.id}
                gender={item.gender}
                key={item.id}
                price={item.price}
              />
            )
        )}
      </div>
    </div>
  </div>;
};

export default Genderpage;
