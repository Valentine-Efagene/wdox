import React from 'react'
import SideNote from '../SideNote/SideNote'
import styles from './EcoSystem.module.css'
import DAO from '../../assets/images/DAO.svg'
import NFT from '../../assets/images/NFT_.png'
import WDOX from '../../assets/images/WDOX.svg'
import InvestmentsCard from '../InvestmentsCard/InvestmentsCard'

export default function EcoSystem() {
  return (
    <div className={styles.main}>
      <SideNote>Ecosystem</SideNote>
      <div className={styles.body}>
        <div className={styles.title}>The WDOX DAO Ecosystem</div>
        <InvestmentsCard
          button={{ text: 'Join DAO', url: '' }}
          text="Decentralized regulation lives and dies with the DAO. The DAO is the nerve center of the project."
          title="DAO"
          img={DAO}
        />
        <InvestmentsCard
          button={{ text: 'Join DAO', url: '' }}
          text="Locking $WDOX is the access point to the DAO, and $sWDOX for staking. Trading fees are shared with through staking to encourage DAO participation, and better guard the community."
          title="$WDOX"
          img={WDOX}
        />
        <InvestmentsCard
          button={{ text: 'Join DAO', url: '' }}
          text="The NFT is a security token. It’s meant to show communities that the projects’ their invested in are safe, and authentic. Only verified projects will be allowed to mint one, non-transferable, NFT."
          title="NFT"
          img={NFT}
        />
      </div>
    </div>
  )
}
