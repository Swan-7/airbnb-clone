import React, { useState, useRef } from "react";
import { links } from "../../assets/images-links";
import "./styles.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Mousewheel, Keyboard } from 'swiper';

function Filter({ selectedFilter, setSelectedFilter }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const swiperRef = useRef(null);

  const handleScroll = () => {
    const position = swiperRef.current?.wrapperEl?.scrollLeft || 0;
    setIsScrolled(position > 0);
  };

  return (
    <div className="filter-container">
      <div className={`cover ${isScrolled ? 'scrolled' : ''}`}>
        <Swiper
        breakpoints={{
          320: {
            width: 320,
            slidesPerView: 4,
          },
          800: {
            width: 768,
            slidesPerView: 11,
          }
        }}
          spaceBetween={20}
          cssMode={true}
          navigation={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Mousewheel, Keyboard]}
          className="mySwiper filter-div"          
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={() => {handleScroll()}}
          >
            {links.map((item, i) => (
              <SwiperSlide
                key={i}
                className={`links-box ${i === selectedFilter && "selected-box"}`}
                onClick={() => {
                  setSelectedFilter(i);
                }}
              >
                <img src={item.imgSrc} className="links-img" alt=""/>
                <p
                  className={`links-label ${i === selectedFilter && "selected-label"}`}
                >
                  {item.label}
                </p>
              </SwiperSlide>
              ))}
        </Swiper>
      </div>
      <button className="filter-btn">
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" style={{ display: 'block', height: '14px', width: '14px', fill: 'currentColor' }} aria-hidden="true" role="presentation" focusable="false">
              <path d="M5 8a3 3 0 0 1 2.83 2H14v2H7.83A3 3 0 1 1 5 8zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm6-8a3 3 0 1 1-2.83 4H2V4h6.17A3 3 0 0 1 11 2zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path>
          </svg>
        </span>
        <span>Filters</span>
      </button>
    </div>
  );
}

export default Filter;

