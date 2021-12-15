import React from 'react'
import Link from 'next/link'
import { HiOutlineChevronLeft} from 'react-icons/hi'
import styles from '../../../styles/Home.module.css'

export default function HeaderComponent() {
    return (
        <div className={styles.header}>
            <Link href='/'>
                <a><HiOutlineChevronLeft size={40}/></a>
            </Link>
        </div>
    )
}
