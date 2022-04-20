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
        <Button
          type="link"
          style={{
            width: 'fit-content',
            paddingRight: '20px',
            paddingLeft: '20px',
          }}
          href="whitepaper/executivesummary"
          variant="whitePaperNav"
        >
          Check Whitepaper
        </Button>
      </div>
    </div>
  )
}
