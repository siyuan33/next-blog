import Head from "next/head"
import styles from "styles/Home.module.scss"
import Link from "next/link"

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <Link href="/post/artical">
          <a>Artical—1</a>
        </Link>
      </h1>
    </div>
  )
}
