import { Logo, Nav } from "@/components";
const Header = () => {
  return (
    <header className="header z-10 absolute top-0 left-0 w-full flex items-center justify-between pr-4 pl-8 md:pr-8 md:pl-16">
      <Logo />
      <Nav />
    </header>
  );
};

export default Header;
