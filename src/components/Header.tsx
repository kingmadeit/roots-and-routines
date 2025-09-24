import { Logo, Nav } from "@/components";
import * as motion from "motion/react-client";

const Header = () => {
  return (
    <motion.header className="header z-10 absolute top-0 left-0 w-full flex items-center justify-between px-4 md:px-16 ">
      <Logo />
      <Nav />
    </motion.header>
  );
};

export default Header;
