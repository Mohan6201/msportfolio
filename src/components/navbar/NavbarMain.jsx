import NavbarLogo from "./NavbarLogo";
import NavbarLinks from "./NavbarLinks";
import NavbarBtn from "./NavbarBtn";
import NavbarToggler from "./NavbarToggler";
import { useSelector } from "react-redux";

const NavbarMain = () => {
  const menuOpen = useSelector((state) => state.menu.menuOpen);

  return (
    <nav className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-[1300px] z-20 px-4 mt-2">
      <div className="flex items-center justify-between w-full bg-black p-4 rounded-full border border-orange">
        {/* Logo */}
        <NavbarLogo />

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex gap-6 items-center">
          <NavbarLinks />
        </div>

        {/* Desktop CTA Button */}
        <div className="hidden lg:block">
          <NavbarBtn />
        </div>

        {/* Mobile Toggler + CTA Button */}
        <div className="lg:hidden flex items-center gap-3">
          <NavbarBtn />
          <NavbarToggler />
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden mt-2 bg-black border border-orange rounded-xl px-4 py-3">
          <NavbarLinks />
        </div>
      )}
    </nav>
  );
};

export default NavbarMain;
