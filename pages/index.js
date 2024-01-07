import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import {Button, ButtonGoogle, ButtonTwo} from '@/components/Button'


export default function Home() {
  return (
    <>
      <Head>
        <title>Twitter Login</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main}`}>
    <h1>Happening now</h1>
    <h2>Join Today.</h2>
    <ButtonGoogle/>
    <Button/>
    <p>By signing up, you agree to the Terms of Service and Privacy 
Policy, including Cookie Use.</p>

<h3>Already have an account?</h3>
<ButtonTwo/>
      </main>
    </>
  )
}
