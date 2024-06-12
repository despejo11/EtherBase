import styles from './Header.module.scss'
import Menu from '../Menu/Menu'

import { Link } from 'react-router-dom'

import { FaTelegram } from 'react-icons/fa6'
import { BsTwitterX } from 'react-icons/bs'

export default function Header() {
  return (
    <header>
      <div className='container'>
        <div className={styles.content}>
          <Link to='/'>
            <img src='/images/other/logo.png' alt='Logo' />
          </Link>

          <div className={styles.links}>
            <Link to='/'>Home</Link>
            <Link to='/market'>Market</Link>
            <Link to='/about'>About</Link>
          </div>

          <div className={styles.icons}>
            <a href=''>
              <FaTelegram />
            </a>
            <a href=''>
              <BsTwitterX />
            </a>
          </div>

          <div className={styles.menu}>
            <Menu />
          </div>
        </div>
      </div>
    </header>
  )
}
