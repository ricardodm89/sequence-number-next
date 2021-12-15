import React from 'react'
import styles from '../../../styles/CardComponent.module.css'

export default function CardComponent({ title, description, icon, route }) {
    return (
        <>
            <a href={route} className={styles.card}>
                        <div className={styles.headerCard}> 
                            <div className={styles.icon}><h2>{icon}</h2></div>  
                            <div className={styles.title}><h2>{title}</h2></div> 
                        </div> 
                <p>{description}</p>
            </a>
        </>
    )
}
