import {atom} from 'recoil';

export interface IToDo{
    text:string,
    category : 'todo' | 'doing' | 'done',
    id:number
}


export const toDoState = atom<IToDo[]>({
    key : 'toDo',
    default : []
})
