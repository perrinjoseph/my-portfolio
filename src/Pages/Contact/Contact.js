import React from 'react'
import ContactForm from '../../Components/ContactForm/ContactForm'
import ScrollToTopOnMount from '../../Components/ScrollToTop/ScrollToTopOnMount'

function Contact() {
    return (
        <div className="contact-container">
            <ScrollToTopOnMount/>
            <div className="contactform-page">
                <h1>Contact Me</h1>
                <small>571-771-8941</small><br></br>
                <small>perrin.joseph198@gmail.com</small>
                <ContactForm/>
            </div>
        </div>
    )
}

export default Contact
