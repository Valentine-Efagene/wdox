import dao from '../../../assets/images/daoicon.svg'
import WithNavsAndFooter from '../../../components/WithNavsAndFooter/WithNavsAndFooter'
import WhitePaperNav from '../../../components/WhitePaperNav/WhitePaperNav'
import Button from '../../../components/Button/Button'
import MyImage from '../../../components/MyImage/MyImage'
import styles from './dao.module.css'

export default function DAO() {
  return (
    <WithNavsAndFooter>
      <div className={styles.container}>
        <div className={styles.nav}>
          <WhitePaperNav parentRoute="/whitepaper" />
        </div>
        <div className={styles.body}>
          <div className={styles.heading}>
            <div className={styles.headingImg}>
              <MyImage src={dao} placeholder="empty" alt="Transparent Logo" />
            </div>
            <div className={styles.headingText}>
              <span>DAO</span>
            </div>
          </div>
          <h2>Introduction</h2>
          <p>
            WDOX DAO exists to keep the developers, and their projects, safe
            from public scrutiny and/or harassment. More importantly, it exists
            to keep the public safe from bad actors within Web3. The purpose of
            the DAO is to govern the project, and its decisions. This is too
            much power for any one person, or even a small group, for that
            matter. This project is most effective if it’s being governed by the
            individuals within the Web3 community. This does not mean that only
            experienced traders, or “blue-chip” NFT holders will be included;
            everyone locking their WDOX tokens will have an equal chance to be
            heard. We are, after all, assigning voting weight based on total
            tokens held, and the amount of time those tokens are locked up.
            Voting weight will be represented within the DAO as vWDOX.
          </p>
          <h2>Proposals</h2>
          <p>
            Anyone can put forward a proposal. The voting towards that proposal
            can only be done by those with locked $WDOX tokens.
          </p>
          <h2>Votes Needed to Pass a Measure</h2>
          <ul>
            <li>30% of the DAO must be active during any one vote.</li>
            <li>
              51% of the vote must be reached before any “Yes” or “No” votes can
              be decided.
            </li>
            <li>
              In the event there is ever a vote with an exact “Yes” / “No”
              distribution
            </li>
          </ul>
          <p>
            (50-50 vote); a second vote will be held with the same proposal;
            then a third, fourth, ad infinitum... until a decision is reached.
          </p>
          <h2>Website/Health Status</h2>
          <p>
            Our website will catalogue all Web3 projects. For now, this will be
            done via a team of investigators from within the community, but in
            the future, bots, artificial intelligence systems, and human
            verification will do it. Community members will be allowed to
            search, research, and vote on the “Health” of any project indexed by
            us. We will use the community vote along with three other factors:
            Verified/Not Verified, Age of Project, and Roadmap Completion - to
            assign the “Health” rating to each project.
          </p>
          <ul>
            <li>
              Catalogue all Web3 projects across the top-five chains; Ethereum
              will be our starting point for verification, but all will be
              indexed.
            </li>
            <li>
              Gather, categorize, and make usable a large amount of Web3 data.
              The controller will be our DAO, and votes will be held on what to
              do with that data.
            </li>
            <li>
              Provide the community with an opportunity to arbitrage
              NFT/cryptocurrency by pulling price data from the top-two NFT
              marketplaces, and the top-five exchanges, respectively, for any
              one project.
            </li>
            <li>
              Illustrate verified projects on their profile page within our
              website; provide the correct links, contract, and addresses to
              help avoid users from being scammed.
            </li>
          </ul>
          <div className={styles.buttons}>
            <div className={styles.previousButton}>
              <Button type="link" href="wdox" variant="whitePaperNav">
                Previous
              </Button>
            </div>
            <div className={styles.nextButton}>
              <Button type="link" href="nft" variant="whitePaperNav">
                Next
              </Button>
            </div>
          </div>
        </div>
      </div>
    </WithNavsAndFooter>
  )
}
