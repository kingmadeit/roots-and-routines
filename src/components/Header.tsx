import { Nav } from "@/components";
import Image from "next/image";
import Link from "next/link";
import * as motion from "motion/react-client";

const Header = () => {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="header z-10 absolute top-0 left-0 w-full flex items-center justify-between px-16 backdrop-blur-sm"
    >
      <div className="logo translate-y-5 rounded-full overflow-hidden">
        <Link href="/" className="cursor-pointer">
          <Image src="/logo.png" alt="Company Logo" width={100} height={50} />
        </Link>
      </div>
      <Nav />
    </motion.header>
  );
};

export default Header;
