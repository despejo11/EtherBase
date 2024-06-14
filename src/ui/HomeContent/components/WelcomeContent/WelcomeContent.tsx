import styles from './WelcomeContent.module.scss'

export default function WelcomeContent() {
  return (
    <div className={styles.content}>
      <div className='container'>
        <p className={styles.titlePage}>EtherBase</p>

        <div className={styles.cards}>
          <div className={styles.card}>
            <span>R</span>

            <p className={styles.title}>Real Time Data</p>
            <p className={styles.description}>
              Our platform ensures that you have access to live data that is
              updated every minute. You can get the latest trading prices,
              understand the market value of different coins, track the all-time
              high values of your favorite coins, and analyze trading volumes
              and trends to make informed decisions. With our intuitive
              interface, you can easily monitor the performance of various
              cryptocurrencies and stay ahead in the dynamic crypto market.
            </p>
          </div>

          <div className={styles.card}>
            <span>W</span>

            <p className={styles.title}>Welcome to Us</p>
            <p className={styles.description}>
              We provide you with the most accurate and up-to-date information
              on all things crypto. Whether you're a seasoned trader or just
              getting started, our platform offers real-time data on current
              prices, market caps, maximum prices, and other essential metrics
              for a wide range of cryptocurrencies. Stay informed with expert
              analyses, market trends, and the latest news, ensuring you make
              well-informed investment decisions.
            </p>
          </div>

          <div className={styles.card}>
            <span>E</span>

            <p className={styles.title}>Explore and Learn</p>
            <p className={styles.description}>
              We believe in empowering our users with knowledge. Explore
              detailed information about individual cryptocurrencies, including
              their background, technology, and market behavior. Stay updated
              with the latest news and developments in the cryptocurrency world.
              Access guides, and articles that help you understand the complex
              world of crypto trading and investment. Our platform also features
              community forums.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
