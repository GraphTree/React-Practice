import React from 'react';
import {IToDo} from './atoms';
import {useSetRecoilState} from 'recoil';
import {toDoState} from './atoms';

function ToDo({text, category, id}:IToDo){
    const setToDos = useSetRecoilState(toDoState);
    const onClick = (event:React.MouseEvent<HTMLButtonElement>)=>{
        const {currentTarget:{name}} = event;
        setToDos(oldToDos =>{
            const targetIndex = oldToDos.findIndex(toDo=>toDo.id === id);
            console.log(targetIndex)
            return oldToDos
        })
       

    }
    return(
        <li >
            <span>{text}</span>
            {category!=='todo'? <button name = 'todo' onClick={onClick}>ToDo</button> : null}
            {category!=='doing'? <button name = 'doing' onClick={onClick}>Doing</button> : null}
            {category!=='done'? <button name = 'done' onClick={onClick}>Done</button> : null}
        </li>
    )
}

export default ToDo;