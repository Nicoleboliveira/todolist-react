import { Trash, ClipboardText } from "@phosphor-icons/react";
import styles from "./List.module.css";
import { Task } from "../App";

interface ListProps {
  tasks: Task[];
  toggleTaskCompletion: (id: number) => void;
  deleteTask: (id: number) => void;
}

export function List({ tasks, toggleTaskCompletion, deleteTask }: ListProps) {
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.completed).length;

  const hasTasks = tasks.length > 0;

  return (
    <div className={styles.list}>
      <div className={styles.information}>
        <div className={styles.block1}>
          <p>Tarefas criadas</p>
          <strong>{totalTasks}</strong>
        </div>
        <div className={styles.block2}>
          <p>Concluídas</p>
          <strong>
            {completedTasks} de {totalTasks}
          </strong>
        </div>
      </div>

      {hasTasks ? (
        <div className={styles.containerList}>
          {tasks.map((task) => (
            <div key={task.id} className={styles.task}>
              <div className={styles.taskContent}>
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleTaskCompletion(task.id)}
                  className={styles.checkbox}
                />
                <p className={task.completed ? styles.completed : ""}>
                  {task.text}
                </p>
              </div>

              <button
                onClick={() => deleteTask(task.id)}
                className={styles.trashButton}
              >
                <Trash className={styles.trashIcon} size={20} weight="light" />
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className={styles.empty}>
          <ClipboardText size={56} />
          <p>
            <strong>Você ainda não tem tarefas cadastradas</strong>
            <br />
            Crie tarefas e organize seus itens a fazer
          </p>
        </div>
      )}
    </div>
  );
}
