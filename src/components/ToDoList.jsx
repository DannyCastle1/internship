import Form from "./Form"
import { v4 as uuidv4 } from 'uuid'
import Todo from "./Todo";
import Edit from "./Edit";
import useLocalStorage from '/src/hooks/useLocalStorage'

uuidv4();

const ToDoList = () => {
    const [todoValue, setTodoValue] = useLocalStorage('react-todo.tasks',[])

    const createTodo = todo => {
        setTodoValue([...todoValue, { id: uuidv4(), task: todo, isEditing: false }])
    };
    const deleteTodo = id => {
        setTodoValue(todoValue.filter(todo => todo.id !== id))
    };
    const editTodo = id => {
        setTodoValue(todoValue.map(todo => todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo))
    };
    const editTask = (task, id) => {
        setTodoValue(todoValue.map(todo => todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo))
    }

    return (
        <div className="container bg-gray-600 mt-20 p-8 rounded-md text-black">
            <Form createTodo={createTodo} />
            {todoValue.map((todo, index) => (
                todo.isEditing ? (
                    <Edit key={index} editTodo={editTask} task={todo} />
                ) : (<Todo task={todo} key={index} deleteTodo={deleteTodo}
                    editTodo={editTodo} />)
            ))}
        </div>
    )
}

export default ToDoList