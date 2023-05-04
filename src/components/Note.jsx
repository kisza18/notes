import "./Note.css";

const Note = (props) => {
  return (
    <div className="note" style={{ background: props.color }}>
      <img src="./images/trash.png" alt="" />
      <p>{props.title}</p>
      <div className="note-container">
        <p>{props.tag}</p>
        <p>{props.date}</p>
      </div>
    </div>
  );
};

export default Note;
