"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FaUser, FaLock } from "react-icons/fa"; // Tambahkan ikon user & lock
import Cookies from "js-cookie"; // Impor js-cookie
import { useUser } from "@/context/UserContext";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const { logan } = useUser();

  const handleLogin = async () => {
    try {
      const auth = getAuth();
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user; // Firebase user object

      // Format data user agar cocok dengan context
      const userData = {
        email: user.email,
        uid: user.uid,
        displayName: user.displayName || null,
      };

      // Simpan informasi user ke cookies
      Cookies.set("user", JSON.stringify(userData), { expires: 7 }); // Menyimpan selama 7 hari
      logan(userData);

      router.push("/");
    } catch (error) {
      console.log(error);
      alert("Gagal login. Periksa kembali email dan password.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center text-gray-800">Login</h2>
        <p className="text-sm text-gray-500 text-center mb-6">
          Masuk ke akun Anda
        </p>

        <div className="space-y-4">
          {/* Input Email */}
          <div className="flex items-center border rounded-lg px-3 py-2 bg-gray-50">
            <FaUser className="text-gray-400" />
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

          {/* Tombol Login */}
          <button
            onClick={handleLogin}
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Login
          </button>
        </div>

        <p className="text-sm text-gray-500 text-center mt-4">
          Belum punya akun?{" "}
          <a href="/register" className="text-blue-500 hover:underline">
            Daftar di sini
          </a>
        </p>
      </div>
    </div>
  );
}
