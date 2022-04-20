import Button from '../Button/Button'
import styles from './GetVerified.module.css'

export default function GetVerified() {
  return (
    <div className={styles.main}>
      <h1 className={styles.title}>Want to Get Verified?</h1>
      <Button
        onClick={() => {
          console.log('')
        }}
      >
        Get Verified
      </Button>
    </div>
  )
}
