import React, {useEffect} from 'react'
import styles from './index.module.css'

const Education = () => {

    const educationDynamic =() => {
    var education = document.querySelector("#education");
    var eduTop = education.offsetTop;
    var qualicerliBoxs = document.querySelectorAll('.qcB');

      
    // document scroll event
        window.addEventListener("scroll", function () {
            // console.log(window.pageYOffset, eduTop);
            // console.log(qualicerliBoxs.length)
        if (window.innerWidth> 992) {
          if (window.pageYOffset >= eduTop) {
            for (let i = 0; i < qualicerliBoxs.length; i++) {
              for (let j = 0; j < qualicerliBoxs[i].children.length; j++) {
                qualicerliBoxs[i].children[j].style.opacity = '1.0'
                qualicerliBoxs[i].children[j].style.marginLeft = '0rem'
                qualicerliBoxs[i].children[j].style.marginRight = '0rem'
              }
            }
          }
        } else {
          for (let i = 0; i < qualicerliBoxs.length; i++) {
              
                
            qualicerliBoxs[i].children[1].style.marginLeft = "10%"
                qualicerliBoxs[i].children[2].style.marginLeft = "20%"
              }
          
        }
    });

    }
    
    useEffect(() => {
        educationDynamic()
    })
    return (
      <>
        <div id="education" className={styles.education}>
          <div className={styles.educationContainer}>
            <p className={styles.educationTitle}>Education</p>
            <p className={styles.subEducationTitle}>
              Quanlification and Certification
            </p>
            <div className={styles.quanliCerti}>
              <div className={['qcB', styles.quanlicerliBox].join(' ')}>
                <div className={(styles.yearQ, styles.yearQ1)}>
                  2020.2-2020.11
                </div>
                <div className={(styles.subject, styles.subject1)}>
                  Post-Study Diploma in Information Technology <br />
                  (Level8)
                </div>
                <div className={(styles.institute, styles.institute1)}>
                  {' '}
                  <a href="https://www.sit.ac.nz/" target="_blank">
                    Southern Institute of Technology(New Zealand)
                  </a>
                </div>
              </div>
              <div className={['qcB', styles.quanlicerliBox].join(' ')}>
                <div className={(styles.yearQ, styles.yearQ2)}>
                  1998.9-2002.7
                </div>
                <div className={(styles.subject, styles.subject2)}>
                  Bioengineering <br />
                  (Level7)
                </div>
                <div className={(styles.institute, styles.institute2)}>
                  <a href="http://www.hrbnu.edu.cn/" target="_blank">
                    {' '}
                    Harbin Normal University(China)
                  </a>
                </div>
              </div>
              <div className={['qcB', styles.quanlicerliBox].join(' ')}>
                <div className={(styles.yearQ, styles.yearQ3)}>2000</div>
                <div
                  className={(styles.subjectCompany, styles.subjectCompany1)}
                >
                  Microsoft Certified System Engineer
                </div>
                <div className={(styles.cerLink, styles.cerLink1)}>
                  <a
                    href="https://mcp.microsoft.com/Anonymous/Transcript/Validate"
                    target="_blank"
                  >
                    https://mcp.microsoft.com/Anonymous/Transcript/Validate
                  </a>
                </div>
              </div>
              <div className={['qcB', styles.quanlicerliBox].join(' ')}>
                <div className={(styles.yearQ, styles.yearQ4)}>2021</div>
                <div
                  className={(styles.subjectCompany, styles.subjectCompany2)}
                >
                  Responsive Web Design
                </div>
                <div className={(styles.cerLink, styles.cerLink2)}>
                  <a
                    href="https://www.freecodecamp.org/certification/chuanqizhou/responsive-web-design"
                    target="_blank"
                  >
                    https://www.freecodecamp.org/certification/chuanqizhou/responsive-web-design
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
}

export default Education