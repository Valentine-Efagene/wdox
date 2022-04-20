import {
  faDiscord,
  faFacebook,
  faMedium,
  faInstagram,
  faTelegram,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'
import { SizeProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './SocialsIcons.module.css'

interface IProps {
  size?: SizeProp | undefined
  style?: { [key: string]: string }
  className?: string
}

export default function SocialsIcons({ size, className, style }: IProps) {
  return (
    <div className={`${styles.socials} ${className}`} style={style}>
      <a
        href="https://twitter.com/WDOXDAO"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className={styles.round}>
          <FontAwesomeIcon size={size} icon={faTwitter} />
        </span>
      </a>
      <a href="https://t.me/WDOXDAO" target="_blank" rel="noopener noreferrer">
        <span className={styles.round}>
          <FontAwesomeIcon size={size} icon={faTelegram} />
        </span>
      </a>
      <a
        href="https://discord.gg/WGzZAvsc"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className={styles.round}>
          <FontAwesomeIcon size={size} icon={faDiscord} />
        </span>
      </a>
      <a
        href="https://wdoxdao.medium.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className={styles.round}>
          <FontAwesomeIcon size={size} icon={faMedium} />
        </span>
      </a>
    </div>
  )
}

SocialsIcons.defaultProps = {
  size: 'lg',
  style: {},
  className: '',
}
