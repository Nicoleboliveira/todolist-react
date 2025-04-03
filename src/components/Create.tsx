import { PlusCircle } from "@phosphor-icons/react";
import styles from "./Create.module.css"

export function Create() {
    return (
        <div className={styles.create}>
            <input className={styles.input} type="text" placeholder="Adicione uma nova tarefa" />

            <button className={styles.button} type="submit">
                Criar
                <PlusCircle size={16} weight="bold"/>
            </button>
        </div>
    );
}