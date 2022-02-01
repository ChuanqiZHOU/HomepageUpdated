import React, {useEffect, useState} from 'react'

import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'

import brandPng from '../../assets/images/Brand.png'
import 'bootstrap/dist/css/bootstrap.min.css'
import styles from'./index.module.css'

//------------------mouse pointer for fabars
const fabarPointer= () => {
    let faBars = document.querySelector(".fa-bars-cursor");
    faBars.addEventListener('mouseenter', function() {
        faBars.style.cursor = "pointer";
    })
}

const NaviHeader = () => {
  const [flag, setFlag] = useState(true);
  //change the mouse curser to pointer
  useEffect(() => {
    fabarPointer()
  }, [])
  
  const onClick = async() => {
    await setFlag(flag => !flag)
 }

  const NavList = () => {
    return (
      <Nav fill className= "col-8" variant='flat'>
        <Nav.Link href="#about"  className={styles.navItem, styles["nav-link"]}>
          About
        </Nav.Link>
        <Nav.Link href="#skill" className={styles.navItem, styles["nav-link"]}>
          Skill
        </Nav.Link>
        <Nav.Link href="#portfolio" className={styles.navItem, styles["nav-link"]}>
          Portfolio
        </Nav.Link>
        <Nav.Link href="#experiences" className={styles.navItem, styles["nav-link"]}>
          Experiences
        </Nav.Link>
        <Nav.Link href="#education" className={styles.navItem, styles["nav-link"]}>
          Education
        </Nav.Link>
        <Nav.Link href="#contact" className={styles.navItem, styles["nav-link"]}>
          Contact
        </Nav.Link>
      </Nav>
    )
  }

    return (
      <>
        <Navbar className={styles.naviHeader} fixed="top" bg="white" variant="white">
          <Container>
            <Navbar.Brand href="#home">
              <img alt="" src={brandPng} width="30" height="30" />{' '}
            </Navbar.Brand>
            {flag ? '' : <NavList />}
            
            <span onClick={() => onClick()}>
              <i
                className={[
                  'fa fa-bars-cursor',
                  flag ? 'fa-bars' : 'fa-times',
                  styles.faNew
                ].join(' ')}
              />
              </span>
            
          </Container>
        </Navbar>
      </>
    )
}
export default NaviHeader