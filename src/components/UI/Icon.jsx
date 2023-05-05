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
      <div className="content">
        <h4>{props.name}</h4>
        <h4>({props.quantity})</h4>
      </div>
    </div>
  );
};

export default Icon;
