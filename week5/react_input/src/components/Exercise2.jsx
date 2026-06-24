import { useState } from "react";

const Exercise2 = () => {
  const [name, setName] = useState("");
  const [fruit, setFruit] = useState("");

  return (
    <div>
      <input
        id="name-input"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <select
        id="select-input"
        onChange={(e) => {
            const selectedFruit = e.target.value
            setFruit(selectedFruit)
            console.log(`${name} selected ${selectedFruit}`)}
        }
        value={fruit}
      >
        <option value="apple">apple</option>
        <option value="orange">orange</option>
        <option value="kiwi">kiwi</option>
        <option value="banana">banana</option>


      </select>
    </div>
  );
};
export default Exercise2;
