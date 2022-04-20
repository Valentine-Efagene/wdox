import { useRouter } from 'next/router'
import styles from './WhitePaperActiveLink.module.css'
import MyImage from '../MyImage/MyImage'
import book from '../../assets/images/book.svg'

interface IActiveLinkProps {
  text: string
  href: string
  //icon?: ReactChild | ReactChild[] | ReactChildren | JSX.Element
  shallow?: boolean
}

function WhitePaperActiveLink({ text, href, shallow }: IActiveLinkProps) {
  const router = useRouter()

  return (
    <a
      href={href}
      onClick={(event) => {
        event.preventDefault()
        router.push(href, undefined, { shallow })
      }}
      className={`${styles.navLink} ${
        router?.asPath === href ? styles.activeLink : ''
      }`}
    >
      <div className={styles.icon}>
        <MyImage alt="book" placeholder="empty" src={book} />
      </div>
      <div className={styles.text}>{text}</div>
    </a>
  )
}

WhitePaperActiveLink.defaultProps = {
  shallow: false,
  icon: '',
}

export default WhitePaperActiveLink
