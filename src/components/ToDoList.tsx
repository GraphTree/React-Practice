
import CreateToDo from './CreateToDo';
// import {useRecoilValue} from 'recoil'
// import {toDoState, toDoSelector} from './atoms'
// import ToDo from './ToDo';


function ToDoList(){
    // const [toDos, doings, dones] = useRecoilValue(toDoSelector);
    const onInput = (event:React.FormEvent<HTMLSelectElement>)=>{
        const {currentTarget:{value}} = event;
        // setToDos(oldToDos =>[{text:value, category:'todo', id:Date.now()}, ...oldToDos]) ;
    }

    return (
        <>
        <div>            
            <h1>To Dos </h1>
            <hr />       
                <select onInput={onInput}>
                    <option value="todo">To Do</option>
                    <option value="doing">Doing</option>
                    <option value="done">Done</option>
                </select>     
            <CreateToDo/>
        </div>

        </>
    );
}

export default ToDoList;

