import styles from './HomeContent.module.scss'
import WelcomeContent from './components/WelcomeContent/WelcomeContent'
import Stripe from '../../components/Stripe/Stripe'

export default function HomeContent() {
  return (
    <div className={styles.content}>
      <WelcomeContent />
      <Stripe title='The Best' titled='You came to the best' />
    </div>
  )
}
