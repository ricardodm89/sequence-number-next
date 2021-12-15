import React from 'react'
import Image from 'next/image'
import HeaderComponent from '../components/HeaderComponent'
import sequenceNumber from '../../utils/sequenceNumber'
import styles from '../../styles/Sequence.module.css'
import { removeSpecialCharactersMask } from '../helper'

export default function Sequence() {
    const [number, setNumber] = React.useState('')
    const [inputNumber, setInputNumber] = React.useState('')
    const [sequenceResolved, setSequenceResolved] = React.useState()

    const onSubmit = (e) => {
        e.preventDefault()
        setSequenceResolved(sequenceNumber(number))
        setInputNumber(number)
        setNumber('')
    }

    return (
        <div className={styles.container}>
            <HeaderComponent />
            <div className={styles.main}>
                <div className={styles.card}>
                    <Image
                        src="/assets/desafio.png"
                        alt="desafio"
                        width={641}
                        height={406}
                    />
                </div>
                <div className={styles.card}>
                    <form onSubmit={onSubmit}>
                        <div className={styles.form}>
                            <input
                                className={styles.input}
                                label='Number'
                                value={number}
                                type='number'
                                placeholder='Digite um número'
                                onChange={(e) => setNumber(e.target.value)}
                            />
                            <button className={styles.btn} type='submit'>Enviar</button>
                        </div>
                    </form>

                    <div className={styles.result}>
                        {inputNumber || 'Entrada'}
                    </div>
                    <div className={styles.result}>
                        {sequenceResolved || '...'}
                    </div>
                </div>
            </div>
        </div >
    )
}
