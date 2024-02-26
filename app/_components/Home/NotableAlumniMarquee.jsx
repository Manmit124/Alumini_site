"use client"
import React, { useEffect, useState } from "react";
import AluminiiCard from "./AluminiiCard";
import Marquee from "react-fast-marquee";
import Link from "next/link";
import { RxArrowRight } from "react-icons/rx";

const NotableAlumniMarquee = () => {
    const [screenWidth, setScreenWidth] = useState(getScreenWidth());
    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(getScreenWidth());
        };

        if (typeof window !== 'undefined') {
            window.addEventListener("resize", handleResize);
        }

        return () => {
            if (typeof window !== 'undefined') {
                window.removeEventListener("resize", handleResize);
            }
        };
    }, []);
    function getScreenWidth() {
        if (typeof window !== 'undefined') {
            const width = window.innerWidth
                || document.documentElement.clientWidth
                || document.body.clientWidth;
    
            return width;
        }
        return 0; // or any default value you prefer
    }
  const aluminiCardsData = [
    {
      name: "Manmit Tiwade",
      position: "CEO & founder of SocialHux",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus ullam laborum nam quam id ab, non modi placeat esse, doloremque facere? A, iste sunt quia atque omnis veritatis porro pariatur?",
      imageSrc: "/sliderimages/image1.jpg",
    },
    {
      name: "John Doe",
      position: "CTO at Tech Innovations",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia augue at malesuada ultricies.",
      imageSrc: "/sliderimages/image1.jpg",
    },
    {
      name: "Jane Smith",
      position: "Marketing Director at ABC Corp",
      description:
        "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
      imageSrc: "/sliderimages/image1.jpg",
    },
    {
      name: "David Johnson",
      position: "Lead Developer at XYZ Inc",
      description:
        "Fusce sed nunc nec sem sollicitudin aliquet nec in nunc. Maecenas eleifend consequat ex nec sodales.",
      imageSrc: "/sliderimages/image1.jpg",
    },
    {
      name: "Emily Brown",
      position: "Product Manager at NewTech Solutions",
      description:
        "Quisque vehicula justo id libero facilisis, nec fermentum urna rhoncus. Vivamus ut nisl fermentum, dictum mi sit amet, vehicula purus.",
      imageSrc: "/sliderimages/image1.jpg",
    },
    {
      name: "Michael Lee",
      position: "UI/UX Designer at DesignWorks",
      description:
        "Duis vel purus et arcu faucibus ultrices non ac odio. Ut sodales velit a libero tempor fermentum.",
      imageSrc: "/sliderimages/image1.jpg",
    },
    {
      name: "Sarah Johnson",
      position: "HR Manager at PeopleFirst",
      description:
        "Nam tincidunt neque vitae quam commodo, eu fringilla mauris aliquam. Integer aliquet dui nec mi ullamcorper, vitae placerat libero vehicula.",
      imageSrc: "/sliderimages/image1.jpg",
    },
    {
      name: "Alex Clark",
      position: "Sales Executive at SalesPro",
      description:
        "Nulla facilisi. In at augue auctor, consequat odio in, egestas ante. Duis ullamcorper augue et dolor pharetra tempus.",
      imageSrc: "/sliderimages/image1.jpg",
    },
    {
      name: "Jennifer Martinez",
      position: "Finance Analyst at FinanceFirst",
      description:
        "Donec non feugiat nunc, nec fermentum nisi. Integer et orci sit amet purus tempor fermentum. Nullam vulputate ante vitae tortor blandit, non efficitur nisl interdum.",
      imageSrc: "/sliderimages/image1.jpg",
    },
    {
      name: "Daniel Williams",
      position: "Project Manager at ProjectPro",
      description:
        "Curabitur nec urna vitae nulla ultricies bibendum. Cras vehicula libero a dui convallis, at scelerisque velit vehicula.",
      imageSrc: "/sliderimages/image1.jpg",
    },
  ];

  return (
    <div className=" flex items-center  justify-center text-center gap-3   flex-col">
      <p
        data-aos="fade-up"
        className="lg:text-5xl text-4xl font-semibold pb-10"
      >
        {" "}
        <span className=" text-white">Our Notable</span>{" "}
        <span className="text-sky-500">Alumni</span>
      </p>
    

     
      <Marquee
        speed={70}
        autoFill={true}
        className="   mb-6  "
        pauseOnHover={screenWidth > 768 ? true : false}

      >
        {aluminiCardsData.map((card, index) => (
          <div key={index} className="lg:max-w-lg max-w-md  px-3  overflow-hidden ">
            <AluminiiCard card={card} />
          </div>
        ))}
      </Marquee>
     
      <Marquee
        speed={70}
        autoFill={true}
        className="    "
        direction="right"
        pauseOnHover={screenWidth > 768 ? true : false}

      >
        {aluminiCardsData.map((card, index) => (
          <div key={index} className="lg:max-w-lg max-w-md  px-3  overflow-hidden ">
            <AluminiiCard card={card} />
          </div>
        ))}
      </Marquee>
      <Link href="/notableAlumni" className="flex gap-1 py-3 mt-3 px-8 rounded-xl bg-sky-500 hover:bg-sky-600 hover:scale-105 transition focus:bg-gray-600 text-white font-medium">
                    <button >
                        Explore
                    </button>
                    <RxArrowRight size={24} />
                </Link>
    </div>
  );
};

export default NotableAlumniMarquee;
