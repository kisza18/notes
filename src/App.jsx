import { useState } from "react";
import SideBar from "./components/SideBar";
import Header from "./components/Header";
import NotesList from "./components/NotesList";
import Modal from "./components/Modal";

function App() {
  const [tagTitle, setTagTitle] = useState("A");
  const [tagName, setTagName] = useState("all");
  const [tagColor, setTagColor] = useState("black");
  const [isShow, setIsShow] = useState(false);

  const [notes, setNotes] = useState([
    {
      id: 1,
      color: "var(--home)",
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, reprehenderit.",
      tag: "home",
      date: "Mar 10, 2021",
    },
    {
      id: 2,
      color: "var(--work)",
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, reprehenderit.",
      tag: "work",
      date: "Aug 23, 2018",
    },
    {
      id: 3,
      color: "var(--home)",
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, reprehenderit.",
      tag: "home",
      date: "Jan 9, 2020",
    },
    {
      id: 4,
      color: "var(--personal)",
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, reprehenderit.",
      tag: "personal",
      date: "Dec 24, 2016",
    },
  ]);

  const tagHandler = (title, name, color) => {
    setTagTitle(title);
    setTagName(name);
    setTagColor(color);
  };
  const headerTagChange = () => {
    setTagTitle("A");
    setTagName("all");
    setTagColor("black");
  };
  const filterNoteList = (id) => {
    setNotes(id);
  };
  const tagArrayCount = (tag) => {
    if (tagName === "all") {
      return notes.length;
    } else {
      const tagCount = notes.filter((note) => note.tag === tag);
      return tagCount.length;
    }
  };

  const toggleModal = () => {
    setIsShow(!isShow);
  };

  const homeArray = notes.filter((note) => note.tag === "home");
  const workArray = notes.filter((note) => note.tag === "work");
  const personalArray = notes.filter((note) => note.tag === "personal");

  const newNoteData = (data) => {
    setNotes((prevNotes) => {
      return [data, ...prevNotes];
    });
  };

  return (
    <>
      <main>
        {isShow && (
          <Modal
            cancelModal={toggleModal}
            sendNewNote={newNoteData}
            modalHandler={toggleModal}
          />
        )}
        <div className="side">
          <SideBar
            activeTag={tagHandler}
            headerClick={headerTagChange}
            quantityH={homeArray.length}
            quantityW={workArray.length}
            quantityP={personalArray.length}
            showModal={toggleModal}
          />
        </div>
        <div className="head">
          <Header
            title={tagTitle}
            name={tagName}
            color={tagColor}
            quantity={tagArrayCount(tagName)}
          />
        </div>
        <div className="main">
          <NotesList notes={notes} tag={tagName} setNotesId={filterNoteList} />
        </div>
      </main>
    </>
  );
}

export default App;
