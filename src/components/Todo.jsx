import {useState, useEffect} from 'react' // hooks
import AddTaskForm from "./AddTaskForm.jsx";
import SearchTaskForm from "./SearchTaskForm.jsx";
import ToDoInfo from "./ToDoInfo.jsx";
import TodoList from "./TodoList.jsx";

const Todo = () => {
    // React hooks
    // tasks = current value. Function "setTasks" use to update "tasks".
    // tasks - React store "tasks" inside itself.
    const [tasks, setTasks] = useState(() => {
        const savedTasks = localStorage.getItem('tasks')
        console.log("Init savedTasks: ", savedTasks);
        if (savedTasks) {
            return JSON.parse(savedTasks)
        }

        // default array
        return [
            {id: "task-1", title: "Buy milk", isDone: false},
            {id: "task-2", title: "Drink coffee", isDone: true}
        ]
    });

    // React запускает каждый useEffect минимум один раз, независимо от того поменялась ли значение зависимости(tasks) или нет.
    // Вызывается при первой загрузки и при каждом изменении tasks.
    // Важен порядок вызова useEffect-ов.
    useEffect(() => {
        console.log("Changed tasks: ", tasks);
        localStorage.setItem('tasks', JSON.stringify(tasks)) // данные в localStorage хранятся в виде строк
    }, [tasks]) // для слежки изменения нужного состояния


    const [newTaskTitle, setNewTaskTitle] = useState('')
    const [searchQuery, setSearchQuery] = useState('')

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
            setNewTaskTitle('');
            setSearchQuery('')
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
                return {...task, isDone}; // {...} создают абсолютно новый объект
            }
            return task; // Остальные задачи возвращаем без изменений
        });
        setTasks(mappedTasks)
    }

    const clearSearchQuery = searchQuery.trim().toLowerCase()
    const filteredTasks = clearSearchQuery.length > 0
        ? tasks.filter(({title}) => title.toLowerCase().includes(clearSearchQuery))
        : null

    return (
        <div className="todo">
            <h1 className="todo__title">To Do List</h1>
            <AddTaskForm
                addTask={addTask}
                newTaskTitle={newTaskTitle}
                setNewTaskTitle={setNewTaskTitle}
            />
            <SearchTaskForm
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
            />
            <ToDoInfo
                total={tasks.length}
                done={tasks.filter(task => task.isDone).length}
                onDeleteAllButtonClick={deleteAllTasks}
            />
            <TodoList
                tasks={tasks}
                filteredTasks={filteredTasks}
                onDeleteTaskButtonClick={deleteTask}
                onTaskCompleteChanged={toggleTaskComplete}
            />
        </div>
    )
}

export default Todo