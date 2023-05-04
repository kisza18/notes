import { useState } from "react";
import SideBar from "./components/SideBar";
import Header from "./components/Header";
import NotesList from "./components/NotesList";

function App() {
  const [tagTitle, setTagTitle] = useState("A");
  const [tagName, setTagName] = useState("all");
  const [tagColor, setTagColor] = useState("black");

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
  return (
    <>
      <main>
        <div className="side">
          <SideBar activeTag={tagHandler} headerClick={headerTagChange} />
        </div>
        <div className="head">
          <Header title={tagTitle} name={tagName} color={tagColor} />
        </div>
        <div className="main">
          <NotesList tag={tagName} />
        </div>
      </main>
    </>
  );
}

export default App;
