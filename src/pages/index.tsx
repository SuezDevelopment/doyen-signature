import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Signatures by Doyen | BRIDALS▪️CUSTOM•MADE▪️LUXURY | Coming Soon </title>
        <meta name="description" content="Doyen Signature BRIDALS▪️CUSTOM•MADE▪️LUXURY" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            Doyen Signature&nbsp;
            <code className={styles.code}>BRIDALS▪️CUSTOM•MADE▪️LUXURY</code>
          </p>
        </div>

        <div className={styles.center}>
        <Image
          src="https://instagram.flos1-2.fna.fbcdn.net/v/t51.2885-19/17268093_268178286957175_3669541597239836672_a.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.flos1-2.fna.fbcdn.net&_nc_cat=107&_nc_ohc=32b5E9m-2QgAX9w_6_M&edm=ACWDqb8BAAAA&ccb=7-5&oh=00_AfCAwf2bX52IaN9Hw6ZqTnx97PahfQDPkG4pwS3v_XIzxA&oe=6429B7F8&_nc_sid=1527a3"
          alt="Doyen Signatures"
          className={styles.vercelLogo}
          width={100}
          height={100}
          priority
        />
        
        </div>
        <div className={styles.center}>
          <h1 className={styles.title}>Coming Soon... </h1>
        </div>

        
      </main>
    </>
  )
}
