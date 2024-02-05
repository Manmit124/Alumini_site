"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/components/ui/use-toast";
import ImageUploader from "@/utils/Imageuploader";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";

const Page = () => {
 
  const [formData, setformData] = useState({
    FullName: "",
    GraduationYear: "",
    MobileNumber: "",
    Degree: "",
    Branch: "",
    image: "",
  });


  const [image, setimage] = useState(undefined);
  const session = useSession();
  const userData = session.data?.user;
  const { status } = session;

  const setImageUrl = (url) => {
    setformData((prevFormData) => ({ ...prevFormData, image: url }));
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setformData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleProfilesubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/profile", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    if (response.ok) {
      return toast({
        title: "Your Profile has been updated successfully",
        variant: "outline",
      });
    } else {
      return toast({
        title: "Please try again",
        variant: "desctructive",
      });
    }
  };
  useEffect(() => {
    console.log(session);
    if (status === "authenticated") {
      fetchUserProfile();
    }
  }, [status]);
  const fetchUserProfile = async () => {
    try {
      const response = await fetch("/api/profile");
      if (response.ok) {
        const data = await response.json();
        setformData((prevData) => ({ ...prevData, ...data }));
      } else {
        console.log("Eror fetching the upldated image ");
      }
    } catch (error) {
      console.error("Error fetching updated profile data:", error);
    }
  };

  // const validateMobileNumber = (value) => {

  //   return /^\d{10}$/.test(value);
  // };
  // const handleSaveWorkExperience = (formData) => {
  //   setWorkExperiences([...workExperiences, formData]);
  // };

  return (
    <div className="">
      <form className=" max-w-xl mx-auto  " onSubmit={handleProfilesubmit}>
        <div className="flex flex-col  lg:flex-row gap-2 ">
          <div className="grow p-3">
            <div className="mb-4 ">
              <Label className="block mb-1  leading-normal text-muted-foreground  sm:leading-7">
                Enter your Full Name
              </Label>
              <Input
                value={formData.FullName}
                onChange={handleChange}
                type="text"
                name="FullName"
                id="FullName"
                placeholder="Enter your full name"
                className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <Label className="block mb-1  leading-normal text-muted-foreground  sm:leading-7">
                Upload Your Profile Photo
              </Label>
              <ImageUploader
                image={formData.image}
                setImageUrl={setImageUrl}
                setimage={setimage}
              />
            </div>
            <div className="mb-4">
              <Label className="block leading-normal text-muted-foreground  sm:leading-7 mt-2 mb-2">
                Graduation Year
              </Label>
              <Input
                value={formData.GraduationYear}
                onChange={handleChange}
                name="GraduationYear"
                type="number"
                placeholder="Enter your Graduation Year"
                className="w-full border border-gray-300  rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className=" mb-4">
              <Label
                htmlFor="contactInfo"
                className="block mb-1 leading-normal text-muted-foreground sm:leading-7"
              >
                Mobile Number
              </Label>
              <Input
                id="contactInfo"
                value={formData.MobileNumber}
                onChange={handleChange}
                name="MobileNumber"
                type="text"
                placeholder="Enter your Mobile Number"
                className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
            <Label className="block mb-1  leading-normal text-muted-foreground  sm:leading-7">
              Select Your Degree
            </Label>
            <div className="flex  flex-col ">
              <select
                name="Degree"
                value={formData.Degree}
                onChange={handleChange}
                className=" p-2 rounded-md"
              >
                <option value="">Degree</option>
                <option value="B.Tech">B.Tech</option>
                <option value="B.E">B.E</option>
              </select>
              {formData.Degree && (
                <Label className="block mb-1  leading-normal text-muted-foreground  sm:leading-7">
                  Selected Degree is {formData.Degree}
                </Label>
              )}
            </div>
            <div>
              <Label className="block mb-1  leading-normal text-muted-foreground  sm:leading-7">
                Select Your Branch
              </Label>
              <div className="flex  flex-col  cursor-pointer ">
                <select
                  name="Branch"
                  value={formData.Branch}
                  onChange={handleChange}
                  className=" p-2 rounded-md"
                >
                  <option value="">Branch</option>
                  <option value="Computer Science">Computer Science Eng</option>
                  <option value="ENTC">ENTC</option>
                  <option value="Electrical">Electrical</option>
                  <option value="Mechanical">Mechanical</option>
                  <option value="Civil">Civil</option>
                </select>
                {formData.Branch && (
                  <Label className="block mb-1  leading-normal text-muted-foreground  sm:leading-7">
                    Selected Branch is {formData.Branch}
                  </Label>
                )}
              </div>
              <div></div>
            </div>
            <div>
              <Button type="submit">Submit</Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Page;
