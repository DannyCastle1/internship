import {useState} from 'react'

const Form = ({createTodo}) => {
    const [value, setValue] = useState();

    const handleSubmit= e =>{
        e.preventDefault();
        createTodo(value);
        setValue('');
    }
  return (
    <form className="mb-4 font-primary w-full"
    onSubmit={handleSubmit}> 
        <input type="text" 
        placeholder="Add task"
        onChange={(e)=> setValue(e.target.value)}
        value={value}
        className="outline-none bg-transparent border border-gray-900 p-4 w-[300px] text-white mb-8 placeholder:text-gray-300" />
        <button className="bg-gray-400 border-none p-2 text-white cursor-pointer rounded ml-2">Add Task</button>
    </form>
  )
}

export default Form