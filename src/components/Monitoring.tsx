"use client";
// pages/index.js
import { useState } from "react";
import Head from "next/head";
import { Line } from "recharts";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function Home() {
  const [timeFilter, setTimeFilter] = useState("1 Hari");

  // Mock data for the area chart
  const turbidityData = [
    { time: "12:00", ntu: 25 },
    { time: "13:00", ntu: 35 },
    { time: "14:00", ntu: 28 },
    { time: "15:00", ntu: 45 },
    { time: "16:00", ntu: 38 },
    { time: "17:00", ntu: 30 },
    { time: "18:00", ntu: 33 },
    { time: "19:00", ntu: 28 },
    { time: "20:00", ntu: 25 },
    { time: "21:00", ntu: 30 },
    { time: "22:00", ntu: 38 },
  ];

  return (
    <div className="p-4 mt-7">
      <div className="mx-[280px]">
        <div className="flex justify-between gap-16">
          {/* Left Panel - Turbidity History Chart */}
          <div className="bg-white rounded-xl shadow-[0px_4px_16px_rgba(0,0,0,0.1)] p-4 w-full">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h2 className="text-gray-600 text-sm font-medium">History</h2>
                <p className="text-gray-600 text-sm">Kekeruhan Air</p>
              </div>
              <div className="flex space-x-2">
                <button
                  className={`px-3 py-1 rounded-full text-xs ${
                    timeFilter === "1 Bulan"
                      ? "bg-green-700 text-white"
                      : "bg-gray-100 text-gray-600"
                  }`}
                  onClick={() => setTimeFilter("1 Bulan")}
                >
                  1 Bulan
                </button>
                <button
                  className={`px-3 py-1 rounded-full text-xs ${
                    timeFilter === "1 Minggu"
                      ? "bg-green-700 text-white"
                      : "bg-gray-100 text-gray-600"
                  }`}
                  onClick={() => setTimeFilter("1 Minggu")}
                >
                  1 Minggu
                </button>
                <button
                  className={`px-3 py-1 rounded-full text-xs ${
                    timeFilter === "1 Hari"
                      ? "bg-green-700 text-white"
                      : "bg-gray-100 text-gray-600"
                  }`}
                  onClick={() => setTimeFilter("1 Hari")}
                >
                  1 Hari
                </button>
              </div>
            </div>

            <div className="h-64 relative">
              {/* Current Value Indicator */}
              <div className="absolute top-4 left-1/3 z-10 bg-gray-800 text-white px-2 py-1 rounded text-xs">
                33 NTU
              </div>
              {/* Vertical Line Indicator */}
              <div className="absolute top-0 bottom-0 left-1/3 w-0.5 bg-green-500 z-0"></div>

              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={turbidityData}
                  margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
                >
                  <defs>
                    <linearGradient id="colorNtu" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#4ade80" stopOpacity={0.8} />
                      <stop
                        offset="95%"
                        stopColor="#4ade80"
                        stopOpacity={0.1}
                      />
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="time" tick={{ fontSize: 10 }} />
                  <YAxis
                    domain={[0, 50]}
                    tick={{ fontSize: 10 }}
                    orientation="right"
                  />
                  <CartesianGrid
                    strokeDasharray="3 3"
                    vertical={false}
                    opacity={0.2}
                  />
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey="ntu"
                    stroke="#4ade80"
                    fillOpacity={1}
                    fill="url(#colorNtu)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            <div className="flex justify-between text-xs text-gray-500 mt-2">
              <div className="flex items-center">
                <span className="w-3 h-3 rounded-full bg-blue-900 inline-block mr-1"></span>
                <span>0-49 NTU</span>
              </div>
              <div className="flex items-center">
                <span className="w-3 h-3 rounded-full bg-green-600 inline-block mr-1"></span>
                <span>Jernih</span>
              </div>
            </div>
          </div>

          {/* Right Panel - Current Turbidity Gauge */}
          <div className="bg-white w-[440px] rounded-xl shadow-[0px_4px_16px_rgba(0,0,0,0.1)] p-4">
            <div className="mb-2">
              <h2 className="text-gray-600 text-sm font-medium">NTU</h2>
              <p className="text-gray-600 text-sm">
                Nephelometric Turbidity Unit
              </p>
            </div>

            <div className="flex justify-center items-center h-64 relative">
              {/* Simplified gauge visualization */}
              <div className="w-48 h-48 rounded-full bg-gray-100 relative flex items-center justify-center">
                {/* Gauge arc - left side */}
                <div className="absolute -left-4 top-1/4 w-16 h-24 bg-green-200 rounded-l-full"></div>
                {/* Gauge arc - right side */}
                <div className="absolute -right-4 top-1/4 w-16 h-24 bg-green-600 rounded-r-full"></div>

                {/* Current value */}
                <div className="text-5xl font-bold text-gray-800 z-10">100</div>
              </div>
            </div>

            <div className="flex justify-between text-xs text-gray-500 mt-2">
              <div className="flex items-center">
                <span className="w-3 h-3 rounded-full bg-blue-900 inline-block mr-1"></span>
                <span>0-49 NTU</span>
              </div>
              <div className="flex items-center">
                <span className="w-3 h-3 rounded-full bg-green-600 inline-block mr-1"></span>
                <span>49-180 NTU</span>
              </div>
              <div className="flex items-center">
                <span className="w-3 h-3 rounded-full bg-yellow-600 inline-block mr-1"></span>
                <span>Keruh</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
