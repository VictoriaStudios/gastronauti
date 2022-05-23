import { useState, useEffect } from "react"
import styles from '../styles/ContactForm.module.css'
import Button from './Button'

const ContactForm = (props) => {
  const initContent = {
    company: '',
    familyName: '',
    firstName: '',
    email: '',
    message: ''
  }
  const [formContent, setFormContent] = useState(initContent)

  function auto_height(elem) {
    elem.style.height = "1px";
    elem.style.height = (elem.scrollHeight) + "px";
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
    if (props.callback) {
      props.callback(formContent)
    }
    setFormContent (initContent)
  }

  return (
    <>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit} className={styles.formWrapper}>
        <p className={`${styles.formItem} ${styles.formCaption}`}>Company: </p>
        <input className={`${styles.formItem} ${styles.formLargeField}`} type='text' name='company' value={formContent.company} placeholder='Company' onChange={handleCompany} required />
        <p className={`${styles.formItem} ${styles.formCaption}`}>Family Name: </p>
        <input className={`${styles.formItem} ${styles.formFirstField}`} type='text' name='familyName' value={formContent.familyName} placeholder='Family Name' onChange={handleFamilyName} required />
        <p className={`${styles.formItem} ${styles.formCaption}`}>First Name: </p>
        <input className={`${styles.formItem} ${styles.formFirstField}`} type='text' name='firstName' value={formContent.firstName} placeholder='First Name' onChange={handleFirstname} required />
        <p className={`${styles.formItem} ${styles.formCaption}`}>Email: </p>
        <input className={`${styles.formItem} ${styles.formFirstField}`} type='text' name='email' value={formContent.email} placeholder='Email' onChange={handleEmail} required />
        <p className={`${styles.formItem} ${styles.formCaption}`}>Your Message: </p>
        <textarea style={{resize:'none'}} className={`${styles.formItem} ${styles.formLargeField}`} name='message'rows='13' value={formContent.message} placeholder='Your Message' onChange={handleMessage} required />
        <div className={`${styles.formItem} ${styles.formFirstField}`}>
          <Button type='submit'>Send message</Button>
        </div>
      </form>
    </>
  )
}

export default ContactForm