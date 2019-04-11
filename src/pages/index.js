import styles from './index.css';


export default function() {
  return (
    <div className={styles.normal}>
      <ul className={styles.list}>
        <h1 style={{color:"blue"}}>Add some code,...</h1>
        <li>To get started, edit <code>src/pages/index.js</code> and save to reload.</li>
        <li>
          <a href="https://umijs.org/guide/getting-started.html">
            Getting Started
          </a>
        </li>
      </ul>
    </div>
  );
}
