import "./newModels.css";
import Products from "../product/Product";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "store/slices/postSlice";

const NewModels = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, []);

  const posts = useSelector((state) => state.posts);
  console.log(posts);

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
