import "./Man.css";
import Item from "components/Item/Item";
import Price from "components/price/Price";
import Product from "components/product/Product";
import SizeItem from "components/sizeItem/SizeItem";
import { useEffect } from "react";
import { useState } from "react";
import _ from "lodash";
import { useSelector, useDispatch } from "react-redux";
import { getDataRequestAction, sortDescAction } from "redux-store/entity/actions";
import { charactersSelector } from "redux-store/entity/selectors";

function Man() {
  const [item, setItem] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDataRequestAction());
  }, []);
  const data = useSelector(charactersSelector);

  useEffect(() => {
    setItem(data);
  }, [])

  const funcSort = (value) =>{
    if(value === 'all'){
      setItem(data);
    }
    else if(value === 'asc'){
      setItem(_.orderBy(data, ['price'], ['asc']));
    }
    else if(value === 'desc'){
      setItem(_.orderBy(data, ['price'], ['desc']));
    }
  }

  console.log(item);

  return (
    <div className="productPage">
      <div className="productsItemWrap">
        <h3 className="productsItemTitle">ДЛЯ ЧОЛОВІКІВ</h3>
        <select
          name="select"
          id="manSelect"
          className="manSelect"
          onChange={(e) => funcSort(e.target.value)}
        >
          <option value="all">Все</option>
          <option value="asc">Цена по возрастанию</option>
          <option value="desc">Цена по убыванию</option>
        </select>
      </div>
      <div className="filterWrap">
        <div className="filter">
          <nav className="navFilter">
            <Item name="БРЕНДЫ"/>
            <SizeItem/>
            <Price item={item} setItem={setItem} gender='man'/>
          </nav>
        </div>
        <div className="productsHolder">
        {item.map(
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
