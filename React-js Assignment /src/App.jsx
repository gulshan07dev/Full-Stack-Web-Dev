import "./App.css";
import Person from "./components/Person";
import Button from "./components/Button";
import Header from "./components/Header";
import List from "./components/List";

function App() {
  function handleClick() {
    alert("button clicked");
  }

  const items = ["Item 1", "Item 2", "Item 3"];

  return (
    <>
      <Person name="Gulshan" age="14" />
      <Button text="Click me" onClick={handleClick} />
      <Header title="This is title component" />
      <List items={items} />
    </>
  );
}

export default App;
