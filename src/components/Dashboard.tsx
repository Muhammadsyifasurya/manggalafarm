"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Monitoring from "./Monitoring";
import { database } from "@/auth/firebaseConfig";
import { ref, onValue } from "firebase/database";
import { useUser } from "@/context/UserContext";
import Cookies from "js-cookie";

// Definisi tipe data untuk sensor
interface KekeruhanData {
  katupWadahPakan: string;
  kekeruhanAir: string;
  nilaiNTU: number;
  pompaBuang: string;
  pompaIsi: string;
}

interface UltrasonicData {
  kapasitasPakan: string;
}

interface SensorsData {
  kekeruhan: KekeruhanData;
  ultrasonic: UltrasonicData;
}

const Dashboard = () => {
  const [sensorData, setSensorData] = useState<SensorsData | null>(null);
  const [checkoutData, setCheckoutData] = useState(null);
  const { user } = useUser();

  useEffect(() => {
    const data = Cookies.get("checkoutData");
    if (data) {
      setCheckoutData(JSON.parse(data)); // Ubah kembali ke objek
    }
  }, []);

  useEffect(() => {
    const sensorsRef = ref(database, "sensors");
    onValue(sensorsRef, (snapshot) => {
      const data = snapshot.val();
      console.log(data);
      // Simpan data ke state
      setSensorData(data);
    });
  }, []);

  return (
    <div>
      {user && checkoutData ? (
        <>
          <div className="flex items-center ml-24  3xl:ml-[150px] gap-7 pt-[100px] ">
            <Image src="/fish.svg" width={100} height={120} alt="icon ikan" />
            <h1 className="text-5xl text-[#5B8982]">Pantau Kolam</h1>
          </div>
          <div className="mx-[100px] 3xl:mx-[300px] mt-10">
            <div className="flex flex-wrap gap-4 justify-between">
              <div className="bg-white rounded-3xl shadow-[0px_4px_16px_rgba(0,0,0,0.1)] p-4 w-[270px] flex flex-col items-center justify-center h-[129px]">
                <p className="text-gray-500 text-sm mb-1">Status Air</p>
                <h2 className="text-2xl font-semibold text-[#27445D]">
                  {sensorData?.kekeruhan.kekeruhanAir}
                </h2>
              </div>
              <div className="bg-white rounded-3xl shadow-[0px_4px_16px_rgba(0,0,0,0.1)] p-4 w-[270px] flex flex-col items-center justify-center h-[129px]">
                <p className="text-gray-500 text-sm mb-1">Status Pakan</p>
                <h2 className="text-2xl font-semibold text-[#27445D]">
                  {sensorData?.ultrasonic.kapasitasPakan}
                </h2>
              </div>
              <div className="bg-white rounded-3xl shadow-[0px_4px_16px_rgba(0,0,0,0.1)] p-4 w-[270px] flex flex-col items-center justify-center h-[129px]">
                <p className="text-gray-500 text-sm mb-1">
                  Status Pompa (Buang)
                </p>
                <h2 className="text-2xl font-semibold text-[#27445D]">
                  {sensorData?.kekeruhan.pompaBuang}
                </h2>
              </div>
              <div className="bg-white rounded-3xl shadow-[0px_4px_16px_rgba(0,0,0,0.1)] p-4 w-[270px] flex flex-col items-center justify-center h-[129px]">
                <p className="text-gray-500 text-sm mb-1">Status Pompa (Isi)</p>
                <h2 className="text-2xl font-semibold text-[#27445D]">
                  {sensorData?.kekeruhan.pompaIsi}
                </h2>
              </div>
              <div className="bg-white rounded-3xl shadow-[0px_4px_16px_rgba(0,0,0,0.1)] p-4 w-[270px] flex flex-col items-center justify-center h-[129px]">
                <p className="text-gray-500 text-sm mb-1">Proses</p>
                <h2 className="text-2xl font-semibold text-[#27445D]">
                  Jernih
                </h2>
              </div>
              <div className="bg-white rounded-3xl shadow-[0px_4px_16px_rgba(0,0,0,0.1)] p-4 w-[270px] flex flex-col items-center justify-center h-[129px]">
                <p className="text-gray-500 text-sm mb-1">Waktu</p>
                <h2 className="text-2xl font-semibold text-[#27445D]">14.32</h2>
                <p className="text-xs text-gray-500">Selasa, 12 Maret 2025</p>
              </div>
              <div className="bg-white rounded-3xl shadow-[0px_4px_16px_rgba(0,0,0,0.1)] p-4 w-[270px] flex flex-col items-center justify-center h-[129px]">
                <p className="text-gray-500 text-sm mb-1">Estimasi Panen</p>
                <h2 className="text-2xl font-semibold text-[#27445D]">
                  180 Hari
                </h2>
              </div>
              <div className="bg-white rounded-3xl shadow-[0px_4px_16px_rgba(0,0,0,0.1)] p-4 w-[270px] flex flex-col items-center justify-center h-[129px]">
                <p className="text-gray-500 text-sm mb-1">Klasifikasi Kolam</p>
                <h2 className="text-2xl font-semibold text-[#27445D]">
                  {sensorData?.kekeruhan.katupWadahPakan}
                </h2>
              </div>
            </div>
          </div>
          <Monitoring ntu={sensorData?.kekeruhan.nilaiNTU ?? 0} />
        </>
      ) : null}
    </div>
  );
};

export default Dashboard;
