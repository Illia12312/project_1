import "./LogOut.css";
import { removeUser } from "store/slices/useSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Gallery from "components/main/gallery/Gallery";

const LogOut = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const backFunc = () => {
    dispatch(removeUser());
    navigate("/");
  };
  return (
    <div className="logOut">
      <h3 className="logOutTitle">Xотите выйти из аккаунта?</h3>
      <button className="logOutButton" onClick={backFunc}>
        ВЫЙТИ
      </button>
      <Gallery />
    </div>
  );
};

export default LogOut;
