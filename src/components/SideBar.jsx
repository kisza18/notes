import Tags from "./Tags";
import "./SideBar.css";

const SideBar = (props) => {
  const activeTagHandler = (title, name, color) => {
    props.activeTag(title, name, color);
  };
  const headerClickHandler = () => {
    props.headerClick("A");
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
      <div className="add-note-control" onClick={props.showModal}>
        <h3>add note</h3>
        <button>+</button>
      </div>
    </div>
  );
};

export default SideBar;
