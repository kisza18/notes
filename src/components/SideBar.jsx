import Tags from "./Tags";
import AddNote from "./AddNote";
import "./SideBar.css";

const SideBar = (props) => {
  const activeTagHandler = (title, name, color) => {
    props.activeTag(title, name, color);
  };
  const headerClickHandler = () => {
    props.headerClick("A");
  };
  const getData = (note) => {
    props.sendNewNote(note);
  };
  return (
    <div className="side-bar">
      <div className="side-bar--header" onClick={headerClickHandler}>
        <img className="side-bar--logo" src="./images/notes-logo.png" alt="" />
        <h3>notes</h3>
      </div>
      <Tags
        sendTag={activeTagHandler}
        quantityH={props.quantityH}
        quantityW={props.quantityW}
        quantityP={props.quantityP}
      />
      <AddNote sendData={getData} />
    </div>
  );
};

export default SideBar;
