import { useState, useEffect } from "react"
import styles from '../styles/ContactForm.module.css'
import Button from './Button'

const ContactForm = () => {
  const [formContent, setFormContent] = useState({
    company: 'Company',
    familyName: 'Family Name',
    firstName: 'First Name',
    email: 'Email',
    message: ''
  })

  function auto_height(elem) { 
    elem.style.height = "1px";
    elem.style.height = (elem.scrollHeight)+"px";
  }


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

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log ("Submit")
  }

  return (
    <>
      <h1>Kontakt</h1>
      <form className={styles.formWrapper}>
        <p className={`${styles.formItem} ${styles.formCaption}`}>Company: </p>
        <input className={`${styles.formItem} ${styles.formLargeField}`} type='text' name='company' placeholder={formContent.company} onChange={handleCompany} required/>
        <p className={`${styles.formItem} ${styles.formCaption}`}>Family Name: </p>
        <input className={`${styles.formItem} ${styles.formFirstField}`} type='text' name='familyName' placeholder={formContent.familyName} onChange={handleFamilyName} required/>
        <p className={`${styles.formItem} ${styles.formCaption}`}>First Name: </p>
        <input className={`${styles.formItem} ${styles.formFirstField}`} type='text' name='firstName' placeholder={formContent.firstName} onChange={handleFirstname} required/>
        <p className={`${styles.formItem} ${styles.formCaption}`}>Email: </p>
        <input className={`${styles.formItem} ${styles.formFirstField}`} type='text' name='email' placeholder={formContent.email} onChange={handleEmail} required/>
        <p className={`${styles.formItem} ${styles.formCaption}`}>Your Message: </p>
        <input className={`${styles.formItem} ${styles.formLargeField}`} type='text' name='message' placeholder='Your Message' onChange={handleMessage} required/>
        <div className={`${styles.formItem} ${styles.formFirstField}`}>
        <Button type='submit' onClick={handleSubmit}>Send message</Button>
        </div>
      </form>
    </>
  )
}

export default ContactForm