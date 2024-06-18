import styles from './MarketContent.module.scss'
import Stripe from '../../components/Stripe/Stripe'
import CoinData from './components/CoinData/CoinData'

export default function MarketContent() {
  return (
    <>
      <div className={styles.content}>
        <div className='container'>
          <p className={styles.titlePage}>Market</p>
        </div>

        <Stripe title='Here' titled="Here's what you're interested in" />
      </div>

      <div className={styles.market}>
        <Stripe title='Scroll Down' titled='Just a little bit more' />

        <CoinData />

        <Stripe title='Help' titled='We hope we helped you in some way' />
      </div>
    </>
  )
}
