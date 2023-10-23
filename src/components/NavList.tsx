import { useNavigate } from "react-router-dom";
import { navListData } from "../data/headerData";

function NavList(): JSX.Element {
  const navigate = useNavigate();
  return (
    <nav>
      <ul className="flex flex-col md:flex-row gap-2 md:gap-5">
        {navListData.map(({ title, link }) => (
          <li
            key={title}
            onClick={() => navigate(link)}
            className="cursor-pointer hover:text-primary "
          >
            {title}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavList;
