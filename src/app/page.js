import styles from "./page.module.css";
import MovieSearch from "./components/MovieSearch/MovieSearch";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <MovieSearch />
      </main>
    </div>
  );
}
