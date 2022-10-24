import "./newModels.css";
import Products from "../product/Product";
import {
  getDataSuccessAction,
  getDataRequestAction,
} from "../../redux-store/entity/actions";
import {
  charactersSelector,
  characterStatusSelector,
} from "../../redux-store/entity/selectors";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";

const NewModels = () => {
  const [counter, setCounter] = useState(0);
  const [amount, setAmount] = useState(10)
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const characters = useSelector(charactersSelector);

  useEffect(() => {
    dispatch(getDataRequestAction());
  }, []);

  // status !== "SUCCESS" ? console.log('dsfsd') : setData(characters.slice(0,amount))

  // console.log(data);
  

  return (
    <div className="NewModels">
      <div className="NewModelsTitleHolder">
        <h2 className="NewModelsTitle">ILIA OUTLET</h2>
        <h3 className="NewModelsSmallTitle">НОВЫЕ ПОСТУПЛЕНИЯ</h3>
      </div>
      <div className="newItemsHolder">
        {characters.map((i) => (
          <Products
            name={i.brand}
            gender={i.gender}
            price={i.price}
            key={i.id}
          />
        ))}
      </div>
      <button className="NewModelsButton">Показать ещё</button>
    </div>
  );
};

export default NewModels;
