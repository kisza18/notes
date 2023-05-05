import { useState } from "react";
import "./AddNote.css";

const AddNote = (props) => {
  const [isShow, setIsShow] = useState(false);
  const [enteredText, setEnteredText] = useState("");
  const [enteredTag, setEnteredtag] = useState("home");

  const toggleForm = () => {
    setIsShow(!isShow);
    console.log(isShow);
  };

  const textChangeHandler = (event) => {
    setEnteredText(event.target.value);
  };
  const tagChangeHandler = (event) => {
    setEnteredtag(event.target.value);
  };

  const formSubmit = (event) => {
    event.preventDefault();
    const newDate = new Date().toLocaleDateString("en-us", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
    const newNote = {
      title: enteredText,
      tag: enteredTag,
      id: +Math.random().toString(),
      color: `var(--${enteredTag})`,
      date: newDate,
    };
    props.sendData(newNote);
    setIsShow(false);
    setEnteredText("");
    setEnteredtag("home");
  };

  return (
    <div className="add-note">
      <div className="add-note-control" onClick={toggleForm}>
        <h3>add note</h3>
        <button>+</button>
      </div>
      {isShow && (
        <div className="add-form">
          <form onSubmit={formSubmit}>
            <textarea
              type="text"
              placeholder="add some text"
              maxLength="80"
              value={enteredText}
              onChange={textChangeHandler}
            />
            <div className="form-controls">
              <select name="tagselect" onChange={tagChangeHandler}>
                <option value="home">home</option>
                <option value="work">work</option>
                <option value="personal">personal</option>
              </select>
              <button type="submit">add ({enteredText.length})</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default AddNote;
