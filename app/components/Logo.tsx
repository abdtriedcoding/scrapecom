import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <div>
      <Link className="hidden sm:block" href="/">
        <Image src="/logo.svg" width={150} height={150} alt="notionverse" />
      </Link>

      <Link className="sm:hidden" href="/">
        <Image src="/logo2.svg" width={48} height={48} alt="notionverse" />
      </Link>
    </div>
  );
};

export default Logo;
