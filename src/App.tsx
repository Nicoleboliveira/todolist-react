import { useState } from "react";
import { Header } from "./components/Header";
import { Create } from "./components/Create";
import { List } from "./components/List";

import "./global.css";
import styles from "./App.module.css";

// Definindo a interface para cada tarefa.
// Isso ajuda o TypeScript a saber quais propriedades cada objeto tarefa terá.
export interface Task {
  id: number;
  text: string;
  completed: boolean;
}

export function App() {
  // Estado das tarefas: inicia com um array vazio.
  // 'tasks' guarda a lista atual e 'setTasks' é a função para atualizar essa lista.
  const [tasks, setTasks] = useState<Task[]>([]);

  // Função para adicionar uma nova tarefa.
  // Gera um novo objeto de tarefa e o adiciona ao array.
  function addTask(text: string) {
    const newTask = { id: Date.now(), text, completed: false };
    setTasks([...tasks, newTask]);
  }

  // Função para alternar o status de conclusão de uma tarefa.
  // Mapeia as tarefas e, se o id bater, inverte o valor de 'completed'.
  function toggleTaskCompletion(id: number) {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }

  // Função para excluir uma tarefa.
  // Filtra o array removendo a tarefa que tem o id correspondente.
  function deleteTask(id: number) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  // Renderiza os componentes e passa as funções e dados como props.
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Create addTask={addTask} />
        <List
          tasks={tasks}
          toggleTaskCompletion={toggleTaskCompletion}
          deleteTask={deleteTask}
        />
      </div>
    </div>
  );
}
