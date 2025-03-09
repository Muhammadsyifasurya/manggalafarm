import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed flex justify-between px-[150px] h-[80px] items-center shadow-2xl w-full z-30 bg-white">
      <h2 className="font-bold text-2xl text-[#3A546B]">Manggala Farm</h2>
      <div>
        <ul className="flex justify-between gap-6 items-center font-semibold text-[#3A546B]">
          <li className="hover:underline hover:text-[#71BBB2]">
            <a href="#">Beranda</a>
          </li>
          <li className="hover:underline hover:text-[#71BBB2]">
            <a href="#manajemen">Manajemen Kolam</a>
          </li>
          <li className="hover:underline hover:text-[#71BBB2]">
            <a href="#">Kontak</a>
          </li>
          <li className="hover:underline hover:text-[#71BBB2]">
            <a href="#">Tentang Kami</a>
          </li>
          <li className="cursor-pointer">
            <Link href="/login">
              <Image
                src="/ic_profile.svg"
                height={35}
                width={35}
                alt="icon profile"
              />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
