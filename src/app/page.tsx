import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProductList from "./components/ProductList";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4">
        <ProductList />
      </div>
      <Footer />
    </div>
  );
}
