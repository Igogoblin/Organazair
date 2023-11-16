import React from "react";

function NewProjForm({ text, handleInput, handleSubmit }) {
  return (
    <label>
      <input
        placeholder="new project"
        value={text}
        onChange={(e) => handleInput(e.target.value)}
      ></input>
      <button onClick={handleSubmit}>Add project</button>
    </label>
  );
}

export default NewProjForm;
