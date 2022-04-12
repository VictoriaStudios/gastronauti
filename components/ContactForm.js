import { useState } from "react"
import styles from '../styles/ContactForm.module.css'


const ContactForm = () => {
  const [formContent, setFormContent] = useState({
    company: 'Firma',
    familyName: 'Family Name',
    firstName: 'First Name',
    email: 'email',
    message: ''
  })

  const handleCompany = (e) => {
    let newFormContent = { ...formContent, company: e.target.value }
    setFormContent(newFormContent)
  }
  const handleFamilyName = (e) => {
    let newFormContent = { ...formContent, familyName: e.target.value }
    setFormContent(newFormContent)
  }

  const handleFirstname = (e) => {
    let newFormContent = { ...formContent, firstName: e.target.value }
    setFormContent(newFormContent)
  }

  const handleEmail = (e) => {
    let newFormContent = { ...formContent, email: e.target.value }
    setFormContent(newFormContent)
  }

  const handleMessage = (e) => {
    let newFormContent = { ...formContent, message: e.target.value }
    setFormContent(newFormContent)
  }

  return (
    <>
      <h1>Kontakt</h1>
      <form className={styles.formWrapper}>
        <div className={styles.formLine}>
          <p style={{margin:0, paddin:0}}>Company: </p>
          <div style={{flexGrow:1}}/>
          <input style={{flexGrow:3}}type='text' name='company' placeholder={formContent.company} onChange={handleCompany} />
        </div>
        <input className={styles.formLine} type='text' name='familyName' placeholder={formContent.familyName} onChange={handleFamilyName} />
        <input className={styles.formLine} type='text' name='firstName' placeholder={formContent.firstName} onChange={handleFirstname} />
        <input className={styles.formLine} type='text' name='email' placeholder={formContent.email} onChange={handleEmail} />
        <input className={styles.formLine} type='text' name='message' placeholder='Your Message' onChange={handleMessage} />
      </form>
    </>
  )
}

export default ContactForm