
import { AiFillEdit } from 'react-icons/ai'
import { BsTrash } from 'react-icons/bs'
import useLocalStorage from '/src/hooks/useLocalStorage'

const Todo = ({ task, deleteTodo, editTodo }) => {
    const [isChecked, setIsChecked] = useLocalStorage('react-todo.tasks.checked',[])
    const handleCheck = (e) =>{ 
        setIsChecked(!isChecked)
    }

    return (
        <div className='flex justify-between items-center bg-gray-800 text-white py-3 px-4 rounded-md mb-1 cursor-pointer'>
            <input type="checkbox" checked={isChecked} onChange={handleCheck} />
            <p className="font font-primary">{task.task}</p>
            <div className='flex items-center gap x-4'>
                <AiFillEdit className='text-xl' onClick={() => editTodo(task.id)} />
                <BsTrash className='text-xl' onClick={() => deleteTodo(task.id)} />
            </div>
        </div>
    )
}

export default Todo