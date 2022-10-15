import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngular, faGitAlt, faJsSquare, faHtml5, faCss3, faReact, faPython, faGithub } from '@fortawesome/free-brands-svg-icons'
import { Loader } from 'react-loaders'

const About = () => {
    
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return (
        <>
            <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                    letterClass={letterClass}
                        strArray={"About me".split("")}
                        idx={15}
                    />
                </h1>
                <p>
                    Hi, I'm Ruby. I've recently finished my studies at King's College London and expecting to graduate with a 2:1 Msci degree in Theoretical Physics once my award is ratified.
                </p>
                <p>
                    During my studies, I took some modules and projects that involved coding. I found that I enjoyed these modules and the process of writing the code for each of these, and thus sparked my aspirations to become a developer.
                </p>
                <p>
                    I am currently teaching myself basic React, CSS, Html and Javascript with hopes to learn Ruby/Ruby on Rails further down the line. As of right now, my experience consists of creating this website as well as basic C# and Python projects.
                </p>
            </div>

            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faPython} color="#DD0031"/>
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faHtml5} color="#F06529"/>
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faCss3} color="#28A4D9"/>
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faReact} color="#5ED4F4"/>
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faJsSquare} color="#EFD81D"/>
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faGithub} color="#EC4D28"/>
                    </div>
                </div>  
            </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default About