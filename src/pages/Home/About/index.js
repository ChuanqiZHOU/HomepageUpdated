import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import skillpng from '../../../assets/images/1.png'
import 'bootstrap/dist/css/bootstrap.min.css'
import styles from './index.module.css'

import Typed from '../../../assets/js/typing/typed.js'
const About = () => {

    const typedText = () => {
        return  new Typed('.typingText', {
        strings: ["Freelancer.", "Front-end web developer."],
        typeSpeed: 100,
        loop: true,
        showCursor: false,
    });
    }
    useEffect(() => {
        typedText()
    },[])
    const Download = () => {
        return (
          <Link to="/favicon.ico" target="_blank" download>
        
          </Link>
        )
    }
    return (
      <>
        <div id="about" className={styles.about}>
          <div className={['col-md-12', styles.aboutContainer].join(' ')}>
            <div className={styles.aboutLeft}>
              <p className={styles.name}>Bill ZHOU</p>
              <p className={styles.jobTitle}>
                Passionate Developer <br />
                In New Zealand
              </p>
              <p className={styles.role}>
                I am a growth{' '}
                <span
                  className={['typingText', styles.typedtext].join(' ')}
                ></span>
              </p>

              <p className={styles.selfIntroContent}>
                The <i className={styles.pinkColor}>front-end</i> technical
                capabilities I have have become the guarantee for me to provide
                satisfactory services to customers.
              </p>
              <p className={styles.selfIntroContent}>
                The code for all projects is available for download and use on{' '}
                <a
                  href="https://github.com/ChuanqiZHOU"
                  target="_blank"
                  alt="BillZHOU's github"
                >
                  github
                </a>
                . All visitors are welcome to put forward constructive comments.
              </p>

             
              <a href="/favicon.ico" download>
                <button className={styles.cvDownloadBtn}>CV DownLoad</button>
              </a>
            </div>
            <div className={['col-md-12', styles.aboutRight].join(' ')}>
              <div className={styles.cardBottom}></div>
              <div className={styles.cardTop}></div>
            </div>
          </div>
        </div>
      </>
    )
}

export default About