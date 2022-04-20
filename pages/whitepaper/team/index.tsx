import logo from '../../../assets/images/TransparentLogo.svg'
import WithNavsAndFooter from '../../../components/WithNavsAndFooter/WithNavsAndFooter'
import WhitePaperNav from '../../../components/WhitePaperNav/WhitePaperNav'
import Button from '../../../components/Button/Button'
import MyImage from '../../../components/MyImage/MyImage'
import styles from './Team.module.css'
import SocialsIcons from '../../../components/SocialsIcons/SocialsIcons'

export default function TEAM() {
  return (
    <WithNavsAndFooter>
      <div className={styles.container}>
        <div className={styles.nav}>
          <WhitePaperNav parentRoute="/whitepaper" />
        </div>
        <div className={styles.body}>
          <div className={styles.heading}>
            <div className={styles.headingImg}>
              <MyImage src={logo} placeholder="empty" alt="Transparent Logo" />
            </div>
            <div className={styles.headingText}>
              <span>Core Team Members</span>
            </div>
          </div>
          <h2>
            The entire concept of our project is safety, anonymity, and
            accountability.
          </h2>
          <p>
            As a team, we will remain anonymous to the community until after the
            DAO has taken full control of the voting process. Some of us may
            remain anonymous even then. Our wallets will be public; the project
            wallets will be public. We are not selling anything. We have earned
            no money. We each hold equity in the company; totaling less than
            1/4th of the entire issue. Our identity documentation will go into
            the DAO’s database, and be decrypted in the same way any other
            project data can be decrypted.
          </p>
          <ul>
            <li>
              <b>Genesis:</b> - Founder; N.Y., USA - <b>Founder</b>
            </li>
            <li>
              <b>Adeshina:</b> - Backend Developer; Lagos, Nigeria -{' '}
              <b>Developer</b>
            </li>
            <li>
              <b>Valentine:</b> - Frontend Developer; Port Harcourt, Nigeria -{' '}
              <b>Developer</b>
            </li>
            <li>
              <b>Anya:</b> - Designer; Biysk, Russia - <b>Designer</b>
            </li>
            <li>
              <b>Taiwo Dada:</b> - SMM, UX Designer; Lagos, Nigeria -
              <b>UX Designer</b>
            </li>
            <li>
              <b>Taiwo Dada:</b> - SMM, UX Designer; Lagos, Nigeria -
              <b>UX Designer</b>
            </li>
            <li>
              <b>Taiwo Dada:</b> - SMM, UX Designer; Lagos, Nigeria -
              <b>UX Designer</b>
            </li>
            <li>
              <b>Jurjj:</b> - Security Auditor; Florida, USA -
              <b>Security Auditor</b>
            </li>
            <li>
              <b>Gojo:</b> - Lead Designer; Singapore -<b>Lead Designer</b>
            </li>
            <li>
              <b>Akhil:</b> - Frontend Developer; Punjab -<b>Developer</b>
            </li>
            <li>
              <b>John:</b> - Solidity/Smart Contract Developer; -
              <b>Developer</b>
            </li>
          </ul>
          <SocialsIcons size="lg" className={styles.socials} />
          <div className={styles.buttons}>
            <div>
              <Button
                type="link"
                href="nft"
                style={{ width: '100%' }}
                variant="whitePaperNav"
              >
                Previous
              </Button>
            </div>
          </div>
        </div>
      </div>
    </WithNavsAndFooter>
  )
}
