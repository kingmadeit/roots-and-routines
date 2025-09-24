import Image from "next/image";
import Link from "next/link";
import * as motion from "motion/react-client";

const Logo = () => {
  return (
    <Link href="/" className="cursor-pointer">
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="logo-container w-[clamp(6rem,6vw,6rem)] h-[clamp(6rem,6vw,6rem)]"
      >
        <Image
          src="/logo.png"
          alt="Company Logo"
          width={200} // 2x for retina optimization
          height={200} // 2x for retina optimization
          className="logo rounded-full"
          priority
          sizes="(max-width: 640px) 12vw, (max-width: 1024px) 8vw, 6vw"
        />
      </motion.div>
    </Link>
  )
}

export default Logo
