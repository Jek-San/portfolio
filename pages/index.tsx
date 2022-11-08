import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from './component/Header'
import Hero from './component/Hero'
export default function Home() {
  return (
    <div className='bg-[#10101a] h-screen'>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        
      </Head>
      <div className='overflow-hidden'>
        <Header />
        <Hero/>
    </div>     
    
    </div>
  )
}
