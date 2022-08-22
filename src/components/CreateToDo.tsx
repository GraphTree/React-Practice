import {useForm} from 'react-hook-form'
import {useSetRecoilState} from 'recoil'
import {toDoState} from './atoms'


interface IForm {
    toDo:string
}




function CreateToDo() {
    const {handleSubmit, register} = useForm<IForm>();
    const setToDos = useSetRecoilState(toDoState);

    const inValid =  ({toDo}:IForm) =>{
        setToDos((prev)=>[{text:toDo, category:'todo', id:Date.now()}, ...prev]) ; 
    }

    return (
        <form onSubmit={handleSubmit(inValid)}>
        <input {...register('toDo', {required:'write todo'}) } placeholder="write a to do"/>
        <button>Add</button>
    </form>

    )
}

export default CreateToDo;