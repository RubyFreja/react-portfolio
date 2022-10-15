import './index.scss'
import { Loader } from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters';
import { useState, useEffect, useRef } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef()

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, [])

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
            .sendForm('service_r9vjgyy', 'template_ex5q8ob', refForm.current, 'HvnR1XCkY0nTaDj0y')
            .then(
                () => {
                    alert('Message successfully sent!')
                    window.location.reload(false)
                },
                () => {
                    alert('Failed to send')
                }
            )
    }

    return (
        <>
            <div className='container contact-page'>
                    <div className='text-zone'>
                        <h1>
                            <AnimatedLetters
                                letterClass={letterClass}
                                strArray={"Contact Info".split("")}
                                idx={15}
                            />
                        </h1>
                        <p>
                            hi
                        </p>
                        <div className='contact-form'>
                            <form ref={refForm} onSubmit={sendEmail}>
                                <ul>
                                    <li className='half'>
                                        <input type="text" name="name" placeholder="Name" required />
                                    </li>
                                    <li className='half'>
                                        <input type="email" name="email" placeholder="Email" required />
                                    </li>
                                    <li>
                                        <input placeholder="Subject" type="text" name="subject" required/>
                                    </li>
                                    <li>
                                        <textarea placeholder="Message" name="message" required></textarea>
                                    </li>
                                    <li>
                                        <input type="submit" className='flat-button' value="SEND" />
                                    </li>
                                </ul>
                            </form>
                        </div>
                    </div>
                </div>
            <Loader type="pacman" />
        </>
    )
}

export default Contact