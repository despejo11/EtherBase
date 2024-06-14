import styles from './ErrorContent.module.scss'
import Stripe from '../../components/Stripe/Stripe'

export default function ErrorContent() {
  return (
    <div className={styles.content}>
      <div className='container'>
        <p className={styles.error}>four hundred and four</p>
      </div>

      <Stripe title='404' titled='Oh no, you look lost' />
    </div>
  )
}
