"use client";
import React, { useState } from "react";
import { useUser } from "@/context/UserContext";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

const Checkout = () => {
  const { selectedPaket } = useUser();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  const handlebayar = () => {
    setIsModalOpen(false);
    router.push("/");
  };

  const handleCheckout = () => {
    // Simpan data checkout ke cookies
    const checkoutData = {
      name: selectedPaket?.name,
      harga: selectedPaket?.data.harga,
      diameter: selectedPaket?.data.diameter,
      tinggi: selectedPaket?.data.tinggi,
      jumlahBibit: selectedPaket?.data.jumlahBibit,
      estimasiKeuntungan: selectedPaket?.data.estimasiKeuntungan,
    };

    Cookies.set("checkoutData", JSON.stringify(checkoutData), { expires: 1 }); // Simpan 1 hari

    // Tampilkan modal
    setIsModalOpen(true);
  };
  // useEffect(() => {
  //   // Mengambil data paket yang dipilih dari state atau localStorage
  //   const selectedData = JSON.parse(
  //     localStorage.getItem("selectedPackage") || "null"
  //   );
  //   if (selectedData) {
  //     setSelectedPaket(selectedData);
  //   } else {
  //     router.push("/"); // Arahkan kembali jika tidak ada data paket
  //   }
  // }, [setSelectedPaket, router]);

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-bold text-gray-800">
        Halaman Checkout
      </h1>
      {selectedPaket ? (
        <div className="mt-6 bg-white shadow-lg rounded-lg p-6 border border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-900">
            {selectedPaket.name}
          </h2>
          <div className="grid grid-cols-2 gap-4 mt-4 text-gray-700">
            <p className="font-medium">Harga:</p>
            <p className="text-right font-semibold">
              Rp. {selectedPaket.data.harga.toLocaleString()},-
            </p>

            <p className="font-medium">Diameter Kolam:</p>
            <p className="text-right">{selectedPaket.data.diameter} cm</p>

            <p className="font-medium">Tinggi Kolam:</p>
            <p className="text-right">{selectedPaket.data.tinggi} cm</p>

            <p className="font-medium">Jumlah Bibit:</p>
            <p className="text-right">{selectedPaket.data.jumlahBibit} Ekor</p>

            <p className="font-medium">Estimasi Keuntungan:</p>
            <p className="text-right font-semibold text-green-600">
              Rp. {selectedPaket.data.estimasiKeuntungan.toLocaleString()},-
            </p>
          </div>

          <button
            className="mt-6 w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition"
            onClick={handleCheckout}
          >
            Checkout
          </button>
        </div>
      ) : (
        <p className="text-center text-gray-500 mt-4">Memuat data paket...</p>
      )}

      {/* Modal Pembayaran Berhasil */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-80 text-center">
            <h2 className="text-xl font-semibold text-gray-900">
              Pembayaran Berhasil!
            </h2>
            <p className="text-gray-600 mt-2">
              Terima kasih telah melakukan pembelian.
            </p>
            <button
              className="mt-4 bg-teal-600 hover:bg-teal-700 text-white py-2 px-6 rounded-lg"
              onClick={handlebayar}
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;
