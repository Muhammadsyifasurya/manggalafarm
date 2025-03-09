"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { database } from "@/auth/firebaseConfig";
import { ref, onValue } from "firebase/database";

interface CategoryProps {
  name: string;
  data: {
    diameter: number;
    estimasiKeuntungan: number;
    estimasiPakan: number;
    estimasiPanen: number;
    estimasiTotalBobot: number;
    harga: number;
    jumlahBibit: number;
    targetBobot: number;
    tinggi: number;
  };
}

const ManajemenKolam = () => {
  const [categories, setCategories] = useState<CategoryProps[]>([]);

  useEffect(() => {
    // Mengambil data dari Realtime Database di Firebase
    const klasifikasiRef = ref(database, "klasifikasi");
    onValue(klasifikasiRef, (snapshot) => {
      const data = snapshot.val();
      console.log(data);
      if (data) {
        const formattedData = Object.keys(data).map((key) => ({
          name: key,
          data: data[key],
        }));
        setCategories(formattedData);
      }
    });
  }, []);

  return (
    <div className="h-screen" id="manajemen">
      <div className="flex items-center ml-[150px] gap-7 pt-[100px]">
        <Image src="/fish.svg" width={120} height={120} alt="icon ikan" />
        <h1 className="text-5xl text-[#5B8982]">Reservasi Kolam</h1>
      </div>
      <div className="flex justify-between mx-[300px] mt-7">
        {categories.length > 0 ? (
          categories.map((category, index) => (
            <div
              className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-gray-50 border border-[#5B8982]"
              key={index}
            >
              <Image
                src="/kolam.svg"
                alt="Fish Pond"
                width={400}
                height={250}
                className="p-2"
              />
              <div className="px-6 py-4 ">
                <p className="text-center text-[#304C64] text-xl font-semibold mb-1">
                  "{" "}
                  {category.name.charAt(0).toUpperCase() +
                    category.name.slice(1)}
                  "
                </p>
                <p className="text-center  text-[#304C64] text-4xl font-bold">
                  Rp. {category.data.harga.toLocaleString()},-
                </p>
                <div className="flex justify-between text-[#27445D] mb-2 mt-6">
                  <span>-Diameter Kolam</span>
                  <span>: {category.data.diameter}cm</span>
                </div>
                <div className="flex justify-between text-[#27445D] mb-2">
                  <span>-Tinggi Kolam</span>
                  <span>: {category.data.tinggi}cm</span>
                </div>
                <div className="flex justify-between text-[#27445D] mb-2">
                  <span>-Jumlah Bibit</span>
                  <span>: {category.data.jumlahBibit} Ekor</span>
                </div>
                <div className="flex justify-between text-[#27445D] mb-2">
                  <span>-Target Bobot Per Ekor</span>
                  <span>: {category.data.targetBobot}g</span>
                </div>
                <div className="flex justify-between text-[#27445D] mb-2">
                  <span>-Estimasi Pakan</span>
                  <span>: {category.data.estimasiPakan}kg</span>
                </div>
                <div className="flex justify-between text-[#27445D] mb-2">
                  <span>-Estimasi Panen</span>
                  <span>: {category.data.estimasiPanen} Hari</span>
                </div>
                <div className="flex justify-between text-[#27445D] mb-2">
                  <span>-Estimasi Total Bobot</span>
                  <span>: {category.data.estimasiTotalBobot} kg</span>
                </div>
                <div className="flex justify-between text-[#27445D] mb-2">
                  <span>-Estimasi Keuntungan</span>
                  <span>
                    : Rp. {category.data.estimasiKeuntungan.toLocaleString()} ,-
                  </span>
                </div>
                <div className="flex w-full justify-center">
                  <button className="bg-teal-700 hover:bg-teal-800 text-white font-bold text-lg text-center rounded-2xl py-3 px-14 mt-5">
                    Pilih Paket
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">Data tidak tersedia.</p>
        )}
      </div>
    </div>
  );
};

export default ManajemenKolam;
