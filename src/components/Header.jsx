import Icon from "../assets/UI/Icon";
import "./Header.css";

const Header = (props) => {
  return (
    <div className="header">
      <div className="container">
        <Icon title={props.title} name="" color={props.color} />
        <h3 className="header--title">{props.name} notes</h3>
      </div>
    </div>
  );
};

export default Header;
