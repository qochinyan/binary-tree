import myTree from "./Tree";
import "./App.css";
import { useState } from "react";
import { json } from "stream/consumers";

function App() {
  const [data, setData] = useState<number[]>([]);
  document.body.addEventListener("keydown", (e) => {
    let actual: number;
    let num = Math.floor(Math.random() * 101);
    let luck = Math.round(Math.random());

    luck ? (actual = num) : (actual = -num);
    myTree.add(actual);

    setData((prev) => [...prev,actual]);
  });
  console.log(myTree);

  return <div className="App">{myTree.root ? myTree.root.value : ""}</div>;
}

export default App;
