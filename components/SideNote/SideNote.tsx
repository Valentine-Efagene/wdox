import React, { ReactChild } from 'react'
import styles from './SideNote.module.css'

interface IProps {
  children: string | ReactChild | ReactChild[]
}

export default function SideNote({ children }: IProps) {
  return <div className={styles.sideNote}>{children}</div>
}
