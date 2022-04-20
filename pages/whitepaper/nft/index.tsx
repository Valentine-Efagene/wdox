import WithNavsAndFooter from '../../../components/WithNavsAndFooter/WithNavsAndFooter'
import WhitePaperNav from '../../../components/WhitePaperNav/WhitePaperNav'
import Button from '../../../components/Button/Button'
import MyImage from '../../../components/MyImage/MyImage'
import nft from '../../../assets/images/nfticon.svg'
import dex from '../../../assets/images/dexicon.svg'
import styles from './Nft.module.css'

export default function NFT() {
  return (
    <WithNavsAndFooter>
      <div className={styles.container}>
        <div className={styles.nav}>
          <WhitePaperNav parentRoute="/whitepaper" />
        </div>
        <div className={styles.body}>
          <div className={styles.heading}>
            <div className={styles.headingImg}>
              <MyImage src={nft} placeholder="empty" alt="Transparent Logo" />
            </div>
            <div className={styles.headingText}>
              <span>NFT</span>
            </div>
          </div>
          <p>
            The NFT is a non-transferable token to signify a projects’
            verification through WDOX. It will not be available publicly. It
            will be minted on a one by one basis. It must be minted by the
            verified project’s main wallet. It will be similar to a QR-Code in
            that it can be scanned for immediate assurance of safety or
            accountability for that specific project. The visual design of the
            NFT will vary according to the project applying for verification,
            but will coincide with the logo or design elements for that project.
          </p>
          <div className={styles.heading}>
            <div className={styles.headingImg}>
              <MyImage src={dex} placeholder="empty" alt="Transparent Logo" />
            </div>
            <div className={styles.headingText}>
              <span>Dex</span>
              <span> (Coming Soon) </span>
            </div>
          </div>
          <p>
            The DEX is being created to give the community a low-fee option for
            swapping their $WDOX tokens. We are going to use the fees generated
            from verification to inject liquidity into our own pair pools, and
            thereby lower slippage, reducing the swap costs.
          </p>
          <p>
            The fees generated from developers / projects requesting
            verification from <b>WDOX</b> will be paid to WDOX DAO in any of the
            following tokens: <b>$USDT</b>; <b>$USDC</b>; <b>$DAI</b>;{' '}
            <b>$ETH</b>; <b>$WBTC</b>, and <b>$WDOX</b> (Using the native token
            to pay the fee will provide the developers with a cheaper option.)
          </p>
          <p>
            The fee itself will vary depending on the scope of the project
            requesting verification, as will the time required to complete that
            verification. We will absolutely take into account deadlines and
            emergencies; getting safe projects to the community is our number
            one priority. Emergency verification should be done on the WDOX DAO
            website, and a message should be dropped into the Discord’s
            #Verification channel. In the event you aren’t getting a quick
            enough response, you may message us in Telegram.
          </p>
          <div className={styles.heading}>
            <div className={styles.headingImg}>
              <MyImage src={nft} placeholder="empty" alt="Transparent Logo" />
            </div>
            <div className={styles.headingText}>
              <span>Market Place</span>
              <span> (Coming Soon) </span>
            </div>
          </div>
          <p>
            This leads us to our marketplace. We’ve got the data of
            tens-of-thousands of Web3 projects at our disposal already. We’re
            going to allow projects to list their NFTs on our marketplace at
            impossibly low fees as long as they’re verified. If a project
            applies to list, and isn’t verified, they will be denied. We will
            not allow any possible “scam projects” to trade on our platform. The
            verification is the barrier to entry that Web3 so badly needs. We
            hope this will launch towards the end of 2022, or even as late as Q2
            2023.
          </p>
          <div className={styles.buttons}>
            <div className={styles.previousButton}>
              <Button type="link" href="dao" variant="whitePaperNav">
                Previous
              </Button>
            </div>
            <div className={styles.nextButton}>
              <Button type="link" href="team" variant="whitePaperNav">
                Next
              </Button>
            </div>
          </div>
        </div>
      </div>
    </WithNavsAndFooter>
  )
}
