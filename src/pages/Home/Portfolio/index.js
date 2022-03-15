import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay} from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import styles from './index.module.css'

const Portfolio = () => {
  

    return (
      <>
        <div id="portfolio" className={styles.portfolio}>
          <div className={styles.portfolioContainer}>
            <p className={styles.portfolioTitle}>Portfolio</p>
            <p className={styles.subPortfolioTitle}>My Works</p>
            <Swiper
              // install Swiper modules
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={50}
              // slidesPerView={3}
              navigation={true}
              loop={true}
              pagination={{ clickable: true }}
              // scrollbar={{ draggable: true }}
              className="mySwiper"
              breakpoints={{
                992: {
                  // width:992,
                  slidesPerView: 3,
                },
                768: {
                  width: 768,
                  slidesPerView: 1,
                },
              }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              //   onSwiper={(swiper) => console.log(swiper)}
              //   onSlideChange={() => console.log('slide change')}
            >
              <SwiperSlide className={styles['swiper-slide']}>
                <div className={styles.myMCMD}>
                  <div className={styles.slideCover}>
                    {' '}
                    <a
                      className={styles.slideDiscription}
                      href="/MCMD"
                      target="_blank"
                    >
                      Website Optimization
                    </a>
                    <a
                      className={styles.codeResource}
                      href="https://github.com/ChuanqiZHOU/chuanqizhou.github.io/tree/main/MCMD"
                      target="_blank"
                    >
                      Coding Resource
                    </a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className={styles['swiper-slide']}>
                <div className={styles.mySwiperSlide}>
                  <div className={styles.slideCover}>
                    <a
                      className={styles.slideDiscription}
                      href="https://play.google.com/store/apps/details?id=com.emw_calculator&hl=en&gl=US"
                      target="_blank"
                    >
                      Android App Development
                    </a>
                    <a
                      className={styles.codeResource}
                      href="https://github.com/ChuanqiZHOU/chuanqizhou.github.io/tree/main/MCMD"
                      target="_blank"
                    >
                      Coding Resource
                    </a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className={styles['swiper-slide']}>
                <div className={styles.blogSlide}>
                  <div className={styles.slideCover}>
                    <a
                      className={styles.slideDiscription}
                      href="http://billzhou.shop"
                      target="_blank"
                    >
                      Blog App Development
                    </a>

                    <a
                      className={styles.codeResource}
                      href="https://github.com/ChuanqiZHOU/blogSystem"
                      target="_blank"
                    >
                      Coding Resource
                    </a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className={styles['swiper-slide']}>
                <div className={styles.slideCover}>
                  <a className={styles.slideDiscription}>Coming soon!!!!</a>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </>
    )
}

export default Portfolio