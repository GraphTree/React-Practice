import {atom, selector} from 'recoil';

export interface IToDo{
    text:string,
    category : 'todo' | 'doing' | 'done',
    id:number
}


export const categoryState = atom({
    key:'categoryState',
    default:'todo'
});

export const toDoState = atom<IToDo[]>({
    key : 'toDo',
    default : []
})

export const toDoSelector = selector({
    key : 'toDoSelector',
    get : ({get})=>{
        const toDos = get(toDoState);
        return [
            toDos.filter(toDo=>toDo.category === 'todo'),
            toDos.filter(toDo=>toDo.category === 'doing'),
            toDos.filter(toDo=>toDo.category === 'done')
        ];
    }
})