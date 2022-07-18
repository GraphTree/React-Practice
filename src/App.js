import {useState, useEffect} from "react"

function App() {
  const [toDo, setToDo] = useState("");

  const onChange = (e) => {
    setToDo(e.target.value);}

    console.log(toDo);

  return(
  <div>
    <input value={toDo} onChange={onChange} type = "text" placeholder="write your todo"/>
  </div>)  ;
}

export default App;
