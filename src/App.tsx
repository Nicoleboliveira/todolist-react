import { Header } from "./components/Header"
import { Create } from "./components/Create"
import { List } from "./components/list";

import './global.css'
import styles from "./App.module.css";



export function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Create />
        <List />
      </div>
     
    </div>
  )
}


