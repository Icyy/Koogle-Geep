import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleClick(event) {
    props.addNote(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setNote((preValue) => {
      if (name === "title") {
        return {
          title: value,
          content: preValue.content
        };
      } else if (name === "content") {
        return {
          title: preValue.title,
          content: value
        };
      }
    });
  }

  return (
    <div>
      <form>
        <input
          name="title"
          value={note.title}
          onChange={handleChange}
          placeholder="Title"
        />
        <textarea
          name="content"
          value={note.content}
          onChange={handleChange}
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={handleClick}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
