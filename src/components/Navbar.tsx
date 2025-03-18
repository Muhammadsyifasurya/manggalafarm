"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useUser } from "@/context/UserContext";

const Navbar = () => {
  const { user, logout } = useUser();
  return (
    <nav className="fixed flex justify-between px-[150px] h-[80px] items-center shadow-md w-full z-30 bg-white">
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
          {/* Menampilkan profile dan logout hanya jika username ada */}
          {user ? (
            <>
              <li onClick={logout} className="flex items-center gap-2">
                <Image
                  src="/ic_profile.svg"
                  height={35}
                  width={35}
                  alt="icon profile"
                />
                <button className="text-red-500 hover:underline cursor-pointer">
                  Logout
                </button>
              </li>
            </>
          ) : (
            // Jika tidak ada username, tampilkan link login
            <li className="hover:underline hover:text-[#71BBB2]">
              <Link href="/login" className="flex items-center gap-3">
                <Image
                  src="/ic_profile.svg"
                  height={35}
                  width={35}
                  alt="icon profile"
                />
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
