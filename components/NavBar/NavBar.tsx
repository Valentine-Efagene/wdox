import { useState } from 'react'
import styles from './NavBar.module.css'
import ActiveLink from '../ActiveLink/ActiveLink'
import MyImage from '../MyImage/MyImage'
import placeholder from '../../assets/images/dp.png'
import logo from '../../assets/images/footer_logo.svg'
// import LocaleChooser from '../LocaleChooser/LocaleChooser'

import dynamic from 'next/dynamic'
const LocaleChooser = dynamic(() => import('../LocaleChooser/LocaleChooser'), {
  ssr: false,
})

export default function NavBar() {
  const [avatar, setAvatar] = useState(placeholder)

  return (
    <div className={styles.menu}>
      <div className={styles.wrapper}>
        <ActiveLink href="/">
          <div className={styles.logo}>
            <MyImage src={logo} placeholder="empty" alt="logo" />
          </div>
        </ActiveLink>
        <ActiveLink href="/">Home</ActiveLink>
        <ActiveLink href="/helfcenter">How It Works</ActiveLink>
        <ActiveLink href="/achievements">Achievements</ActiveLink>
        <ActiveLink href="/verification">Verification</ActiveLink>
        <ActiveLink href="/education">Education</ActiveLink>
        <ActiveLink href="whitepaper/executivesummary">White Paper</ActiveLink>
        <ActiveLink href="/presale">Presale</ActiveLink>
        <LocaleChooser />
        <ActiveLink href="/#">
          <div className={styles.avatar}>
            <MyImage src={avatar} alt="avatar" />
          </div>
        </ActiveLink>
      </div>
    </div>
  )
}
