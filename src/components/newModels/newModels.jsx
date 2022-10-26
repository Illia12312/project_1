import "./newModels.css";
import Products from "../product/Product";
import {
  getDataSuccessAction,
  getDataRequestAction,
  setAmountAction,
  getSplicedItems,
} from "../../redux-store/entity/actions";
import {
  charactersSelector,
  characterStatusSelector,
} from "../../redux-store/entity/selectors";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";

const NewModels = () => {
  // const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const characters = useSelector(charactersSelector);
  // const items = useSelector((state) => state.entity.splicedItems)
  // const status = useSelector(characterStatusSelector);
  // console.log(items);

  // if(status === "SUCCESS" && items.length !== 0){
  //   dispatch(getSplicedItems())
  //   setData(items);
  //}
  

  useEffect(() => {
    dispatch(getDataRequestAction());
  }, []);

  return (
    <div className="NewModels">
      <div className="NewModelsTitleHolder">
        <h2 className="NewModelsTitle">ILIA OUTLET</h2>
        <h3 className="NewModelsSmallTitle">НОВЫЕ ПОСТУПЛЕНИЯ</h3>
      </div>
      <div className="newItemsHolder">
        {characters.map((i) => (
          <Products
            id={i.id}
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
