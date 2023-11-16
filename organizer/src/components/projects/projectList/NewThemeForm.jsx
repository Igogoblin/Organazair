function NewThemeForm({ text, handleInput, handleSubmit }) {
  return (
    <label>
      <input
        placeholder="new theme"
        value={text}
        onChange={(e) => handleInput(e.target.value)}
      ></input>
      <button onClick={handleSubmit}>Add theme</button>
    </label>
  );
}

export default NewThemeForm;
