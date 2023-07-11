import React from "react";
import { useState } from "react";
import Card from "./card";
import ToggleOffIcon from '@mui/icons-material/ToggleOff';
import ToggleOnIcon from '@mui/icons-material/ToggleOn';
import "./styles.css";
function Cards({ list }) {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <>
      <div className="tax-bar">
        <div className="search-text">
          <div className="search-bar-text text-2">Display total price</div>
          <div className="search-group">

            <div className="search-bar-text2 text-2">Include all fees, before Taxes</div>
          </div>
        </div>
        <button className="toggle-icon cursor-pointer" onClick={handleToggle}>
          {toggle 
          ? <ToggleOnIcon style={{ width: '3.15rem', height: '3.15rem' }} className="search-icon" />
          : <ToggleOffIcon color= "disabled" style={{ width: '3.15rem', height: '3.15rem' }} className="search-icon" />}
        </button>
      </div>
      <div className="cards-flex">
        {list.map((card, i) => (
          <Card card={card} key={i} />
        ))}
      </div>
    </>
  );
}

export default Cards;
