import React from 'react'
import Button from '../Button/Button'
import SideNote from '../SideNote/SideNote'
import styles from './HomeWhitePaper.module.css'

export default function HomeWhitePaper() {
  return (
    <div className={styles.main}>
      <SideNote>WHITEPAPER</SideNote>
      <div className={styles.whitepaper}>
        <h2>White Paper</h2>
        <div
          style={{
            width: 'fit-content',
            paddingLeft: '20px',
            paddingRight: '20px',
          }}
        >
          <Button
            variant="primary"
            type="link"
            href="status"
            //variant="whitePaperNav"
            onClick={() => {
              console.log('')
            }}
          >
            Check Whitepaper
          </Button>
        </div>
      </div>
    </div>
  )
}
