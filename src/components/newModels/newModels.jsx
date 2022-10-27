import "./newModels.css";
import Products from "../product/Product";
import {
  getDataRequestAction,
} from "../../redux-store/entity/actions";
import {
  charactersSelector,
} from "../../redux-store/entity/selectors";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const NewModels = () => {
  const dispatch = useDispatch();
  const characters = useSelector(charactersSelector);
  const items = characters.slice(0, 10);

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
        {items.map((i) => (
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
