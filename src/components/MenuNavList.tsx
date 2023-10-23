import { MenuNavListProps } from "../types";
import NavList from "./NavList";

function MenuNavList({ clickHandler }: MenuNavListProps): JSX.Element {
  return (
    <div
      className="absolute left-0 top-20 w-full min-h-screen bg-[rgba(0,0,0,0.8)]"
      onClick={clickHandler}
    >
      <div className="pl-3">
        <NavList />
      </div>
    </div>
  );
}

export default MenuNavList;
