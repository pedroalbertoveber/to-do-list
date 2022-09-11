import React, { useState } from 'react';
import { ITask } from '../../interface/Task';
import Modal from '../Modal';
import TaskForm from '../TaskForm';
import TaskList from '../TaskList';

import styles from './Main.module.css';

function Main() {

    const [ taskList, setTaskList ] = useState<ITask[]>([]);
    const [ taskToUpdate, setTaskToUpdate ] = useState<ITask | null>(null);

    const deleteTask = (id: number): void => {
        setTaskList(
            taskList.filter((task) => {
                return task.id !== id;
            })
        );
    };

    const hideOrShowModal = (display: boolean) => {
        const modal = document.getElementById("modal");

        if (display) {
            modal!.classList.remove("hide");
        } else {
            modal!.classList.add("hide");
        }
    };

    const editTask = (task: ITask): void => {
        hideOrShowModal(true);
        setTaskToUpdate(task);
    };

    const updateTask = (id: number, title: string, difficulty: number) => {
        const updatedTask: ITask = {id, title, difficulty};

        const updatedItems = taskList.map((task) => {
            return task.id === updatedTask.id ? updatedTask : task;
        });

        setTaskList(updatedItems);
        hideOrShowModal(false);
    };

    return (
        <>
            <main className={styles.main}>
                <div>
                    <h2>O que você vai fazer?</h2>
                    <TaskForm btnText='Criar Tarefa' taskList={taskList} setTaskList={setTaskList} />
                </div>
                <div>
                    <h2>Suas Tarefas:</h2>
                    <TaskList taskList={taskList} handleDelete={deleteTask} handleEdit={editTask}/>
                </div>
            </main>
            <Modal children={<TaskForm btnText='Editar Tarefa' taskList={taskList} task = {taskToUpdate} handleUpdate={updateTask}/>} />
        </>
    )
}

export default Main;