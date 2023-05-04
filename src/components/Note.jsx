import "./Note.css";

const Note = (props) => {
  const sendId = (msg) => {
    props.deleteHandler(msg);
  };

  return (
    <div className="note" style={{ background: props.color }}>
      <img
        src="./images/trash.png"
        alt="trash"
        onClick={() => sendId(props.keyId)}
      />
      <p>{props.title}</p>
      <div className="note-container">
        <p>{props.tag}</p>
        <p>{props.date}</p>
      </div>
    </div>
  );
};

export default Note;
