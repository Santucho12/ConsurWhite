import { Navbar } from "@/components/layout/Navbar";
import { JoinUs } from "@/components/sections/JoinUs";
import { Footer } from "@/components/layout/Footer";

export default function PostulatePage() {
  return (
    <main className="relative min-h-screen pt-24 -cw-white">
      <Navbar />
      <div className="py-20">
        <JoinUs />
      </div>
      <Footer />
    </main>
  );
}
