import { useState } from "react";
import { PlusCircle } from "@phosphor-icons/react";
import styles from "./Create.module.css";

interface CreateProps {
  addTask: (text: string) => void;
}

export function Create({ addTask }: CreateProps) {
  const [inputText, setInputText] = useState("");

  function handleCreateTask() {
    if (inputText.trim() === "") return;
    addTask(inputText);
    setInputText("");
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter") {
      handleCreateTask();
    }
  }

  return (
    <div className={styles.create}>
      <input
        className={styles.input}
        type="text"
        placeholder="Adicione uma nova tarefa"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        onKeyDown={handleKeyDown}
      />

      <button
        className={styles.button}
        type="button"
        onClick={handleCreateTask}
      >
        Criar
        <PlusCircle size={16} weight="bold" />
      </button>
    </div>
  );
}
