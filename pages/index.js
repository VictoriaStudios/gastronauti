import Head from 'next/head'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import More from '../components/More'
import { useRef, useState } from 'react'
import Introduction from '../components/Introduction'
import Kassensystem from '../components/Kassensystem'
import Empfehlungen from '../components/Empfehlungen'
import ContactForm from '../components/ContactForm'
import Blog from '../components/Blog'
import Modal from '../components/Modal'
import Button from '../components/Button'

export default function Home() {
  const introRef = useRef()
  const heroRef = useRef()
  const kontaktRef = useRef()
  const kassenRef = useRef()
  const blogRef = useRef()
  const empfehlungsRef = useRef()
  const topRef = useRef()
  const ref = {
    kassenRef: kassenRef,
    kontaktRef: kontaktRef,
    blogRef: blogRef,
    empfehlungsRef: empfehlungsRef,
    introRef: introRef,
    heroRef: heroRef,
    topRef: topRef,
  }

  const [modalOpen, setModalOpen] = useState(false)

  const handleModalOpen = () => {
    setModalOpen (true)
  }

  const handleModalClose = () => {
    setModalOpen (false)
  }


  return (
    <div ref={topRef}>
      <Head>
        <title>All-In-One Solution for your Gastronomy</title>
        <meta name="description" content="Gastronauti is the solution for hotels, restaurants, cafés and diners. We provide accounting, automatic ordering, tax declaration generation and much more." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout ref={ref}>
        <main >
          <div ref={heroRef}>
            <Hero scrollRef={introRef} />
          </div>
          <More kassenRef={kassenRef} kontaktRef={kontaktRef} blogRef={blogRef} />
          <div ref={introRef}>
            <Introduction scrollRef={kontaktRef} />
          </div>
          <div ref={kassenRef}>
            <Kassensystem scrollRef={kontaktRef} />
          </div>
          <div ref={blogRef}>
            <Blog ref={blogRef} />
          </div>
          <div ref={empfehlungsRef}>
            <Empfehlungen />
          </div>
          <div ref={kontaktRef}>
            <ContactForm callback={handleModalOpen}/>
          </div>
        </main>
      </Layout>
      <Modal enabled={modalOpen} handleModalClose={handleModalClose} height='30vh'>
        <h4>Thank you for filling out the contact form.</h4>
        <h4>Keep in mind that this is only a demo website, not an actual business.</h4>
      </Modal>

    </div>
  )
}
