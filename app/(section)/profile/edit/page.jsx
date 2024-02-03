"use client";
import WorkExperienceForm from "@/app/_components/profile/WorkExperince";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/components/ui/use-toast";
import ImageUploader from "@/utils/Imageuploader";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
const fetchUserProfile = async (setters) => {
  try {
    const response = await fetch("/api/profile");
    if (response.ok) {
      const data = await response.json();
      setters.forEach(({ state, setter, key }) => setter(data[key] || state));
    } else {
      console.error(
        "Error fetching updated profile data:",
        response.status,
        response.statusText
      );
    }
  } catch (error) {
    console.error("Error fetching updated profile data:", error);
  }
};

const Page = () => {
  const [FullName, setFullName] = useState();
  const [formData, setformData] = useState({});
  const [GraduationYear, setGraduationYear] = useState("");
  const [MobileNumber, setMobileNumber] = useState();
  const [Degree, setDegree] = useState("");
  const [Branch, setBranch] = useState();
  const [workExperiences, setWorkExperiences] = useState([]);
  const [image, setimage] = useState(undefined);
  const session = useSession();
  const userData = session.data?.user;
  const { status } = session;

  const setImageUrl = (url) => {
    setformData((prevFormData) => ({ ...prevFormData, profilePicture: url }));
  };

  const handleProfilesubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/profile", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        FullName: FullName,
        GraduationYear: GraduationYear,
        MobileNumber: MobileNumber,
        Degree: Degree,
        Branch: Branch,
        image: formData.profilePicture,
      }),
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
    console.log(session)
    if (status === "authenticated") {
      fetchUserProfile([
        { state: FullName, setter: setFullName, key: "FullName" },
        {
          state: GraduationYear,
          setter: setGraduationYear,
          key: "GraduationYear",
        },
        { state: MobileNumber, setter: setMobileNumber, key: "MobileNumber" },
        { state: Degree, setter: setDegree, key: "Degree" },
        { state: Branch, setter: setBranch, key: "Branch" },
        { state: image, setter: setimage, key: "image" },
      ]);
      
    }
  }, [session, status]);

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
                value={FullName}
                onChange={(e) => setFullName(e.target.value)}
                type="text"
                placeholder="Enter your full name"
                className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <Label className="block mb-1  leading-normal text-muted-foreground  sm:leading-7">
                Upload Your Profile Photo
              </Label>
              <ImageUploader
                image={image}
                setImageUrl={setImageUrl}
                setimage={setimage}
              />
            </div>
            <div className="mb-4">
              <Label className="block leading-normal text-muted-foreground  sm:leading-7 mt-2 mb-2">
                Graduation Year
              </Label>
              <Input
                value={GraduationYear}
                onChange={(e) => setGraduationYear(e.target.value)}
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
                value={MobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
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
                name="degree"
                value={Degree}
                onChange={(e) => setDegree(e.target.value)}
                className=" p-2 rounded-md"
              >
                <option value="">Degree</option>
                <option value="B.Tech">B.Tech</option>
                <option value="B.E">B.E</option>
              </select>
              <Label className="block mb-1  leading-normal text-muted-foreground  sm:leading-7">
                Selected Degree is {Degree}
              </Label>
            </div>
            <div>
              <Label className="block mb-1  leading-normal text-muted-foreground  sm:leading-7">
                Select Your Branch
              </Label>
              <div className="flex  flex-col  cursor-pointer ">
                <select
                  name="degree"
                  onChange={(e) => setBranch(e.target.value)}
                  value={Branch}
                  className=" p-2 rounded-md"
                >
                  <option value="">Branch</option>
                  <option value="Computer Science">Computer Science Eng</option>
                  <option value="ENTC">ENTC</option>
                  <option value="Electrical">Electrical</option>
                  <option value="Mechanical">Mechanical</option>
                  <option value="Civil">Civil</option>
                </select>
                <Label className="block mb-1  leading-normal text-muted-foreground  sm:leading-7">
                  Selected Branch is {Branch}
                </Label>
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
