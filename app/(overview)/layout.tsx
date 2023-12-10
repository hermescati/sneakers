import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <div className="w-full md:mx-auto md:w-11/12 lg:w-10/12">
        <Navbar />
        {children}
      </div>
      <Footer />
    </main>
  );
}
