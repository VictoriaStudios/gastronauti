import Head from 'next/head'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import More from '../components/More'
import styles from '../styles/Home.module.css'
import { useRef } from 'react'
import Introduction from '../components/Introduction'
import Kassensystem from '../components/Kassensystem'
import Empfehlungen from '../components/Empfehlungen'
import ContactForm from '../components/ContactForm'
import Blog from '../components/Blog'

export default function Home() {
  const introRef = useRef()
  const heroRef = useRef()
  const kontaktRef = useRef()
  const kassenRef = useRef()
  const gastroRef = useRef()
  const blogRef = useRef()
  const empfehlungsRef = useRef()
  const ref = {
    kassenRef:kassenRef,
    kontaktRef:kontaktRef,
    gastroRef:gastroRef,
    blogRef: blogRef,
    empfehlungsRef:empfehlungsRef,
    introRef:introRef,
    heroRef:heroRef,
  }


  return (
    <div>
      <Head>
        <title>All-In-One Solution for your Gastronomy</title>
        <meta name="description" content="Gastronauti is the solution for hotels, restaurants, cafés and diners. We provide accounting, automatic ordering, tax declaration generation and much more." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout ref={ref}>
        <main>
          <Hero ref={heroRef} scrollRef={introRef} />
          <More kassenRef={kassenRef} gastroRef={gastroRef} blogRef={blogRef} />
          <div ref={introRef}>
            <Introduction scrollRef={kontaktRef} />
          </div>
          <div ref={kassenRef}>
            <Kassensystem scrollRef={kontaktRef}/>
          </div>
          <div ref={blogRef}>
            <Blog/>
          </div>
          <div ref={empfehlungsRef}>
            <Empfehlungen/>
          </div>
          <div  ref={kontaktRef}>
            <ContactForm/>
          </div>
        </main>
      </Layout>
    </div>
  )
}
