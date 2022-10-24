import "./header.css";
import logo from "../../img/logo.png";
import like from "../../img/like.png";
import cart from "../../img/cart.png";
import user from "../../img/user.png";
import search from "../../img/search.png";
import { useState } from "react";
import Like from "./like/Like";
import { Link } from "react-router-dom";
import { useAuth } from "hooks/useAuth";
import { useSelector } from "react-redux";
import { useLookinFor } from "hooks/useAuth";
import { useEffect } from "react";
import LookingForItem from "components/lookingForItem/LookingForItem";

const Header = () => {
  const [likeOpen, setLikeOpen] = useState(false);
  const { isAuth } = useAuth();
  const [value, setValue] = useState('');
  let {response} = useLookinFor(value)

  return (
    <div className="headerWrapper">
      <div className="header">
        <div className="logoHolder">
          <Link className="customLink" to="/">
            <img src={logo} alt="logo" className="imgLogo" />
          </Link>
        </div>
        <div className="iconsHolder">
          <img src={search} alt="search" className="imgSearch headerIcon" />
          <input
            type="text"
            placeholder="Искать"
            className="inputHeader"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          ></input>
          {value }
          {response !== [] && <div className="searchHolder">{response.map((i) => (<LookingForItem name={i[0]} price={i[1]} />))}</div>}
          <span onClick={() => setLikeOpen(true)}>
            <img src={like} alt="like" className="imgLike headerIcon" />
          </span>
          <Link to="/cart">
            <img src={cart} alt="cart" className="imgCart headerIcon" />
          </Link>
          {isAuth ? (
            <Link to="/logOut">
              <img src={user} alt="user" className="imgUser headerIcon" />
            </Link>
          ) : (
            <Link to="/login">
              <img src={user} alt="user" className="imgUser headerIcon" />
            </Link>
          )}
        </div>
      </div>
      <div className="infoHolder">
        <Link className="customLink" to="/man">
          <div className="infoItem">Мужчины</div>
        </Link>
        <div className="infoItem">Женщины</div>
        <div className="infoItem">Дети</div>
        <div className="infoItem">Брэнды</div>
        <div className="infoItem">Скидки</div>
      </div>
      <Like active={likeOpen} setActive={setLikeOpen} />
    </div>
  );
};

export default Header;
