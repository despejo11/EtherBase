import styles from './Stripe.module.scss'

type TStripeContent = {
  title: string
  titled: string
}

export default function Stripe({ title, titled }: TStripeContent) {
  return (
    <div className={styles.content}>
      <div className='container'>
        <p className={styles.title}>{title}</p>
        <p className={styles.titled}>{titled}</p>
      </div>
    </div>
  )
}
