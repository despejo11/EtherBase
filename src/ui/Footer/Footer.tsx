import styles from './Footer.module.scss'
import Stripe from '../../components/Stripe/Stripe'

import { Link } from 'react-router-dom'

import { FaTelegram, FaArrowUp } from 'react-icons/fa'
import { BsTwitterX } from 'react-icons/bs'

import gsap from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
gsap.registerPlugin(ScrollToPlugin)

export default function Footer() {
  const scrollToTop = () => {
    gsap.to(window, { duration: 1.7, scrollTo: { y: 0 }, ease: 'expo.inOut' })
  }

  return (
    <footer>
      <Stripe title='Footer' titled='You got to the end' />

      <div className='container'>
        <div className={styles.content}>
          <span className={styles.letter}>C</span>

          <img src='/images/other/logo.png' alt='Logo' />

          <div className={styles.icons}>
            <a href=''>
              <FaTelegram />
            </a>
            <a href=''>
              <BsTwitterX />
            </a>
          </div>
        </div>

        <div className={styles.scrollToTop}>
          <button onClick={scrollToTop}>
            <FaArrowUp />
          </button>
        </div>

        <div className={styles.privacy}>
          <span className={styles.letter}>P</span>
          <p>
            © {new Date().getFullYear()} EtherBase, Inc. All rights reserved.{' '}
            <Link to='/privacy'>Privacy Policy</Link>.{' '}
            <Link to='/terms'> Terms of Use</Link>.
          </p>
        </div>
      </div>
    </footer>
  )
}
