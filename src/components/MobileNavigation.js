import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import { MdOutlineClose } from "react-icons/md";
import MobileLinks from "./MobileLinks";
import mobile from "./mobile-logo.png";

const MobileNavigation = ({ isAuth, setIsAuth }) => {
  const [open, setOpen] = useState(false);

  const burgerIcon = (
    <GiHamburgerMenu
      className="Hamburger"
      size="40px"
      color="var(--burges)"
      onClick={() => setOpen(!open)}
    />
  );
  const closeIcon = (
    <MdOutlineClose
      className="Hamburger"
      size="40px"
      color="var(--burges)"
      onClick={() => setOpen(!open)}
    />
  );

  const closeItem = () => setOpen(false);
  return (
    <nav className="mobile-navigation">
      <div className="burgers"> {open ? closeIcon : burgerIcon} </div>
      <img src={mobile} className="mobile-logo" />

      {open && (
        <>
          <MobileLinks
            isAuth={isAuth}
            setIsAuth={setIsAuth}
            isMobile={true}
            closeItem={closeItem}
          />
        </>
      )}
    </nav>
  );
};

export default MobileNavigation;
