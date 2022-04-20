import { useEffect, useState } from 'react'
import Button from '../../components/Button/Button'
import WithNavsAndFooter from '../../components/WithNavsAndFooter/WithNavsAndFooter'
import styles from './Doodles.module.css'
import VerifiedIcon from '../../assets/images/verfied.png'
import nft from '../../assets/images/nft.png'
import Image, { StaticImageData } from 'next/image'
import MyImage from '../../components/MyImage/MyImage'
import discordIcon from '../../assets/images/discord.png'
import twitterIcon from '../../assets/images/twitter.png'
/*import telegramIcon from '../../assets/images/telegram.png'
import githubIcon from '../../assets/images/github.png'
import unselectedCopyIcon from '../../assets/images/unselected-copy-icon.png'
*/
import mediumIcon from '../../assets/images/medium.png'
import doodlesLogoIcon from '../../assets/images/doodles_logo.png'
import solanaLogo from '../../assets/images/solana-sol-logo.png'
import selectedCopyIcon from '../../assets/images/selected-copy-icon.png'
import { useAppSelector } from '../../redux/hooks'
import { hydrate } from '../../redux/slice/projectSlice'
import { useAppDispatch } from '../../redux/store'

export default function Doodles() {
  const _project = useAppSelector((state) => state.project.active)
  const project = useAppSelector((state) => state.project.hydratedActive)
  const {
    opensea,
    looksrare,
    health,
    contract_address,
    about,
    discord,
    medium,
    twitter,
    imageUrl,
    //website,
    total_nfts,
  } = project
  const dispatch = useAppDispatch()

  async function init() {
    if (_project) {
      await dispatch(hydrate(_project)).unwrap()
    }
  }

  useEffect(() => {
    init()
  }, [])

  interface ISocialImageProps {
    socialIcon: StaticImageData
    link: string
  }

  function SocialImage({ socialIcon, link }: ISocialImageProps) {
    return (
      <div>
        <a
          href={link}
          onClick={(event) => {
            event.preventDefault()
            //router.push(href, undefined, { shallow })
          }}
        >
          <MyImage
            src={socialIcon}
            placeholder="empty"
            className={styles.socialIcon}
            alt="verification icon"
            height="36"
            width="36"
          />
        </a>
      </div>
    )
  }

  interface ICardValuesProps {
    title: string
    value: string | number
  }
  function CardValues({ title, value }: ICardValuesProps) {
    return (
      <div className={styles.cardValues}>
        <div>
          <p className={styles.cardTitle}>{title}</p>
        </div>
        <div>
          <p className={styles.cardValueText}>{value}</p>
        </div>
      </div>
    )
  }

  interface IContractAddressesProps {
    title: string
    address: string | null
  }

  function ContractAddresses({ address, title }: IContractAddressesProps) {
    return (
      <div className={styles.contractDetailWrapper}>
        <h4>{title}</h4>
        <div className={styles.addressWrapper}>
          <p className={styles.addressText}>{address}</p>
          <div
            style={{ marginLeft: '10px' }}
            onClick={() => {
              navigator.clipboard.writeText(address ? address : '')
            }}
            className={styles.copyIconWrapper}
          >
            <MyImage
              src={
                selectedCopyIcon //unselectedCopyIcon
              }
              alt="verification icon"
              height="18"
              width="15"
              placeholder="empty"
              className={styles.copyIcon}
            />
          </div>
        </div>
      </div>
    )
  }
  return (
    <WithNavsAndFooter>
      <div className={styles.main}>
        <div className={styles.topSectionWrapper}>
          <div className={styles.titleWrapper}>
            <div className={styles.title}>
              <div>
                <h1>Doodles NFT</h1>
              </div>
              <div className={styles.verificationIcon}>
                <MyImage
                  src={VerifiedIcon}
                  alt="verification icon"
                  placeholder="empty"
                />
              </div>
            </div>
            <div className={styles.titleDesc}>
              <p>Created by the Doodles Founders </p>
            </div>
          </div>

          <div className={styles.doodleLogoWrapper}>
            <MyImage
              src={doodlesLogoIcon}
              alt="verification icon"
              height="36"
              width="36"
              className={styles.doodlesLogo}
              placeholder="empty"
            />
          </div>
        </div>

        <div className={styles.logoHandleWraper}>
          <div className={styles.socialMediaLogo}>
            <SocialImage link={medium} socialIcon={mediumIcon} />
            <SocialImage
              link={discord ? discord : ''}
              socialIcon={discordIcon}
            />
            <SocialImage
              link={twitter ? twitter : ''}
              socialIcon={twitterIcon}
            />
            {/* <SocialImage link={telegram} socialIcon={telegramIcon} />
            <SocialImage link={github} socialIcon={githubIcon} /> */}
          </div>
        </div>

        <div className={styles.middleSectionCard}>
          <div className={styles.cardValues}>
            <div>
              <p className={styles.cardTitle}>Blockchain</p>
            </div>
            <div className={styles.cardValue}>
              <MyImage
                src={solanaLogo}
                className={styles.blockchainIcon}
                alt="verification icon"
                height="26"
                width="26"
                placeholder="empty"
              />
              <p className={styles.blockchainText}>Solana</p>
            </div>
          </div>

          <CardValues title="Collection #" value={total_nfts} />
          <CardValues title="Owners" value="9999" />
          <CardValues
            title="Floor Price - OpenSea"
            value={`${opensea?.floor_price} ETH`}
          />
          <CardValues
            title="Floor Price - LooksRare"
            value={`${looksrare?.floorPrice} ETH`}
          />
          <CardValues title="WDOX Health score" value={health} />
        </div>

        <div className={styles.nftCardsWrapper}>
          {/* {imageUrl && (
            <Image
              src={imageUrl}
              placeholder="empty"
              width={100}
              height={100}
              alt="grid"
              className={styles.nftIcon}
            />
          )} */}
          <MyImage
            src={nft}
            placeholder="empty"
            alt="grid"
            className={styles.nftIcon}
          />
          <MyImage
            src={nft}
            placeholder="empty"
            alt="grid"
            className={styles.nftIcon}
          />
          <MyImage
            src={nft}
            placeholder="empty"
            alt="grid"
            className={styles.nftIcon}
          />
          <MyImage
            src={nft}
            placeholder="empty"
            alt="grid"
            className={styles.nftIcon}
          />
          <MyImage
            src={nft}
            placeholder="empty"
            alt="grid"
            className={styles.nftIcon}
          />
          <MyImage
            src={nft}
            placeholder="empty"
            alt="grid"
            className={styles.nftIcon}
          />
          <MyImage
            src={nft}
            placeholder="empty"
            alt="grid"
            className={styles.nftIcon}
          />
          <MyImage
            src={nft}
            placeholder="empty"
            alt="grid"
            className={styles.nftIcon}
          />
          <MyImage
            src={nft}
            placeholder="empty"
            alt="grid"
            className={styles.nftIcon}
          />
        </div>

        <div className={styles.doodleFooter}>
          <div className={styles.doodleFooterTextWrapper}>
            <div>
              <h3>About</h3>
            </div>
            <div className={styles.doodleDescriptionWrapper}>
              <p className={styles.doodleDescription}>{about}</p>
            </div>
          </div>
          <div className={styles.contractsWrapper}>
            <div>
              <h3>Contracts</h3>
            </div>
            <div>
              <ContractAddresses
                title="NFT Contract Address"
                address={contract_address}
              />
            </div>
          </div>
        </div>
        <div className={styles.backButtonWrapper}>
          <div className={styles.backButton}>
            <Button
              style={{ borderRadius: '2px', marginLeft: '15%' }}
              onClick={() => {
                console.log('')
              }}
              variant="primary"
            >
              Enter app
            </Button>
          </div>
        </div>
      </div>
    </WithNavsAndFooter>
  )
}
