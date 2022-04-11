import { useState } from "react"


const ContactForm = () => {
    const [formContent, setFormContent] = useState ({
        company:'Firma',
    })

    const handleCompany = (e) => {
        let newFormContent = {...formContent, company:e.target.value}
        setFormContent(newFormContent)
    }

  return (
      <>
      <h1>Kontakt</h1>
      <form>
        <input type='text' name='Firma' value={formContent.company} onChange={handleCompany}/>
      </form>
      </>
  )
}

export default ContactForm