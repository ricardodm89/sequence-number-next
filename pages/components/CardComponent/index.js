import React from 'react'
import styles from '../../../styles/CardComponent.module.css'

export default function CardComponent({ title, icon, route }) {
  return (
    <>
      <a href={route} className={styles.card}>
        <div className={styles.headerCard}>
          <div className={styles.title}><h2>{title}</h2></div>
        </div>
        <div>
          {icon}
        </div>
      </a>
    </>
  )
}
