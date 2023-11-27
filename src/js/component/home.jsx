import React, { useState } from "react";

const Home = () => {
    const [task, setTask] = useState(''); //CajaDeZapatos
    const [newTasks, setNewTasks] = useState([]); //ropero
    const [hideButtonDelete, setHideButtonDelete] = useState(null);
    


    const doTask = (e) => {   //Colocar caja de zapatos
        setTask(e.target.value);
    };

    const useKeyEnter = (e) => {  // Usar tecla enter para agregar tarea
        if (e.key === "Enter") {
            setNewTasks(newTasks.concat([task]));
            setTask("");
        }
    };

    const deleteTask = (id) => {
        const delet = newTasks.filter((_task, index) => {
            return index !== id;
        });
        setNewTasks(delet);
    };

    return (
        <div className="todos position-absolute top-0 start-50 translate-middle">
            <h1 className="h1 fw-light">todos</h1>

            <ul className="task {task}">

                <input className="input" type="text" placeholder="What needs to be done?" onChange={doTask} value={task} onKeyDown={useKeyEnter} />

                {newTasks.map((task, i) => (

                    <li key={task.i} onMouseEnter={() => setHideButtonDelete(i)} onMouseLeave={() => setHideButtonDelete(null)} className="items {task}">
                        <span className="textoTarea">{task}</span>
                        {hideButtonDelete === i && (
                            <button onClick={() => deleteTask(i)} className="btnDelete">Delete</button>
                        )}
                    </li>

                ))}
                <div className="left"> {newTasks.length} Item left </div>


            </ul>


        </div>
    );
};

export default Home;
