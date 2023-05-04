import { useState } from "react";
import Icon from "../assets/UI/Icon";
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
        color="var(--yellow)"
        onClick={tagChangeHandler}
      />
      <Icon
        title="W"
        name="work"
        color="var(--blue)"
        onClick={tagChangeHandler}
      />
      <Icon
        title="P"
        name="personal"
        color="var(--red)"
        onClick={tagChangeHandler}
      />
    </div>
  );
};

export default Tags;
