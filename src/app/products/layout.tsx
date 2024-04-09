import Footer from "../ui/Footer";
import Navbar from "../ui/Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col h-full">
      <Navbar />
      <div className="container mx-auto xl:p-10 p-5">{children}</div>
      <Footer />
    </div>
  );
}
