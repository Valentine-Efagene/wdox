import FrequentlyAskedCard from '../FrequentlyAskedCard/FrequentlyAskedCard'
import styles from './FrequentlyAsked.module.css'
import ChatBubbleIcon from '@mui/icons-material/ChatBubble'
import Button from '../Button/Button'

export default function FrequentlyAsked() {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div>
          <p>FAQ</p>
          <div className={styles.heading}>Help Center</div>
          <p>Everything you need to know about WDOX.</p>
          <div className={styles.heading}>Frequently Asked Questions</div>
        </div>
        <FrequentlyAskedCard
          title="How to Apply for Pre-Sale."
          href="/#"
          details="Pre-Sale IDO Whitelist is open for early liquidity providers"
        />
        <FrequentlyAskedCard
          title="How to Apply for Pre-Sale."
          href="/#"
          details="Pre-Sale IDO Whitelist is open for early liquidity providers"
        />
        <FrequentlyAskedCard
          title="How to Apply for Pre-Sale."
          href="/#"
          details="Pre-Sale IDO Whitelist is open for early liquidity providers"
        />
        <FrequentlyAskedCard
          title="How to Apply for Pre-Sale."
          href="/#"
          details="Pre-Sale IDO Whitelist is open for early liquidity providers"
        />
        <div className={styles.questions}>
          <ChatBubbleIcon
            sx={{ color: 'white', width: '100px', height: '100px' }}
          />
          <div className={styles.bold}>Do you have more questions?</div>
          <div>Links to discord, etc?</div>
          <Button className={styles.button} variant="primary">
            Ask us a Question
          </Button>
        </div>
      </div>
    </div>
  )
}
