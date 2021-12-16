import React from 'react'
import { BsCodeSlash } from 'react-icons/bs'
import { BiUser } from 'react-icons/bi'
import styles from '../../../styles/GridCardsComponent.module.css'
import CardComponent from '../CardComponent'

export default function GridCardsComponent() {

  const props = [
    {
      title: 'Desafio Bud',
      icon: <BsCodeSlash size={40} />,
      route: '/sequence',
    },
    {
      title: 'Sobre mim',
      icon: <BiUser size={40} />,
      route: '/about',
    },
  ]

  return (
    <>
      {props.map((e, i) => (
        <div key={i} className={styles.grid}>
          <CardComponent title={e.title} icon={e.icon} route={e.route} />
        </div>
      ))}
    </>
  )

}
