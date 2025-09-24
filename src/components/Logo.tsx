
import Image from "next/image";
import Link from "next/link";
import { Animated } from ".";

const Logo = () => {
  return (
    <Link href="/" className="cursor-pointer">
      <Animated 
        as='div'
        initial={{ x: -100, opacity: 0, scale: 1.75 }}
        animate={{ x: 0, opacity: 1, scale: 1.75 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-[clamp(6rem,6vw,6rem)] h-[clamp(6rem,6vw,6rem)]"
      >
        <Image
          src="/logo.png"
          alt="Company Logo"
          width={200}
          height={200}
          className="logo rounded-full"
          priority
          sizes="(max-width: 640px) 12vw, (max-width: 1024px) 8vw, 6vw"
        />
      </Animated>
    </Link>
  );
};

export default Logo;
