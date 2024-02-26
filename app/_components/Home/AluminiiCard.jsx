import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import React from "react";

const AluminiiCard = ({card}) => {
    const truncateText = (text, maxLength) => {
        if (text.length <= maxLength) {
            return text;
        }
        return text.substring(0, maxLength) + "...";
    };
  return (
  
      <Card className=" max-w-sm  w-full h-[21rem] rounded-3xl  bg-[#1c1c1c] bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:20px_24px] hover:bg-[#101010] border-gray-900">
        <CardHeader className="p-4 flex items-center mt-0  ">
          {/* {cardHeader}  */}

          <Image
             src={card.imageSrc}
            width={300}
            height={400}
            className=" lg:h-28 md:h-32 h-36 lg:w-28 md:w-32 w-36 rounded-full"
          />
        </CardHeader>

        <CardContent className="   ">
          <div className="w-full flex flex-col lg:text-left text-center">
          <h3 className="text-xl font-semibold text-sky-500">{card.name}</h3>
              <h3 className="mb-2 text-white">{card.position}</h3>
              <p className="lg:text-base text-sm text-justify text-gray-400 md:block  ">
              {truncateText(card.description, 165)}
              </p>
          </div>
        </CardContent>
        {/* <CardFooter className="  mb-2 flex justify-end"> <IoSettingsOutline className=" mb-2  text-2xl text-white" /></CardFooter> */}
      </Card>
  );
};

export default AluminiiCard;
