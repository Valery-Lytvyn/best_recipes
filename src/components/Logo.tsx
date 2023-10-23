import { NavLink } from "react-router-dom";
import { ROUTES } from "../routing/routes";
import LazyImage from "./LazyImage";

import logo from "../assets/icons/icons8-rice-bowl-32.png";

function Logo(): JSX.Element {
  return (
    <div className="flex justify-center items-center gap-2 ">
      <div className="w-8 h-8">
        <LazyImage src={logo} alt="logotype" />
      </div>
      <NavLink to={ROUTES.index}>
        <h6 className="text-lg font-bold text-primary">FlavorVerse</h6>
      </NavLink>
    </div>
  );
}

export default Logo;
