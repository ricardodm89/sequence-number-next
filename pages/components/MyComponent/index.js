import React from 'react'
import styles from '../../../styles/MyComponent.module.css'
import CardComponent from '../CardComponent'
// import { HiOutlineCode } from 'react-icons/fa';

export default function MyComponent() {

  const props = [
    {
      title: 'Desafio Bud',
      description: 'Veja o resultado do desafio do processo seletivo Bud - Junior Software Engineer.',
      icon: 'icon 2',
      route: '/sequence',
    },
    {
      title: 'Sobre mim',
      description: '',
      icon: 'icon 2',
      route: '/about',
    },
  ]

  return (
    <>
      {props.map((e, i) => (
        <div key={i} className={styles.grid}>
          <CardComponent title={e.title} description={e.description} icon={e.icon} route={e.route} />
        </div>
      ))}
    </>
  )





}
