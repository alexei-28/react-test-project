import TodoItem from "./TodoItem.jsx";

const TodoList = (props) => {
    const  {
        tasks = [],
        filteredTasks = filteredTasks,
        onDeleteTaskButtonClick,
        onTaskCompleteChanged
    } = props

    const hasTasks = tasks.length > 0
    const isEmptyFilteredTasks = filteredTasks?.length === 0

    if (!hasTasks) {
        return (
            <div className="todo__empty-message">There are no tasks yet</div>
        )
    }

    if (hasTasks && isEmptyFilteredTasks) {
        return (
            <div className="todo__empty-message">Tasks not found</div>
        )
    }

    return (
        <ul className="todo__list">
            {(filteredTasks ?? tasks).map((task) => (
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