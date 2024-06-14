import styles from './AboutContent.module.scss'
import Stripe from '../../components/Stripe/Stripe'

export default function AboutContent() {
  return (
    <div className={styles.content}>
      <div className='container'>
        <p className={styles.titlePage}>About</p>

        <div className={styles.cards}>
          <div className={styles.card}>
            <span>M</span>

            <p className={styles.title}>Our Mission</p>
            <p className={styles.description}>
              At EtherBase, our mission is to provide accurate, real-time
              cryptocurrency information to help users make informed decisions.
              We believe in the revolutionary power of blockchain technology and
              aim to make the world of cryptocurrencies more accessible to
              everyone. Whether you are a seasoned investor or a curious
              beginner, our platform offers up-to-date prices, market trends,
              and comprehensive data to keep you informed.
            </p>
          </div>

          <div className={styles.card}>
            <span>S</span>

            <p className={styles.title}>Our Story</p>
            <p className={styles.description}>
              Founded in 2024, EtherBase was born out of a passion for
              innovation and a desire to demystify the world of digital
              currencies. Led by our dedicated founder, we work tirelessly to
              ensure that our data is reliable and easy to understand. What
              began as a visionary project has quickly grown into a trusted
              source for cryptocurrency information. As the industry evolves, we
              remain committed to providing the highest quality of service and
              keeping our users at the forefront of the cryptocurrency
              revolution.
            </p>
          </div>
        </div>
      </div>

      <Stripe title='Quality' titled='We are a reliable' />
    </div>
  )
}
