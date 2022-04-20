import { Button } from '@mui/material'
import Image, { StaticImageData } from 'next/image'
import MyImage from '../MyImage/MyImage'
import styles from './InvestmentsCard.module.css'
import ImageBackground from '../ImageBackground/ImageBackground'

interface IProps {
  img: StaticImageData
  title: string
  text: string
  button: { text: string; url: string }
}

export default function InvestmentsCard({ img, title, text, button }: IProps) {
  return (
    <div className={styles.card}>
      <div className={styles.body}>
        <div className={styles.title}>{title}</div>
        <div className={styles.text}>{text}</div>
        <div className={styles.button}>
          <Button
            variant="contained"
            href=""
            sx={{ width: '100%', height: '100%', borderRadius: 0 }}
          >
            {button.text}
          </Button>
        </div>
      </div>
      <div className={styles.img}>
        <MyImage alt="image" placeholder="empty" src={img} />
      </div>
    </div>
  )
}
