import styles from './Header.module.scss'
import Menu from '../Menu/Menu'

import { Link } from 'react-router-dom'

import { FaTelegram } from 'react-icons/fa'
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
            <Link to='/'>
              <span>H</span>ome
            </Link>
            <Link to='/market'>
              <span>M</span>arket
            </Link>
            <Link to='/about'>
              <span>A</span>bout
            </Link>
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
