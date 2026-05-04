import { useState } from "react";

//Derived state and conditional rendering
//Derived state is a value calculated from existing state
//It is not usually stored separately in state 
//Instead,We compute it during rendering

export function DerivedStateCondRender() {
    const [tasks, setTasks] = useState([
        { id: 1, title: 'Learn useState', completed: true },
        { id: 2, title: 'Practice JS', completed: false },
        { id: 3, title: 'Learn useContext', completed: false }
    ]);

    const toggleTask = (id) => {
        setTasks(
            tasks.map((task) => task.id === id
                ? { ...task, completed: !task.completed } : task
            )
        );
    };

    //Derived state
    const totalTasks = tasks.length;
    const completedTasks = tasks.filter((task) => task.completed).length;
    const pendingTasks = totalTasks - completedTasks;
    const allCompleted = totalTasks === completedTasks && totalTasks > 0;

    let statusMessage = 'Keep going';
    if (totalTasks === 0) {
        statusMessage = 'No tasks available';
    }
    else if (allCompleted) {
        statusMessage = 'All Tasks Completed'
    }
    else if (completedTasks > 0) {
        statusMessage = 'Good Progress'
    }
    return (
        <>
            <p>Total tasks:{totalTasks}</p>
            <p>Completed Tasks:{completedTasks}</p>
            <p>Pending Tasks:{pendingTasks}</p>

            <p>Status:{statusMessage}</p>

            {allCompleted && (
                <p style={{ color: 'green' }}>
                    Great Job! You finished everything.
                </p>
            )}
            <p>
                Progress:{' '}
                {allCompleted?'Finished':'still in Progress'}
            </p>
            <div>
                <h3>Task List</h3>
                {tasks.map((task)=>(
                    <div key={task.id}>
                       {task.title}-{task.completed ? 'Done':'Pending'}
                       <button onClick={()=>toggleTask(task.id)}>Toggle</button>
                    </div>
                ))}
            </div>
        </>
    )
}