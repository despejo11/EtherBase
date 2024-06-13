import styles from './ErrorContent.module.scss'

export default function ErrorContent() {
  return (
    <div className={styles.content}>
      <p className={styles.title}>four hundred and four</p>

      <div className={styles.titled}>
        <p className={styles.description}>Oh no, you look lost!</p>
        <p className={styles.errorNumber}>404</p>
      </div>
    </div>
  )
}
