"use client";
import React from "react";
import Image from "next/image";
import { useUser } from "@/context/UserContext";
import { useRouter } from "next/navigation";

const Hero = () => {
  const { username } = useUser();
  const router = useRouter(); // Inisialisasi router

  // Fungsi untuk menangani klik tombol login
  const handleLoginClick = () => {
    router.push("/login"); // Arahkan ke halaman login
  };

  return (
    <div className="flex justify-center gap-52 z-10 h-screen items-center md:pt-[60px]">
      <div className="w-[500px] h-fit">
        <h2 className="text-[#71BBB2] font-black text-xl">
          Welcome back,{" "}
          {username === "admin"
            ? "Admin"
            : username === null
            ? "Guest"
            : username}
          !
        </h2>
        <h1 className="mt-8 font-bold text-5xl text-[#27445D]">
          Temukan Kemudahan Dalam Mengelola Kolam Anda!
        </h1>
        <p className="font-semibold text-2xl mt-6 text-justify">
          Coba sistem manajemen penyewaan kolam kami dan rasakan kemudahan
          mengelola bisnis sewa kolam ikan nila di era digital. Pantau kondisi
          air, atur penyewaan, dan kelola transaksi dengan lebih praktis dan
          transparan!
        </p>
        <div className="flex gap-6 mt-6">
          <button className="py-2 px-4 border rounded-4xl hover:bg-[#27445d] hover:text-white cursor-pointer transition-all ease-in-out duration-300">
            Coba Sekarang
          </button>
          <button
            className="py-2 px-4 border rounded-4xl hover:bg-[#27445d] hover:text-white cursor-pointer transition-all ease-in-out duration-300"
            onClick={handleLoginClick}
          >
            Login
          </button>
        </div>
      </div>
      <div>
        <Image
          src="/background.svg"
          height={557}
          width={557}
          alt="background"
        />
      </div>
    </div>
  );
};

export default Hero;
