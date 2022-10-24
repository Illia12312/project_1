import "./LogOut.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Gallery from "components/main/gallery/Gallery";
import {romoveUserAction} from 'redux-store/entity/actions'

const LogOut = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const backFunc = () => {
    dispatch(romoveUserAction());
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
