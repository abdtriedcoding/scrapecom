import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="flex space-x-2 items-center">
      <Image src="/logo.svg" width={35} height={35} alt="notionverse" />
      <p className="text-blue-500 text-xl font-semibold hidden lg:block">
        ScrapeCom
      </p>
    </Link>
  );
};

export default Logo;
