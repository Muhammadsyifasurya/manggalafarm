import Dashboard from "@/components/Dashboard";
import Hero from "@/components/Hero";
import Kontak from "@/components/Kontak";
import ManajemenKolam from "@/components/ManajemenKolam";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <ManajemenKolam />
      <Dashboard />
      <Kontak />
    </div>
  );
}
