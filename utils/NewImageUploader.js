import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import React, { useState } from "react";
import { FaUserGraduate } from "react-icons/fa6";

const NewImageUploader = ({ image, setformData }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const setImage = async (file) => {
    let name = "image";
    setformData((prev) => ({
      ...prev,
      [name]: file,
    }));
  };
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(file);
      const { name } = event.target;
      setImage(file);
    }
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file) {
      setSelectedImage(file);
      setImage(file);
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  return (
    <div className="flex gap-3 w-full min-h-24 max-w-lg max-phone:flex-col-reverse items-center">
      <Label
        className=" h-24 flex-none border-2 border-dashed rounded-xl  p-4 text-center cursor-pointer w-3/4 flex justify-center items-center"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        <Input
          type="file"
          accept="image/*"
          id="imageUpload"
          className="hidden"
          name="image"
          onChange={handleImageChange}
        />
        <p className=" text-white">Drag & Drop or Click to Upload Image</p>
      </Label>
      {selectedImage ? (
        <div className="  ">
          <Avatar className="   ">
            <AvatarImage
              src={URL.createObjectURL(selectedImage)}
              className="mb-2 self-center  h-24 "
            />
            <AvatarFallback>Pr</AvatarFallback>
            {/* <Image
 src={URL.createObjectURL(selectedImage)}
width={300}
height={300}
className=" mb-2 self-center "
          /> */}

            {/* variant="rounded"
            src={URL.createObjectURL(selectedImage)}
            className="mb-2 self-center h-24"
            sx={{ width: 100, height: 96, padding: 0 }} */}
          </Avatar>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center">
          {image ? (
            <Avatar>
              <AvatarImage src={image} alt="logo" />
              <AvatarFallback><FaUserGraduate/></AvatarFallback>
            </Avatar>
          ) : (
            <Avatar
              sx={{ width: 100, height: 96, padding: 0 }}
              color="primary"
            >
                 <AvatarFallback><FaUserGraduate  className=" text-2xl"/></AvatarFallback>
            </Avatar>
          )}
        </div>
      )}
    </div>
  );
};

export default NewImageUploader;
