import { useState } from "react";
import { v4 } from "uuid";
import _ from "lodash";
import DisplayTodo from "./displayListToDo";
import AddToDo from "./addToDo";

const TodoList = () => {
    const [listTodo, setListTodo] = useState([
        {
            id: v4(),
            name: "watch movie"
        },
        {
            id: v4(),
            name: "clean the floor"
        },
        {
            id: v4(),
            name: "coding"
        },
    ]);

    const [todo, setTodo] = useState("");




    return (
        <div className="todoList">
            <AddToDo
                todo={todo}
                setListTodo={setListTodo}
                setTodo={setTodo}
                listTodo={listTodo}
            />
            <DisplayTodo
                listTodo={listTodo}
                setListTodo={setListTodo}
            />
        </div>
    )
}

export default TodoList;