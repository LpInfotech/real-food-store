import Footer from "../ui/Footer";
import Navbar from "../ui/Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    // <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
    //   <div className="flex-grow p-6 md:overflow-y-auto md:p-12"></div>
    // </div>

    <div className="flex flex-col h-full">
      <Navbar />
      <div className="container mx-auto p-10">{children}</div>
      <Footer />
    </div>
  );
}
