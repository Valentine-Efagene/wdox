import styles from './Verification.module.css'
import GetVerified from '../GetVerified/GetVerified'
import SideNote from '../SideNote/SideNote'

export default function VerificationProcess() {
  return (
    <div className={styles.main}>
      <SideNote>VERIFICATION</SideNote>
      <div className={styles.container}>
        <GetVerified />
        {/* <div className={styles.process}>
          <p>Verification Process</p>
          <div className={styles.int}>
            <div className={styles.icon}>
              <VerifiedUserIcon fontSize="large" />
            </div>
            <p>Apply for Verification</p>
          </div>
          <div className={styles.int}>
            <div className={styles.icon}>
              <VerifiedUserIcon fontSize="large" />
            </div>
            <p>Encrypt All Data</p>
          </div>
          <div className={styles.int}>
            <div className={styles.icon}>
              <VerifiedUserIcon fontSize="large" />
            </div>
            <p>Issue Verification NFT</p>
          </div>
        </div> */}
      </div>
    </div>
  )
}
