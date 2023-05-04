import "./Icon.css";

const Icon = (props) => {
  const clickHandler = () => {
    props.onClick(props.title, props.name, props.color);
  };

  return (
    <div className="icon-container" onClick={clickHandler}>
      <div className="icon" style={{ background: props.color }}>
        {props.title}
      </div>
      <h4>{props.name}</h4>
    </div>
  );
};

export default Icon;
