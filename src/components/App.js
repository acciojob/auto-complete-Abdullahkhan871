import React, { useEffect, useState } from "react";
import "./../styles/App.css";

const App = () => {
  const fruits = ["apple", "banana", "cherry", "date", "elderberry", "fig"];
  const [vlv, setVlv] = useState("");
  const [itemSearch, setItemSearch] = useState(fruits);

  useEffect(() => {
    if (vlv) {
      setItemSearch(itemSearch.filter((item) => item.includes(vlv)));
    } else {
      setItemSearch(fruits);
    }
  }, [vlv]);

  return (
    <div>
      <h1>Search item</h1>
      <input type="text" value={vlv} onChange={(e) => setVlv(e.target.value)} />
      <ul>
        {itemSearch.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
