"use client";
// pages/index.js
interface Props {
  ntu: number
}

const Monitoring:React.FC<Props> = ({ntu}) => {

  return (
    <div className="p-4 mt-7">
      <div className="mx-[80px]">
        <div className="flex justify-between gap-16">
          {/* Left Panel - Turbidity History Chart */}
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
                <div className="text-5xl font-bold text-gray-800 z-10">{ntu}</div>
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
                <div className="text-5xl font-bold text-gray-800 z-10">{ntu}</div>
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

export default Monitoring;