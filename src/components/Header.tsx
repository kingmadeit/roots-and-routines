import { Logo, Nav } from "@/components";
const Header = () => {
  return (
    <header className="header  absolute top-0 left-0 w-full flex items-center justify-between pr-4 pl-4 md:pr-8">
      <Logo />
      <Nav />
    </header>
  );
};

export default Header;
