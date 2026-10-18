const ToDoInfo = (props) => {
    const {
        total,
        done
    } = props

    const isExistTasks = total > 0

    return (
        <div className="todo__info">
            <div className="todo__total-tasks">
                Done {done} from {total}
            </div>
            {
                isExistTasks && (
                    <button className="todo__delete-all-button" type="button">
                    Delete all
                    </button>
                )
            }
        </div>
    )
}

export default ToDoInfo;