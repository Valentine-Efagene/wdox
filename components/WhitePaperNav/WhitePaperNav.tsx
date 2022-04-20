import styles from './WhitePaperNav.module.css'
import WhitePaperActiveLink from '../WhitePaperActiveLink/WhitePaperActiveLink'

interface IProps {
  parentRoute: string
}

export default function WhitePaperNav({ parentRoute }: IProps) {
  return (
    <div className={styles.main}>
      <WhitePaperActiveLink
        href={`${parentRoute}/executivesummary`}
        text="Introducing WDOX DAO"
      />
      <WhitePaperActiveLink
        href={`${parentRoute}/background`}
        text="Background"
      />
      <WhitePaperActiveLink
        href={`${parentRoute}/environment`}
        text="WDOX Environment"
      />
      <WhitePaperActiveLink href={`${parentRoute}/wdox`} text="$WDOX" />
      <WhitePaperActiveLink href={`${parentRoute}/dao`} text="DAO" />
      <WhitePaperActiveLink href={`${parentRoute}/nft`} text="NFT" />
      <WhitePaperActiveLink href={`${parentRoute}/nft`} text="DEX" />
      <WhitePaperActiveLink href={`${parentRoute}/team`} text="Team" />
      <WhitePaperActiveLink href={`${parentRoute}/i`} text="Links" />
    </div>
  )
}
