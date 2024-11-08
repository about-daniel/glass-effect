import dynamic from "next/dynamic";
import styles from "./page.module.scss";

const Scene = dynamic(() => import("@/components/Scene"), {
  ssr: false,
});
export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.webglWrapper}>
        <Scene />
      </div>
    </main>
  );
}
