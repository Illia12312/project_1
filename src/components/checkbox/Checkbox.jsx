import { useState } from "react";
import "./Checkbox.css";

const Checkbox = ({ name, items, brand, setItem }) => {
  const [check, setCheck] = useState(false);
  const chekedFunc = (check, setCheck, items, brand) =>{
    check ? setCheck(false) :  setCheck(true);
    check ? setItem(items.filter((i) => i.brand !== brand)) : setItem(items);
    console.log(items, brand);
  }


  return (
    <label className="check option">
      <input className="checkInput" type="checkbox" onClick={() => chekedFunc(check, setCheck, items, brand)}/>
      <span className="checkbox"></span>
      {name}
    </label>
  );
};

export default Checkbox;
