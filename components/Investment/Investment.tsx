import styles from './Investment.module.css'
import MyImage from '../MyImage/MyImage'
import src from '../../assets/images/investment.svg'
import SideNote from '../SideNote/SideNote'

import React from 'react'
import Button from '../Button/Button'

export default function VerificationProcess() {
  return (
    <div className={styles.main}>
      <SideNote>INVESTMENTS</SideNote>
      <div className={styles.container}>
        <div className={styles.text}>
          <p>
            If you knew that you wouldn’t be rugged, Wouldn’t you invest in more
            projects?
          </p>
          <div className={styles.button}>
            <Button type="link" style={{ width: '100%' }}>
              Learn More
            </Button>
          </div>
        </div>
        <div className={styles.img}>
          <MyImage alt="image" placeholder="empty" src={src} />
        </div>
      </div>
    </div>
  )
}
