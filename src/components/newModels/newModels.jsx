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
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const NewModels = () => {
  const dispatch = useDispatch();
  const characters = useSelector(charactersSelector);
  const status = useSelector(characterStatusSelector);
  // useEffect(() => {
  //   dispatch(getPosts());
  // }, []);

  useEffect(() => {
    dispatch(getDataRequestAction());
  }, []);
  
  console.log(characters);

  return (
    <div className="NewModels">
      <div className="NewModelsTitleHolder">
        <h2 className="NewModelsTitle">ILIA OUTLET</h2>
        <h3 className="NewModelsSmallTitle">НОВЫЕ ПОСТУПЛЕНИЯ</h3>
      </div>
      <div className="newItemsHolder">
        {/* {posts.map((i) => (
          <Products
            name={i.brand}
            gender={i.gender}
            price={i.price}
            key={i.price}
          />
        ))} */}
      </div>
      <button className="NewModelsButton">Показать ещё</button>
    </div>
  );
};

export default NewModels;
