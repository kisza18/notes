import { useState } from "react";
import Icon from "./UI/Icon";
import "./Tags.css";

const Tags = (props) => {
  const tagChangeHandler = (title, name, color) => {
    props.sendTag(title, name, color);
  };

  return (
    <div className="tags">
      <h3>Lists</h3>
      <Icon
        title="H"
        name="home"
        color="var(--home)"
        quantity={props.quantityH}
        onClick={tagChangeHandler}
      />
      <Icon
        title="W"
        name="work"
        color="var(--work)"
        quantity={props.quantityW}
        onClick={tagChangeHandler}
      />
      <Icon
        title="P"
        name="personal"
        color="var(--personal)"
        quantity={props.quantityP}
        onClick={tagChangeHandler}
      />
    </div>
  );
};

export default Tags;
