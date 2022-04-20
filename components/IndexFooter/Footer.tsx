import {
  faDiscord,
  faFacebook,
  faInstagram,
  faTelegram,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Button from '../Button/Button'
import styles from './Footer.module.css'
import logo from '../../assets/images/footer_logo.svg'
import MyImage from '../MyImage/MyImage'
import MobileFooterLinks from '../MobileFooterLinks/MobileFooterLinks'

export default function Footer() {
  return (
    <div className={styles.footer}>
      <span className={styles.join}>Join DAO</span>
      <Button
        style={{ borderRadius: '2px', margin: '20px' }}
        onClick={() => {
          console.log('')
        }}
        variant="primary"
      >
        Enter app
      </Button>

      <div className={styles.add}>
        <div className={styles.logoAndText}>
          <div className={styles.logo}>
            <MyImage src={logo} placeholder="empty" alt="logo" />
          </div>
        </div>
        <div className={styles.socials}>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <span className={styles.round}>
              <FontAwesomeIcon size="lg" icon={faTwitter} />
            </span>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <span className={styles.round}>
              <FontAwesomeIcon size="lg" icon={faTelegram} />
            </span>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <span className={styles.round}>
              <FontAwesomeIcon size="lg" icon={faDiscord} />
            </span>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <span className={styles.round}>
              <FontAwesomeIcon size="lg" icon={faFacebook} />
            </span>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <span className={styles.round}>
              <FontAwesomeIcon size="lg" icon={faInstagram} />
            </span>
          </a>
        </div>
      </div>
      <div className={styles.footNote}>
        2022 WDOX. All rights reserved. -- Privacy Policy - Terms of Services
      </div>
    </div>
  )
}
