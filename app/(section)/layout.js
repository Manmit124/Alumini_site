import Footer from "../_components/Footer";
import StarCanvas from "../_components/Home/StarBackground";
import Navbar from "../_components/Navbar";

export default function Section({children}){
    return (
        <>
    

     
      <Navbar/>
        {/* <StarCanvas/> */}
            {children}
            <Footer/>
        </>
    )
}