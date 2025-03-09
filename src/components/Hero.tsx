import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex justify-center gap-52 z-10 h-screen items-center">
      <div className="w-[500px] h-fit">
        <h2 className="text-[#71BBB2] font-black text-xl">
          Welcome back, User!
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
          <button className="py-2 px-4 border rounded-4xl">
            Coba Sekarang
          </button>
          <button className="py-2 px-4 border rounded-4xl">Login</button>
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
