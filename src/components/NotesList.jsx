import { useState } from "react";
import Note from "./Note";
import "./NotesList.css";

const NotesList = (props) => {
  const checkNoteId = (id) => {
    const filteredArray = props.notes.filter((note) => note.id !== id);
    props.setNotesId(filteredArray);
  };

  return (
    <div className="notes-list">
      {props.tag === "all"
        ? props.notes.map((note) => (
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
        : props.notes
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
