import React from 'react'
import HeaderComponent from '../components/HeaderComponent'
import styles from '../../styles/About.module.css'

export default function About() {
    return (
        <div className={styles.container}>
            <HeaderComponent />
            <p>Sobre mim</p>
        </div>
    )
}
