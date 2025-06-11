const NavbarLogo = () => {
  return (
    <div className="flex items-center gap-2 group">
      {/* Logo with animated glow + spin on hover */}
      <div className="relative w-10 h-10 sm:w-12 sm:h-12">
        <img
          src="/icons/3d-icon2.png"
          alt="MS Logo"
          className="
            w-full h-full object-contain rounded-full
            transition-transform duration-500 ease-in-out 
            group-hover:rotate-[360deg] 
            group-hover:shadow-[0_0_25px_8px_rgba(0,255,255,0.5)] 
          "
        />
        {/* Optional: Add glowing ring effect */}
        <div className="
          absolute inset-0 rounded-full
          border-2 border-transparent
          group-hover:border-cyan-400
          animate-pulse
        " />
      </div>

      {/* Full name for desktop */}
      <h1 className="text-white text-2xl hidden md:block">
        Mohana Srinivasan
      </h1>
    </div>
  );
};
export default NavbarLogo;
