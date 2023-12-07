import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import "tailwindcss/tailwind.css";

export default function Home() {
  return (
    <>
      <div className="w-200 sm:w-100 lg:w-1000">
        <NavBar />
        <footer className="bg-gray-300">
          <Footer />
        </footer>
      </div>
    </>
  );
}
