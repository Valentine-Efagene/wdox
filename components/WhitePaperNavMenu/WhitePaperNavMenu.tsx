import React, { useState } from 'react'
import styles from './WhitePaperNavMenu.module.css'
import WhitePaperActiveLink from '../WhitePaperActiveLink/WhitePaperActiveLink'
import { ArrowBack } from '@mui/icons-material'

export default function WhitePaperNavMenu() {
  // const menuRef: React.MutableRefObject<HTMLInputElement | undefined> = useRef()
  // const buttonRef: React.MutableRefObject<HTMLInputElement | undefined> = useRef()
  //const [menuBtnVisible, setMenuBtnVisible] = useState<boolean>(true)
  const [menuItemsVisible, setMenuItemsVisible] = useState<boolean>(false)

  const openMenu = () => {
    // setMenuItemsVisible((prevState) => !prevState)
    setMenuItemsVisible(true)
  }

  const closeMenu = () => {
    setMenuItemsVisible(false)
    //setMenuBtnVisible(true)
  }

  return (
    <>
      <div className={`${styles.navButton}`}>
        {!menuItemsVisible && (
          <button
            onClick={openMenu}
            // onBlur={closeMenu}
            className={styles.menuToggle}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        )}
        {menuItemsVisible && (
          <button
            onClick={closeMenu}
            // onBlur={openMenu}
            className={styles.menuBack}
          >
            <ArrowBack />
          </button>
        )}
      </div>
      {menuItemsVisible && (
        <div className={styles.menuItems} onBlur={closeMenu}>
          <WhitePaperActiveLink
            href="executivesummary"
            text="Executive Summary"
          />
          <WhitePaperActiveLink href="background" text="Background" />
          <WhitePaperActiveLink href="environment" text="Environment" />
          <WhitePaperActiveLink href="status" text="Status" />
          <WhitePaperActiveLink href="status" text="Token" />
        </div>
      )}
    </>
  )
}
