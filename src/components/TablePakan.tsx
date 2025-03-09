// components/FeedingHistory.jsx
import React from "react";
import { ChevronDown } from "lucide-react";

const FeedingHistory = () => {
  // Sample data for the feeding history
  const feedingData = [
    {
      id: 1,
      description: "Memberi Pakan",
      time: "08.00",
      date: "15 Maret 2025",
      status: "Berhasil",
    },
    {
      id: 2,
      description: "Memberi Pakan",
      time: "17.00",
      date: "15 Maret 2025",
      status: "Gagal",
    },
    {
      id: 3,
      description: "Memberi Pakan",
      time: "08.00",
      date: "16 Maret 2025",
      status: "Berhasil",
    },
    {
      id: 4,
      description: "Memberi Pakan",
      time: "17.00",
      date: "16 Maret 2025",
      status: "Berhasil",
    },
  ];

  return (
    <div className="bg-white rounded-xl p-6 mx-[300px] shadow-[0px_4px_16px_rgba(0,0,0,0.1)] mt-16">
      {/* Header */}
      <h2 className="text-lg font-medium text-gray-800 mb-4">History Pakan</h2>

      {/* Table */}
      <div className="w-full">
        {/* Column Headers */}
        <div className="grid grid-cols-4 mb-4 text-sm text-gray-500">
          <div className="flex items-center">
            <ChevronDown size={16} className="mr-1" />
            <span>Keterangan</span>
          </div>
          <div className="flex items-center">
            <ChevronDown size={16} className="mr-1" />
            <span>Waktu</span>
          </div>
          <div className="flex items-center">
            <ChevronDown size={16} className="mr-1" />
            <span>Tanggal</span>
          </div>
          <div className="flex items-center">
            <ChevronDown size={16} className="mr-1" />
            <span>Status</span>
          </div>
        </div>

        {/* Data Rows */}
        <div className="space-y-2">
          {feedingData.map((item) => (
            <div
              key={item.id}
              className="grid grid-cols-4 py-3 border-b border-gray-100"
            >
              <div className="text-blue-600 font-medium">
                {item.description}
              </div>
              <div className="text-gray-700">{item.time}</div>
              <div className="text-gray-700">{item.date}</div>
              <div>
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium ${
                    item.status === "Berhasil"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {item.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-6">
        <div className="flex items-center text-sm text-gray-600">
          <span>4</span>
          <ChevronDown size={16} className="ml-1" />
        </div>

        <div className="flex items-center space-x-2">
          <button className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white text-sm">
            1
          </button>
          <button className="flex items-center justify-center w-8 h-8 rounded-full text-gray-500 hover:bg-gray-100 text-sm">
            2
          </button>
          <button className="flex items-center justify-center w-8 h-8 rounded-full text-gray-500 hover:bg-gray-100 text-sm">
            3
          </button>
          <span className="text-gray-400">...</span>
          <button className="flex items-center justify-center w-8 h-8 rounded-full text-gray-500 hover:bg-gray-100 text-sm">
            20
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeedingHistory;
