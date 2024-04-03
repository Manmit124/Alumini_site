import SideNav from "../_components/Dashboard/SideNav";
import Footer from "../_components/Footer";
import Navbar from "../_components/Navbar";

export default function Section({ children }) {
  return (
    <>
      <Navbar />
      {/* <StarCanvas/> */}
      <div className=" flex relative">
        <SideNav />
        <div className=" w-full ">{children}</div>
      </div>
      <Footer />
    </>
  );
}
