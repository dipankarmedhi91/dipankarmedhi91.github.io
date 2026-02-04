import styles from "./page.module.css";

import About from "@/components/about/About";

export default function Home() {
  return (
    <main className={styles.main}>
      <About />
    </main>
  );
}
