import { Logo, Nav } from "@/components";
const Header = () => {
  return (
    <header className="header z-10 absolute top-0 left-0 w-full flex items-center justify-between px-4 md:px-8">
      <Logo />
      <Nav />
    </header>
  );
};

export default Header;
