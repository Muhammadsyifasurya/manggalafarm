import React from "react";
import Image from "next/image";
import Monitoring from "./Monitoring";
import TablePakan from "./TablePakan";

const Dashboard = () => {
  return (
    <div>
      <div className="flex items-center ml-[150px] gap-7 pt-[100px] ">
        <Image src="/fish.svg" width={120} height={120} alt="icon ikan" />
        <h1 className="text-5xl text-[#5B8982]">Pantau Kolam</h1>
      </div>
      <div className="mx-[300px] mt-10">
        <div className="flex flex-wrap gap-4 justify-between">
          <div className="bg-white rounded-3xl shadow-[0px_4px_16px_rgba(0,0,0,0.1)] p-4 w-[270px] flex flex-col items-center justify-center h-[129px]">
            <p className="text-gray-500 text-sm mb-1">Status Air</p>
            <h2 className="text-2xl font-semibold text-[#27445D]">Jernih</h2>
          </div>
          <div className="bg-white rounded-3xl shadow-[0px_4px_16px_rgba(0,0,0,0.1)] p-4 w-[270px] flex flex-col items-center justify-center h-[129px]">
            <p className="text-gray-500 text-sm mb-1">Status Pakan</p>
            <h2 className="text-2xl font-semibold text-[#27445D]">Tersedia</h2>
          </div>
          <div className="bg-white rounded-3xl shadow-[0px_4px_16px_rgba(0,0,0,0.1)] p-4 w-[270px] flex flex-col items-center justify-center h-[129px]">
            <p className="text-gray-500 text-sm mb-1">Status Pompa (Buang)</p>
            <h2 className="text-2xl font-semibold text-[#27445D]">Off</h2>
          </div>
          <div className="bg-white rounded-3xl shadow-[0px_4px_16px_rgba(0,0,0,0.1)] p-4 w-[270px] flex flex-col items-center justify-center h-[129px]">
            <p className="text-gray-500 text-sm mb-1">Status Pompa (Isi)</p>
            <h2 className="text-2xl font-semibold text-[#27445D]">On</h2>
          </div>
          <div className="bg-white rounded-3xl shadow-[0px_4px_16px_rgba(0,0,0,0.1)] p-4 w-[270px] flex flex-col items-center justify-center h-[129px]">
            <p className="text-gray-500 text-sm mb-1">Proses</p>
            <h2 className="text-2xl font-semibold text-[#27445D]">Jernih</h2>
          </div>
          <div className="bg-white rounded-3xl shadow-[0px_4px_16px_rgba(0,0,0,0.1)] p-4 w-[270px] flex flex-col items-center justify-center h-[129px]">
            <p className="text-gray-500 text-sm mb-1">Waktu</p>
            <h2 className="text-2xl font-semibold text-[#27445D]">14.32</h2>
            <p className="text-xs text-gray-500">Selasa, 12 Maret 2025</p>
          </div>
          <div className="bg-white rounded-3xl shadow-[0px_4px_16px_rgba(0,0,0,0.1)] p-4 w-[270px] flex flex-col items-center justify-center h-[129px]">
            <p className="text-gray-500 text-sm mb-1">Estimasi Panen</p>
            <h2 className="text-2xl font-semibold text-[#27445D]">180 Hari</h2>
          </div>
          <div className="bg-white rounded-3xl shadow-[0px_4px_16px_rgba(0,0,0,0.1)] p-4 w-[270px] flex flex-col items-center justify-center h-[129px]">
            <p className="text-gray-500 text-sm mb-1">Klasifikasi Kolam</p>
            <h2 className="text-2xl font-semibold text-[#27445D]">Kolam A</h2>
            <p className="text-xs text-gray-500">Regular</p>
          </div>
        </div>
      </div>
      <Monitoring />
      <TablePakan />
      <TablePakan />
    </div>
  );
};

export default Dashboard;
