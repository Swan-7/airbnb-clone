import React from "react";
import { useState } from "react";
import "./styles.css";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

function Card({ card }) {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="card-box ">
      <Swiper
        slidesPerView={1}
        spaceBetween={15}
        loop={true}
        mousewheel={true}
        cssMode={true}
        pagination
        modules={[Pagination, Navigation]}
        navigation={true}
        className="swiper-container"
      >
        {card.imgSrc.map((src, i) => (
          <SwiperSlide key={i}>
            <img src={src} className="card-img" alt="card"/>
          </SwiperSlide>
        ))}
      </Swiper>
      <button className="favorite-button" onClick={handleFavoriteClick}>
        {isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
      </button>
      <div className="card-info-flex">
        <h4 className="card-title">{card.title}</h4>
        <div className="card-rating">
          <StarRateRoundedIcon sx={{ width: "1.1rem" }}/>
          <p>{card.rating}</p>
        </div>
      </div>
      <p style={{ margin: 0, color: "var(--font-grey)" }}>Stay with {card.desc}</p>
      <p style={{ margin: 0, color: "var(--font-grey)" }}>{card.date}</p>
      <p style={{ margin: "0.2rem", color: "var(--black" }}>
        <span style={{ fontWeight: "700" }}>${card.price}</span> night
      </p>
    </div>
  );
}

export default Card;
