import { Nav } from "@/components";
import Image from "next/image";
import Link from "next/link";
import * as motion from "motion/react-client";

const Header = () => {
  return (
    <motion.header className="header z-10 absolute top-0 left-0 w-full flex items-center justify-between px-4 md:px-16 backdrop-blur-sm">
      <div className="logo translate-y-5 rounded-full overflow-hidden">
        <Link href="/" className="cursor-pointer">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="logo-container"
          >
            <Image
              src="/logo.png"
              alt="Company Logo"
              width={140} // 2x for retina optimization
              height={100} // 2x for retina optimization
              className="logo rounded-full"
              priority
              sizes="(max-width: 640px) 12vw, (max-width: 1024px) 8vw, 6vw"
            />
          </motion.div>
        </Link>
      </div>
      <Nav />
    </motion.header>
  );
};

export default Header;
