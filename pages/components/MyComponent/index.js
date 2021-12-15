import React from 'react'
import styles from '../../../styles/MyComponent.module.css'
import CardComponent from '../CardComponent'
import { BsCodeSlash} from 'react-icons/bs'
import { BiUser } from 'react-icons/bi'
// import { HiOutlineCode } from 'react-icons/fa';

export default function MyComponent() {

  const props = [
    {
      title: 'Desafio Bud',
      description: 'Confira o resultado do desafio do processo seletivo Bud - Junior Software Engineer.',
      icon: <BsCodeSlash />,
      route: '/sequence',
    },
    {
      title: 'Sobre mim',
      description: '',
      icon: <BiUser />,
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
