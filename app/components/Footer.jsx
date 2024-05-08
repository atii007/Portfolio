import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container py-10 lg:px-12 flex justify-between">
        <Link
          href={"/"}
          className="text-2xl md:text-5xl text-white font-semibold z-10"
        >
          <Image
            src="/images/logo-dark.png"
            alt="logo"
            width={100}
            height={50}
          />
        </Link>
        <p className="text-slate-600">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
