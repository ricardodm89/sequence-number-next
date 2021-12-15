import React from 'react'
import HeaderComponent from '../components/HeaderComponent'
import styles from '../../styles/About.module.css'

export default function About() {
  return (
    <div className={styles.container}>
      <HeaderComponent />
      <div>
        <div style={styles.linkedin}>
          <a target="_blank" href='https://www.linkedin.com/in/ricardo-dias-martins-b8b27240/' rel="noreferrer">
            LinkedIn
          </a>
        </div>
        <div>
          <a href='www.linkedin.com.br' _blank>
            LinkedIn
          </a>
        </div>
        <div>
          <a href='www.linkedin.com.br' _blank>
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  )
}
