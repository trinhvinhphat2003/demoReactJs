import { v4 } from "uuid";
const AddToDo = (props) => {
    const { todo, setListTodo, setTodo, listTodo } = props

    const handleAddWork = () => {
        let todoItem = {
            id: v4(),
            name: todo
        }
        setListTodo([...listTodo, todoItem]);
        setTodo("");
    }

    return (
        <div className="inputBox">
            <label>Add work</label>
            <input onChange={(event) => { setTodo(event.target.value) }} value={todo} />
            <button type="submit" onClick={(event) => handleAddWork()}>Add</button>
        </div>
    )
}

export default AddToDo;