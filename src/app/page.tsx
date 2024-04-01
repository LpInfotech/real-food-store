import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Products from "./components/Products/Page";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4">
        <Products />
      </div>
      <Footer />
    </div>
  );
}
