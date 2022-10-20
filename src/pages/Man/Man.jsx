import "./Man.css";
import Item from "components/Item/Item";
import Price from "components/price/Price";
import Product from "components/product/Product";
import SizeItem from "components/sizeItem/SizeItem";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Genderpage from "../../components/genderPage/GenderPage";

function Man() {
  // const dispatch = useDispatch();
  // const value = useSelector((state) => state.sort.value);
  // console.log(value);
  const [value, setValue] = useState("");

  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(
      `https://633db5337e19b17829149247.mockapi.io/sneakers/sneakers/?sortBy${value}&`
    )
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
    console.log(value);
  }, [value]);

  return (
    <div className="productPage">
      <div className="productsItemWrap">
        <h3 className="productsItemTitle">ДЛЯ ЧОЛОВІКІВ</h3>
        <select
          name="select"
          id="manSelect"
          className="manSelect"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        >
          <option value="">Все</option>
          <option value="=price&order=asc">Цена по возрастанию</option>
          <option value="=price&order=desc">Цена по убыванию</option>
        </select>
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
              item.gender === "man" && (
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
    </div>
  );
}

export default Man;
