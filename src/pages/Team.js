import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import '../styles/Team.css';
import teamPhoto from '../images/prodcon/prodcon1.JPG';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel } from 'swiper/modules';
import 'swiper/css';

export default function Team({ show }) {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = 400;
      const progress = Math.min(scrollY / maxScroll, 1);
      setScrollProgress(progress);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const bannerWidthVW = 100 - scrollProgress * 24;

  const bannerStyle = {
    width: `${bannerWidthVW}vw`,
    marginLeft: `calc(50% - ${bannerWidthVW / 2}vw)`,
  };

  return (
    <Container>
      <div className="team-page">
        <div className="team-header">
          <h1 className="team-page-title">About us</h1>
          <p className="team-subtitle">
            Fostering the creative product management community @UWaterloo.
          </p>
        </div>
        <div className="team-banner" style={bannerStyle}>
          <img src={teamPhoto} alt="UW PM team" className="team-banner-img" />
        </div>

        <div className="values-carousel-wrapper">
          <h2 className="values-carousel-title">Our values.</h2>
          <Swiper
            modules={[Mousewheel]}
            spaceBetween={20}
            slidesPerView={3.5}
            mousewheel={{ forceToAxis: true }}
            className="values-swiper"
          >
            <SwiperSlide className="value-card">
              <div className="value-icon"></div>
              <h3>Mission</h3>
              <p>
                UW PM is dedicated to creating a thriving product management
                community and offering students exposure to the field of
                product.
              </p>
            </SwiperSlide>
            <SwiperSlide className="value-card">
              <div className="value-icon"></div>
              <h3>Vision</h3>
              <p>
                Inspire product-level thinking and explore the rationale behind
                what we should build and why that will propel students towards
                successful careers in product.
              </p>
            </SwiperSlide>
            <SwiperSlide className="value-card">
              <div className="value-icon"></div>
              <h3>What We Do</h3>
              <p>
                We host a wide array of events running from product case
                competitions, resume reviews, mock interviews, panel discussions
                with alumni, and more!
              </p>
            </SwiperSlide>
            <SwiperSlide className="value-card">
              <div className="value-icon"></div>
              <h3>Empowerment</h3>
              <p>
                We help people break into product management by providing the
                resources, skills, and opportunities they need to succeed,
                regardless of their background.
              </p>
            </SwiperSlide>
            <SwiperSlide className="value-card">
              <div className="value-icon"></div>
              <h3>Continuous Learning</h3>
              <p>
                We embrace a growth mindset, encouraging continuous learning and
                development through shared knowledge and experiences.
              </p>
            </SwiperSlide>
            <SwiperSlide className="value-card">
              <div className="value-icon"></div>
              <h3>Community Engagement</h3>
              <p>
                We engage with the Waterloo product management community —
                alumni, students, and beyond — to share knowledge and build
                lasting connections.
              </p>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </Container>
  );
}
