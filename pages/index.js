import Head from 'next/head'
import styles from '../styles/Home.module.css'
import MyComponent from './components/MyComponent'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Desafio Bud</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div  className={styles.title}>Olá pessoal!</div>

        {/* <WelcomeComponent /> */}

        <p className={styles.description}>
          Me chamo Ricardo Dias Martins, nesse projeto apresento resposta do desafio de programação
          {/* <code className={styles.code}>pages/index.js</code> */}
        </p>

        <div className={styles.grid}>
          <MyComponent />
        </div>

      </main>

      {/* <footer className={styles.footer}>

      </footer> */}
    </div>
  )
}
