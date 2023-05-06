const DisplayTodo = (props) => {
    const handleDeleteWork = (id) => {
        props.setListTodo(props.listTodo.filter((item, index) => item.id !== id))
    }

    return (
        <div>
            {props.listTodo.map((item, index) => {
                return (
                    <h5 key={item.id} id={item.id} onClick={() => handleDeleteWork(item.id)}>{item.name}</h5>
                )
            })}
        </div>
    )
}

export default DisplayTodo;