"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa"; // Ikon tambahan
import { register } from "@/auth/auth"; // Sesuaikan path dengan fungsi registrasi

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const router = useRouter();

  const handleRegister = async () => {
    try {
      const user = await register(name, email, password);
      alert(`Registrasi berhasil! Selamat datang, ${user.name}`);
      router.push("/login"); // Redirect ke halaman login setelah register
    } catch (error) {
      alert("Gagal registrasi. Coba lagi.");
      console.log(error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Register
        </h2>
        <p className="text-sm text-gray-500 text-center mb-6">
          Buat akun baru Anda
        </p>

        <div className="space-y-4">
          {/* Input Nama */}
          <div className="flex items-center border rounded-lg px-3 py-2 bg-gray-50">
            <FaUser className="text-gray-400" />
            <input
              type="text"
              placeholder="Nama Lengkap"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-transparent outline-none px-2 text-gray-700"
            />
          </div>

          {/* Input Email */}
          <div className="flex items-center border rounded-lg px-3 py-2 bg-gray-50">
            <FaEnvelope className="text-gray-400" />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-transparent outline-none px-2 text-gray-700"
            />
          </div>

          {/* Input Password */}
          <div className="flex items-center border rounded-lg px-3 py-2 bg-gray-50">
            <FaLock className="text-gray-400" />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-transparent outline-none px-2 text-gray-700"
            />
          </div>

          {/* Tombol Register */}
          <button
            onClick={handleRegister}
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Register
          </button>
        </div>

        <p className="text-sm text-gray-500 text-center mt-4">
          Sudah punya akun?{" "}
          <a href="/login" className="text-blue-500 hover:underline">
            Login di sini
          </a>
        </p>
      </div>
    </div>
  );
}
