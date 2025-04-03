import { Trash } from "@phosphor-icons/react";
import styles from "./List.module.css";

export function List() {
  return (
    <div className={styles.list}>
      <div className={styles.information}>
        <div className={styles.block1}>
          <p>Tarefas criadas</p>
          <strong>5</strong>
        </div>
        <div className={styles.block2}>
          <p>Concluídas</p>
          <strong>2 de 5</strong>
        </div>
      </div>

      <div className={styles.containerList}>
        <div>
          <input type="checkbox" />
          <p>
            Integer urna interdum massa libero auctor neque turpis turpis
            semper. Duis vel sed fames integer.
          </p>
          <Trash />
        </div>
      </div>
    </div>
  );
}
