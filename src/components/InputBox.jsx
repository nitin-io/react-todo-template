import { useRef, useState } from "react";

const InputBox = () => {
  const [title, setTitle] = useState("");
  const titleInputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title);
    setTitle("");
    return titleInputRef.current.focus();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter A Task..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        ref={titleInputRef}
        autoFocus
      />
      <button type="submit">Add To Do</button>
    </form>
  );
};

export default InputBox;
