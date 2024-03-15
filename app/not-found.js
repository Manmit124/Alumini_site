import Link from "next/link";
import Navbar from "./_components/Navbar";
import { Button } from "@/components/ui/button";
import Footer from "./_components/Footer";

export default function NotFound() {
  return (
    <div>
      <Navbar />
      <section className="page_404">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 ">
              <div className="col-sm-10 col-sm-offset-1  text-center">
                <div className="four_zero_four_bg">
                  <h1 className="text-center ">404</h1>
                </div>

                <div className="contant_box_404">
                  <h3 className="h2">Look like you're lost</h3>

                  <p>the page you are looking for not avaible!</p>
                  <Link href={"/"}>
                    <Button className=" px-2  bg-green-500">Go To Home</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
