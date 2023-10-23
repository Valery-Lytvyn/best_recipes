import { useState } from "react";
import Logo from "./Logo";
import NavList from "./NavList";
import LazyImage from "./LazyImage";
import MenuNavList from "./MenuNavList";
import avatarIcon from "../assets/icons/icons8-user-32.png";
import menuIcon from "../assets/icons/icons8-menu-32.png";

function Header(): JSX.Element {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const userLogo = false;

  const clickHandler = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="flex justify-between items-center py-4 px-2 h-20 min-h-20">
      {/* Mobile Menu */}
      <div className="block md:hidden">
        <div className="w-8 h-8" onClick={clickHandler}>
          <LazyImage src={menuIcon} alt="menu icon" />
        </div>
        {isMenuOpen ? <MenuNavList clickHandler={clickHandler} /> : null}
      </div>

      {/* Logo */}
      <Logo />

      {/* Desktop Navigation */}
      <div className="hidden md:block">
        <NavList />
      </div>

      {/* User Logo or Sign In Button */}
      {userLogo ? (
        <div className="rounded-full  border-2 border-white w-8 h-8 flex justify-center items-center hover:border-primary">
          <div className="w-6 h-6">
            <LazyImage src={avatarIcon} alt="user logo icon" />
          </div>
        </div>
      ) : (
        <div className="rounded-2xl border-2 border-white  py-1 px-6 text-center cursor-pointer hover:border-primary hover:text-primary">
          Sign in
        </div>
      )}
    </header>
  );
}

export default Header;
