import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="drop-shadow-lg bg-slate-500 py-3 font-bold text-2xl">
      <NavLink to="/" className="mx-3 drop-shadow-lg ">Home</NavLink>
      <NavLink to="/page1" className="mx-3 drop-shadow-lg">Page 1</NavLink>
      <NavLink to="/page2" className="mx-3 drop-shadow-lg">Page 2</NavLink>
    </nav>
  );
};

export default Navbar;
