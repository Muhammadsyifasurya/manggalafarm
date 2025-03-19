// middleware.ts (untuk Next.js 13+ atau versi terbaru)
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const user = req.cookies.get("user"); // ambil token dari cookies

  // Cek jika token tidak ada, berarti belum login
  if (!user) {
    // Jika belum login, arahkan ke halaman login
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // Jika sudah login, biarkan user melanjutkan akses
  return NextResponse.next();
}

// Tentukan path yang akan dilindungi, misalnya untuk halaman utama
export const config = {
  matcher: ["/checkout"], // Sesuaikan dengan route yang ingin dilindungi
};
