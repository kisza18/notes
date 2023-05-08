import { useState } from "react";
import "./AddNote.css";

const AddNote = (props) => {
  const [enteredText, setEnteredText] = useState("");
  const [enteredTag, setEnteredtag] = useState("home");
  const [error, setError] = useState(false);

  const textChangeHandler = (event) => {
    setError(false);
    setEnteredText(event.target.value);
  };
  const tagChangeHandler = (event) => {
    setEnteredtag(event.target.value);
  };

  const formSubmit = (event) => {
    event.preventDefault();
    if (enteredText || enteredTag === "") {
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
      setEnteredText("");
      setEnteredtag("home");
      props.modalHandler();
    } else {
      setError(true);
    }
  };

  return (
    <div className="add-note">
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
        <button className="cancel-btn" onClick={props.cancelHandler}>
          cancel
        </button>
        {error && <p className="error-message">please add some text...</p>}
      </div>
    </div>
  );
};

export default AddNote;
