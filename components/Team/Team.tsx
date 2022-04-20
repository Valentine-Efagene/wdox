import styles from './Team.module.css'
import MyImage from '../MyImage/MyImage'
import avatar from '../../assets/images/avatar.png'
import SideNote from '../SideNote/SideNote'

export default function Team() {
  return (
    <div className={styles.main}>
      <SideNote>Team</SideNote>
      <div className={styles.container}>
        <span className={styles.heading}>Meet the Team</span>
        <span className={styles.text}>
          The Core Team’s identity data will get entered into the same system
          that verified project’s data gets entered into. We have no control of
          the decryption keys once the verification NFT is issued.
        </span>
        <div className={styles.cards}>
          <div className={styles.teamCard}>
            <div className={styles.img}>
              <MyImage src={avatar} alt="team member" />
            </div>
            <span className={styles.name}>Genesis</span>
            <span className={styles.position}>Founder</span>
          </div>
          <div className={styles.teamCard}>
            <div className={styles.img}>
              <MyImage src={avatar} alt="team member" />
            </div>
            <span className={styles.name}>Adeshina</span>
            <span className={styles.position}>Backend Developer</span>
          </div>
          <div className={styles.teamCard}>
            <div className={styles.img}>
              <MyImage src={avatar} alt="team member" />
            </div>
            <span className={styles.name}>Gojo</span>
            <span className={styles.position}>Lead Designer</span>
          </div>
          <div className={styles.teamCard}>
            <div className={styles.img}>
              <MyImage src={avatar} alt="team member" />
            </div>
            <span className={styles.name}>Anya</span>
            <span className={styles.position}>Designer</span>
          </div>
          <div className={styles.teamCard}>
            <div className={styles.img}>
              <MyImage src={avatar} alt="team member" />
            </div>
            <span className={styles.name}>Taiwo Dada</span>
            <span className={styles.position}>SMM, UX Designer</span>
          </div>
          <div className={styles.teamCard}>
            <div className={styles.img}>
              <MyImage src={avatar} alt="team member" />
            </div>
            <span className={styles.name}>Jurjj</span>
            <span className={styles.position}>Security Auditor</span>
          </div>
          <div className={styles.teamCard}>
            <div className={styles.img}>
              <MyImage src={avatar} alt="team member" />
            </div>
            <span className={styles.name}>Valentine</span>
            <span className={styles.position}>Frontend Developer</span>
          </div>
          <div className={styles.teamCard}>
            <div className={styles.img}>
              <MyImage src={avatar} alt="team member" />
            </div>
            <span className={styles.name}>John</span>
            <span className={styles.position}>
              Solidity/Smart Contract Developer
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
