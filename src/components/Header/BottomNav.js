import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import FavoriteBorderIcon from "@mui/icons-material/Favorite";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <div className="bottom-nav">
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Explore" icon={<SearchRoundedIcon />} />
        <BottomNavigationAction label="Wishlists" icon={<FavoriteBorderIcon />} />
        <BottomNavigationAction label="Log in" icon={<PersonOutlineIcon />} />
      </BottomNavigation>
    </div>
  );
}
