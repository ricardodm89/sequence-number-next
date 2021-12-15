import React from 'react'
import Image from 'next/image'
import { BiChevronRight} from 'react-icons/bi'
import HeaderComponent from '../components/HeaderComponent'
import styles from '../../styles/Sequence.module.css'
import sequenceNumber from '../../utils/sequenceNumber'

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
                            type='text'
                            placeholder='Digite um número'
                            onChange={(e) => setNumber(e.target.value)}
                        />
                        <button className={styles.btn} type='submit'>Enviar</button>
                        </div>
                    </form>

                    <div className={styles.code}>
                        <div className={styles.result}><BiChevronRight /><p>Entrada: {inputNumber}</p></div>
                        <div className={styles.result}><BiChevronRight /><p>Saída: {sequenceResolved || 'Ainda não há sequência'}</p></div>
                    </div>
                </div>

            </div>

        </div >
    )
}
