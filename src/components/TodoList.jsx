import TodoItem from "./TodoItem.jsx";

const TodoList = (props) => {
    const hasTasks = true
    const  {
        tasks = [],
        onDeleteTaskButtonClick,
        onTaskCompleteChanged
    } = props

    if (!hasTasks) {
        return (
            <div className="todo__empty-message"></div>
        )
    }

    return (
        <ul className="todo__list">
            {tasks.map((task) => (
                <TodoItem
                    className="todo__item"
                    id={task.id}
                    key={task.id}
                    title={task.title}
                    isDone={task.isDone}
                    onDeleteTaskButtonClick={onDeleteTaskButtonClick}
                    onTaskCompleteChanged={onTaskCompleteChanged}
                />
            ))}
        </ul>
    )
}

export default TodoList;