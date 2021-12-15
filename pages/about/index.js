import React from 'react'
import { IoLogoLinkedin } from 'react-icons/io'
import { FaGitAlt } from 'react-icons/fa'
import { MdOutlineAlternateEmail } from 'react-icons/md'
import HeaderComponent from '../components/HeaderComponent'
import styles from '../../styles/About.module.css'

export default function About() {
  return (
    <div className={styles.container}>
      <HeaderComponent />
      <div className={styles.main}>
        <div>
          <a target="_blank" href='https://www.linkedin.com/in/ricardo-dias-martins-b8b27240/' className={styles.linkedin} rel="noreferrer" >
            <IoLogoLinkedin size={28} />
            <div className={styles.text}>Ricardo Dias Martins</div>
          </a>
        </div>
        <div>
          <a target="_blank" href='https://github.com/ricardodm89' className={styles.git} rel="noreferrer" >
            <FaGitAlt size={28} />
            <div className={styles.text}>\ricardodm89</div>
          </a>
        </div>
        <div>
          <a target="_blank" href='mailto:ricado89@gmailcom' className={styles.mail} rel="noreferrer">
            <MdOutlineAlternateEmail size={28} />
            <div className={styles.text}>ricado89@gmail.com</div>
          </a>
        </div>
      </div>

    </div>
  )
}
