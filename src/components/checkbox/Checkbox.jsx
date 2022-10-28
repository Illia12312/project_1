import "./Checkbox.css";

const Checkbox = ({ name }) => {
  return (
    <label className="check option">
      <input className="checkInput" type="checkbox"/>
      <span className="checkbox"></span>
      {name}
    </label>
  );
};

export default Checkbox;
