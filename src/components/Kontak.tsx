import React from "react";
import Image from "next/image";
import Link from "next/link";

const Kontak = () => {
  return (
    <div>
    
      <div className="bg-[#27445D] w-full h-[340px] mt-6 flex flex-col items-center justify-start">
      <div className="flex items-center justify-center gap-2 pt-[100px] ">
        <Image src="/fish.svg" width={100} height={120} alt="icon ikan" />
        <h1 className="text-5xl text-[#5B8982]">Kontak Kami</h1>
      </div>
        <p className="text-xl text-white mt-6 max-w-4xl text-center">
          Kami siap membantu Anda! Jika Anda memiliki pertanyaan seputar
          penyewaan kolam, fitur monitoring IoT, atau layanan lainnya, jangan
          ragu untuk menghubungi kami melalui kontak berikut:
        </p>
        <div>
          <ul className="flex gap-20">
            <li>
              <Link href="https"></Link>
            </li>
            <li>
              <Link href="https"></Link>
            </li>
            <li>
              <Link href="https"></Link>
            </li>
            <li>
              <Link href="https"></Link>
            </li>
            <li>
              <Link href="https"></Link>
            </li>
            <li>
              <Link href="https"></Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Kontak;
