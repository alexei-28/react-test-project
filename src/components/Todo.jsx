import {useState} from 'react'
import AddTaskForm from "./AddTaskForm.jsx";
import SearchTaskForm from "./SearchTaskForm.jsx";
import ToDoInfo from "./ToDoInfo.jsx";
import TodoList from "./TodoList.jsx";

const Todo = () => {
    // React hooks
    // tasks = current value. Function "setTasks" use to update "tasks".
    // tasks - React store "tasks" inside itself.
    const [tasks, setTasks] = useState([
        {id: "task-1", title: "Buy milk", isDone: false},
        {id: "task-2", title: "Drink coffee", isDone: true}
    ]);

    const [newTaskTitle, setNewTaskTitle] = useState('')

    const addTask = () => {
        if (newTaskTitle.trim().length > 0) {
            const newTask = {
                id: crypto?.randomUUID() ?? Date.now().toString,
                title: newTaskTitle,
                isDone: false
            }
            // ...tasks spread operator -> [...] здесь создаёт новый массив(newTasks), а newTask добавляется в его конец.
            const newTasks = [...tasks, newTask]
            // Установи tasks новым массивом(newTasks), состоящим из всех старых задач(tasks) плюс новой задачи(newTask).
            setTasks(newTasks);
            setNewTaskTitle("");
        }
    }

    const deleteAllTasks = () => {
        const isConfirmed = confirm("Are you sure you want to delete all tasks?");
        if (isConfirmed) {
            setTasks([])
        }
    }

    const deleteTask = (taskId) => {
        const isConfirmed = confirm("Are you sure you want to delete task?");
        if (isConfirmed) {
            // create new array
            const filterTasks = tasks.filter((it) => it.id !== taskId)
            setTasks(filterTasks)
        }
    }

    const toggleTaskComplete = (taskId, isDone) => {
        const mappedTasks = tasks.map((task) => {
            if (task.id === taskId) {
                // Создаем новый объект задачи, копируя старые свойства и перезаписывая только isDone
                return { ...task, isDone }; // {...} создают абсолютно новый объект
            }
            return task; // Остальные задачи возвращаем без изменений
        });
        setTasks(mappedTasks);
    }

    const filterTasks = (query) => {
        console.log("Query: ", query);
    }

    return (
        <div className="todo">
            <h1 className="todo__title">To Do List</h1>
            <AddTaskForm
                addTask={addTask}
                newTaskTitle={newTaskTitle}
                setNewTaskTitle={setNewTaskTitle}
            />
            <SearchTaskForm
                onSearchInput={filterTasks}
            />
            <ToDoInfo
                total={tasks.length}
                done={tasks.filter(task => task.isDone).length}
                onDeleteAllButtonClick={deleteAllTasks}
            />
            <TodoList
                tasks={tasks}
                onDeleteTaskButtonClick={deleteTask}
                onTaskCompleteChanged={toggleTaskComplete}
            />
        </div>
    )
}

export default Todo