import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);
  function addNote(Note) {
    const { title, content } = Note;
    setNotes((prevValue) => {
      return [...prevValue, Note];
    });
  }

  function deleteN(id) {
    console.log("done");
    setNotes((prevValue) => {
      return prevValue.filter((noteItem, idx) => {
        return idx !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea addNote={addNote} />
      {notes.map((note, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={note.title}
            content={note.content}
            onDelete={deleteN}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
