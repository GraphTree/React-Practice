// to do app
import {useState, useEffect} from "react"

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);

  const onSubmit = (e) => {
    e.preventDefault();
    if (toDo ===""){
      return;
    }
    setToDo("");
    setToDos((currentArray) => [toDo, ...currentArray]); 
    console.log(toDos);
  }

  const onChange = (e) => {
    setToDo(e.target.value);}



  return(
  <div>
    <h1>My toDOs {toDos.length}</h1>
    <form onSubmit={onSubmit}>
      <input 
        value={toDo} 
        onChange={onChange} 
        type = "text" 
        placeholder="write your todo"/>
        <button >Add To Do</button>
    </form>
    <ul>
    {toDos.map((item, index)=> <li key={index}>{item}</li>)}
    </ul>
  </div>)   ;
}

export default App;
