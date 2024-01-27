import Navbar from "../_components/Navbar";

export default function Section({children}){
    return (
        <>
        <Navbar/>
            {children}
        </>
    )
}