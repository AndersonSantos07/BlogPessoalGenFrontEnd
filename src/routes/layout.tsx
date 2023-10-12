import Navbar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import { ReactNode } from "react";

function Layout({ children }: {children: ReactNode}) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
