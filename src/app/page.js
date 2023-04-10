import Form from '@/components/Form'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      {/* <h2 className={styles.title}>Calcula tu promedio</h2> */}
      <Form />
    </main>
  )
}
