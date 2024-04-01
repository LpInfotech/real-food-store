import Navbar from "./ui/Navbar";
import Footer from "./ui/Footer";
import Products from "./products/page";

export default function Home() {
  return (
    <main className="flex flex-col h-full">
      <Navbar />
      <div className="container mx-auto p-10">
        <Products />
      </div>
      <Footer />
    </main>
  );
}
