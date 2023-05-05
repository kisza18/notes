import Icon from "./UI/Icon";
import "./Header.css";

const Header = (props) => {
  return (
    <div className="header">
      <div className="container">
        <Icon
          title={props.title}
          name={props.name}
          color={props.color}
          quantity={props.quantity}
        />
      </div>
    </div>
  );
};

export default Header;
