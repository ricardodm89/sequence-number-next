import React from 'react'
import styles from '../../../styles/CardComponent.module.css'

export default function CardComponent({ title, description, icon, route }) {
    return (
        <>
            <a href={route} className={styles.card}>
                <h2>&rarr; {title}</h2>
                <p>{description}</p>
            </a>
        </>
    )
}
