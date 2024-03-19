import ToDoList from "./components/ToDoList";
import InputBox from "./components/InputBox";
import "./App.css";

function App() {
  return (
    <div className="container">
      <ToDoList
        list={[
          { title: "I'll do it", id: 1 },
          { title: "I'll do it, and this is a long paragraph", id: 12 },
        ]}
      />
      <InputBox />
    </div>
  );
}

export default App;
