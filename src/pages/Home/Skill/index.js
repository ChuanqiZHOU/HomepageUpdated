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
                          Proficient in applying various plug-ins in VS code and
                          HBuilder editor on Window or Linux environments
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
                          Using HTML, CSS and JavaScript to complete the
                          development of static web pages
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
                          Utilizing Bootstrap, Ant Degin and jQuery to optimize
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
                          Building a backend platform to store data by node.js,
                          Express.js and MongoDB.
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
                          fetch(node.js), Axios, and jQuery.ajax
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
                          Bundling code with webpack and maintaining it on
                          gitHub with GIT. Another hobby is for android
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