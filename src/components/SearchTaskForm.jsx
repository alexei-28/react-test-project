import Field from "./Field.jsx";

const SearchTaskForm = () => {
    return (
        <form className="todo__form">
            <div className="todo__field field">
                <Field
                    className = "field__label"
                    label =  "Search task"
                    id = "search-task"
                    type = "search"
                >
                </Field>
            </div>
        </form>
    )
}

export default SearchTaskForm