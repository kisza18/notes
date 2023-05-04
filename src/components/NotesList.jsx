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
  return (
    <div className="notes-list">
      {notes
        .filter((note) => note.tag === props.tag)
        .map((filteredNote) => (
          <Note
            key={filteredNote.id}
            color={filteredNote.color}
            title={filteredNote.title}
            tag={filteredNote.tag}
            date={filteredNote.date}
          />
        ))}
    </div>
  );
};

export default NotesList;
