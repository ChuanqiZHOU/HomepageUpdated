import React from 'react'
import { Card, Row, Col} from 'react-bootstrap'

import styles from './index.module.css'

const Skill = () => {
    return (
      <>
        <div id="skill" className={StyleSheet.skill}>
          <div className={styles.skillContainer}>
            <div className={styles.skillsDiscription}>
              <p className={styles.skillTitle}>Skills</p>
              <p class={styles.subSkillTitle}>Porgraming Skills</p>
              <p className={styles.role}>
                The new generation programing languages make strong creative and
                analytical skills
              </p>
              <div className={styles.skillDetail}>
                <Row className={styles.card} lg={3}>
                  <Col className={styles.col}>
                    <Card className={['text-center', styles['card']].join(' ')}>
                      <i
                        className={['far fa-edit fa-3x', styles.cardLogo].join(
                          ' '
                        )}
                      ></i>
                      <Card.Body>
                        <Card.Title className={styles.cardTitle}>
                          Code Editing
                        </Card.Title>
                        <Card.Text className={styles.cardText}>
                          Proficient in applying various plug-ins in{' '}
                          <i className={styles.techs}>VS code</i> and
                          <i className={styles.techs}> HBuilder</i> editor on
                          Window or Linux environments
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col className={styles.col}>
                    <Card className={['text-center', styles['card']].join(' ')}>
                      <i
                        className={[
                          'fas fa-pencil-ruler fa-3x',
                          styles.cardLogo,
                        ].join(' ')}
                      ></i>
                      <Card.Body>
                        <Card.Title className={styles.cardTitle}>
                          Web Design
                        </Card.Title>
                        <Card.Text className={styles.cardText}>
                          Using <i className={styles.techs}>HTML</i>,{' '}
                          <i className={styles.techs}>CSS</i> and{' '}
                          <i className={styles.techs}>JavaScript</i> to complete
                          the development of static web pages
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col className={styles.col}>
                    <Card className={['text-center', styles['card']].join(' ')}>
                      <i
                        className={[
                          'fas fa-wrench fa-3x',
                          styles.cardLogo,
                        ].join(' ')}
                      ></i>
                      <Card.Body>
                        <Card.Title className={styles.cardTitle}>
                          Web optimization
                        </Card.Title>
                        <Card.Text className={styles.cardText}>
                          Utilizing <i className={styles.techs}>Bootstrap</i>, <i className={styles.techs}>Ant Degin</i> and <i className={styles.techs}>jQuery</i> to optimize
                          website appearance and code.
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col className={styles.col}>
                    <Card className={['text-center', styles['card']].join(' ')}>
                      <i
                        className={[
                          'fas fa-server fa-3x',
                          styles.cardLogo,
                        ].join(' ')}
                      ></i>
                      <Card.Body>
                        <Card.Title className={styles.cardTitle}>
                          Back End
                        </Card.Title>
                        <Card.Text className={styles.cardText}>
                          Building a backend platform to store data by <i className={styles.techs}>node.js</i>, 
                          <i className={styles.techs}> Express.js</i> and <i className={styles.techs}>MongoDB</i>.
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>

                  <Col className={styles.col}>
                    <Card className={['text-center', styles['card']].join(' ')}>
                      <i
                        className={[
                          'fas fa-sitemap fa-3x',
                          styles.cardLogo,
                        ].join(' ')}
                      ></i>
                      <Card.Body>
                        <Card.Title className={styles.cardTitle}>
                          Interaction
                        </Card.Title>
                        <Card.Text className={styles.cardText}>
                          Front-end and back-end Restful interaction based on
                          <i className={styles.techs}>fetch(node.js)</i>, <i className={styles.techs}>Axios</i>, and <i className={styles.techs}>jQuery.ajax</i>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col className={styles.col}>
                    <Card className={['text-center', styles['card']].join(' ')}>
                      <i
                        className={[
                          'fas fa-upload fa-3x',
                          styles.cardLogo,
                        ].join(' ')}
                      ></i>
                      <Card.Body>
                        <Card.Title className={styles.cardTitle}>
                          Accessory
                        </Card.Title>
                        <Card.Text className={styles.cardText}>
                          Bundling code with <i className={styles.techs}>webpack</i> and maintaining it on
                          <i className={styles.techs}>gitHub</i> with <i className={styles.techs}>GIT</i>. Another hobby is for android
                          development.
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        </div>
      </>
    )
}

export default Skill