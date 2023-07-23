import { useState } from "react";
import { generateItems } from "./data";
import List from "./components/List";
import { useTransition } from "react";

const items = generateItems();
const filterItems = (string) => (string ? items.filter((item) => item.includes(string)) : items);

const App = () => {
  const [text, setText] = useState("");
  const [isPending, startTransition] = useTransition();
  const filteredItems = filterItems(text);

  const updateFilter = (e) => {
    startTransition(() => {
      setText(e.target.value);
    });
    // setText(e.target.value);
  };

  return (
    <div className="container">
      <input type="text" name="user-input" onChange={updateFilter} />
      <label htmlFor="user-input" className={isPending ? "show" : "hide"}>
        pending...
      </label>
      <List items={filteredItems} />
    </div>
  );
};

export default App;
