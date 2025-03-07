
import { Link } from "react-router";
import styles from "./App.module.scss";



function App() {

  return (
    <div className={styles.app}>
      <div className={styles.title}>
        Как я удалил лень из своей жизни
      </div>
      the shit is not ready yet

      <Link to={"/womansday"}>Вернуться обратно к 8 марта</Link>
    </div>
  )
}

export default App;
