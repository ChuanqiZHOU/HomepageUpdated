import React from 'react'
import styles from './index.module.css'




const Contact = () => {
    return (
      <div id="contact" className={styles.contact}>
        <div className={styles.contactContainer}>
          <p className={styles.contactTitle}>Contact</p>
          <p className={styles.subContactTitle}>Hire me !</p>
          <div className={styles.contactDetail}>
            <div className={styles.contactLeft}>
              <p>
                I am available for freelance work.
                <br /> Please send the email or fill out the form on this
                section to contact with me.
              </p>
              <div className={styles.contactLocation}>
                <i className="fas fa-map-marker-alt"> </i>{' '}
                <span>Auckland, New Zealand</span>
              </div>
              <div className={styles.contactEmail}>
                <i className="fas fa-envelope"></i>{' '}
                <span>chuanqizhou@gmail.com</span>
              </div>
              <div className={styles.socialMedia}>
                <span>
                  <a
                    href="https://www.linkedin.com/in/billzhounewzealand/"
                    target="_blank"
                  >
                    <i className="fab fa-linkedin"></i> LinkedIn
                  </a>
                </span>
                <span>
                  <a
                    href="https://www.facebook.com/chuanqi.zhou.79/"
                    target="_blank"
                  >
                    <i className="fab fa-facebook-square"></i> Facebook
                  </a>
                </span>
                <span>
                  <a href="https://github.com/ChuanqiZHOU" target="_blank">
                    <i className="fab fa-github-square"></i> Github
                  </a>
                </span>
                <span>
                  <a href="https://codepen.io/Chuanqizhou" target="_blank">
                    <i className="fab fa-codepen"></i> Codepen
                  </a>
                </span>
              </div>
            </div>
            <div className={styles.contactRight}>
              <form
                action="https://formspree.io/f/xyylqyze"
                method="post"
                className={styles.contactForm}
              >
                <div className={styles.items}>
                  <label className={styles.contactName}> Name</label>
                  <input
                    type="text"
                    name="name"
                    className={styles.nameDetail}
                    placeholder="Enter your name"
                  />
                </div>
                <div className={styles.items}>
                  <label className={styles.contactEmail2}> Email</label>
                  <input
                    type="email"
                    name="_replyto"
                    className={styles.emailDetail}
                    placeholder="Enter your emaill"
                  />
                </div>
                <div className={styles.items}>
                  <label className={styles.contactPhone}>Phone</label>
                  <input
                    type="number"
                    name="telephone"
                    className={styles.phoneDetail}
                    min="999999"
                    max="33333333333"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div className={styles.items}>
                  <label className={styles.contactMessage}> Message</label>
                  <textarea
                    name="message"
                    rows=""
                    cols=""
                    className={styles.messageDetail}
                  ></textarea>
                </div>
                
                <div className={styles.resetSubmit}>
                  <button type="reset" className={styles.resetBtn}>
                    Reset
                  </button>
                  <button type="submit" className={styles.submitBtn}>
                    Submit
                  </button>
                </div>
                
              </form>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Contact