import AddNote from "./AddNote";
import "./Modal.css";

const Modal = (props) => {
  const getData = (data) => {
    props.sendNewNote(data);
  };
  return (
    <div className="modal">
      <AddNote
        cancelHandler={props.cancelModal}
        sendData={getData}
        modalHandler={props.cancelModal}
      />
    </div>
  );
};

export default Modal;
