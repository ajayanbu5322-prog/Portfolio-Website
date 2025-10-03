import React from 'react'
import styles from './ContectStyles.module.css'

function Contect() {
  return (
    <section id='contect' className={styles.container}>
        <h1 className='sectionTitle'>Contect</h1>
        <form action="https://api.web3forms.com/submit" method="POST">
           
            <div className='formGroup'>
                 <input type="hidden" name="access_key" value="0ce4d007-72fd-425b-9f47-92d10a4b242d"></input>
                <label htmlFor="name" hidden>
                    Name
                </label>
                <input type="text" name="name" id='name' placeholder='Name' required />
            </div>
            <div className='formGroup'>
                <label htmlFor="email" hidden>
                    Email
                </label>
                <input type="text" name="email" id='email' placeholder='Email' required />
            </div>
            <div className='formGroup'>
                <label htmlFor="message" hidden>
                    Message
                </label>
                <textarea name="message" id='message' placeholder='Message' required ></textarea>
            </div>
            <input className='hover btn' type="submit" value="Submit" />
        </form>
    </section>
  )
}

export default Contect