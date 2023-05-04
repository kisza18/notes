import { useState } from "react";
import Note from "./Note";
import "./NotesList.css";

const NotesList = (props) => {
  const [notes, setNotes] = useState([
    {
      id: 1,
      color: "var(--yellow)",
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, reprehenderit.",
      tag: "home",
      date: "2023.05.04",
    },
    {
      id: 2,
      color: "var(--blue)",
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, reprehenderit.",
      tag: "work",
      date: "2023.05.04",
    },
    {
      id: 3,
      color: "var(--red)",
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, reprehenderit.",
      tag: "personal",
      date: "2023.05.04",
    },
  ]);

  const checkNoteId = (id) => {
    const filteredArray = notes.filter((note) => note.id !== id);
    setNotes(filteredArray);
  };

  return (
    <div className="notes-list">
      {props.tag === "all"
        ? notes.map((note) => (
            <Note
              key={note.id}
              keyId={note.id}
              color={note.color}
              title={note.title}
              tag={note.tag}
              date={note.date}
              deleteHandler={checkNoteId}
            />
          ))
        : notes
            .filter((note) => note.tag === props.tag)
            .map((filteredNote) => (
              <Note
                key={filteredNote.id}
                keyId={filteredNote.id}
                color={filteredNote.color}
                title={filteredNote.title}
                tag={filteredNote.tag}
                date={filteredNote.date}
                deleteHandler={checkNoteId}
              />
            ))}
    </div>
  );
};

export default NotesList;
