"use client";
// pages/index.js
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
interface Props {
  ntu: number;
}

const Monitoring: React.FC<Props> = ({ ntu }) => {
  return (
    <div className="p-4 mt-7">
      <div className="mx-[80px]">
        <div className="flex justify-center gap-16">
          {/* Left Panel - Turbidity History Chart */}
          <div className="bg-white w-[440px] rounded-xl shadow-[0px_4px_16px_rgba(0,0,0,0.1)] p-4">
            <div className="mb-2">
              <h2 className="text-gray-600 text-sm font-medium">NTU</h2>
              <p className="text-gray-600 text-sm">
                Nephelometric Turbidity Unit
              </p>
            </div>

            <div className="flex justify-center items-center h-64 relative">
              {/* Gauge Chart using react-circular-progressbar */}
              <div className="w-48 h-48">
                <CircularProgressbar
                  value={ntu}
                  text={`${ntu}`}
                  maxValue={180} // Sesuaikan dengan rentang NTU
                  styles={{
                    path: { stroke: "#4db8ff", strokeWidth: 10 },
                    trail: { stroke: "#e0e0e0", strokeWidth: 10 },
                    text: {
                      fill: "#333",
                      fontSize: "32px",
                      fontWeight: "bold",
                    },
                  }}
                />
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
          {/* Right Panel - Explanation about NTU */}
          <div className="bg-white w-[440px] rounded-xl shadow-[0px_4px_16px_rgba(0,0,0,0.1)] p-4">
            <h3 className="text-lg font-semibold text-gray-700">
              Apa Itu NTU?
            </h3>
            <p className="text-sm text-gray-600 mt-2 text-justify">
              NTU (Nephelometric Turbidity Unit) adalah satuan yang digunakan
              untuk mengukur kekeruhan air berdasarkan jumlah cahaya yang
              tersebar oleh partikel-partikel dalam air. Semakin tinggi nilai
              NTU, semakin keruh air tersebut. Kekeruhan air dapat dipengaruhi
              oleh berbagai faktor seperti partikel terlarut, mikroorganisme,
              atau bahan kimia.
            </p>
            <p className="text-sm text-gray-600 mt-2 text-justify">
              Pengukuran NTU sering digunakan dalam pengolahan air untuk
              memantau kualitas air, terutama dalam sistem penyediaan air bersih
              dan pengolahan air limbah. Nilai NTU yang tinggi menunjukkan
              kualitas air yang buruk, yang mungkin memerlukan proses pengolahan
              lebih lanjut.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Monitoring;
