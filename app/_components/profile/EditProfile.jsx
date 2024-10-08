"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import React, { use, useEffect, useState } from "react";
import WorkExperince from "./WorkExperince";
import { Textarea } from "@/components/ui/textarea";
import NewImageUploader from "@/utils/NewImageUploader";
import { FaGlobe, FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { signOut, useSession } from "next-auth/react";
import { toast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const fetchUserProfile = async () => {
  const response = await fetch("/api/profile");
  if (!response.ok) {
    throw new Error("Failed to fetch profile");
  }
  return response.json();
};
const updateUserProfile = async (formData) => {
  const response = await fetch("/api/profile", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  });
  if (!response.ok) {
    throw new Error("Failed to update profile");
  }
  return response.json();
};
const EditProfile = () => {
  const [formData, setformData] = useState({
    FullName: "",
    GraduationYear: "",
    MobileNumber: "",
    Degree: "",
    Branch: "",
    image: "",
    streetAddress: "",
    postalCode: "",
    city: "",
    country: "",
    Company: "",
    designation: "",
    WorkExperience: [{ Job: "", Company: "", Industry: "", startEndYear: "" }],

    bio: "",
    social: {
      linkedin: "",
      twitter: "",
      instagram: "",
      website: "",
    },
  });
  const session = useSession();
  const userData = session.data?.user;
  const { status } = session;
  const router = useRouter();
  const queryClient = useQueryClient();

  const { data: profileData, isLoading } = useQuery({
    queryKey: ["userProfile"],
    queryFn: fetchUserProfile,
    enabled: status === "authenticated",
    staleTime:Infinity,
    placeholderData: () => {
      return queryClient.getQueryData(["userProfile"]) || {
        FullName: "Loading...",
        GraduationYear: "Loading...",
        MobileNumber: "Loading...",
        Degree: "Loading...",
        Branch: "Loading...",
        image: "",
        streetAddress: "Loading...",
        postalCode: "Loading...",
        city: "Loading...",
        country: "Loading...",
        Company: "Loading...",
        designation: "Loading...",
        WorkExperience: [{ Job: "Loading...", Company: "Loading...", Industry: "Loading...", startEndYear: "Loading..." }],
        bio: "Loading...",
        social: {
          linkedin: "Loading...",
          twitter: "Loading...",
          instagram: "Loading...",
          website: "Loading...",
        },
      }
    }
   
  });

  const updateProfileMutation = useMutation({
    mutationFn: updateUserProfile,
    onSuccess: () => {
      queryClient.invalidateQueries(["userProfile"]);
      router.push("/profile");
      toast({
        title: "Your Profile has been updated successfully",
      });
    },
    onError: () => {
      toast({
        title: "Please try again",
        variant: "destructive",
      });
    },
  });
  useEffect(() => {
    if (profileData) {
      setformData((prevData) => ({ ...prevData, ...profileData }));
    }
  }, [profileData]);

  // useEffect(() => {
  //   console.log(session);
  //   if (status === "authenticated") {
  //     fetchUserProfile();
  //   }
  // }, [status]);

  const handleProfilesubmit = async (e) => {
    e.preventDefault();
    updateProfileMutation.mutate(formData);
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setformData((prevData) => ({ ...prevData, [name]: value }));
  };


  const handleAddExperience = () => {
    setformData((prevState) => ({
      ...prevState,
      WorkExperience: [
        ...prevState.WorkExperience,
        { jobTitle: "", company: "", industry: "", startEndYear: "" },
      ],
    }));
  };
  const handleExperienceChange = (e, index) => {
    const { name, value } = e.target;
    const newWorkExperience = [...formData.WorkExperience];
    newWorkExperience[index][name] = value;
    setformData((prevState) => ({
      ...prevState,
      WorkExperience: newWorkExperience,
    }));
  };
  const handleRemoveExperience = (indexToRemove) => {
    setformData((prevState) => ({
      ...prevState,
      WorkExperience: prevState.WorkExperience.filter(
        (_, index) => index !== indexToRemove
      ),
    }));
  };


  const handleSocialChange = (event) => {
    const { name, value } = event.target;

    // Update the formData.social state based on the name of the input field
    setformData((prevData) => ({
      ...prevData,
      social: {
        ...prevData.social,
        [name]: value,
      },
    }));
  };

 


  return (
    <div className=" phone:mt-12 max-phone:mt-24 py-4 w-11/12 mx-auto">
      <div className="  border  rounded-xl">
        <div className="w-full h-11 rounded-t-lg bg-gray-900 flex justify-start items-center space-x-1.5 px-3">
          <span className="w-3 h-3 rounded-full bg-red-400"></span>
          <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
          <span className="w-3 h-3 rounded-full bg-green-400"></span>

          {/* <div className="" style={{ marginLeft: "0" }}>
            {"#include {digitomize} > {personal}"}
          </div> */}
        </div>
        <div className=" bg-[#000000] w-full p-8">
          {/* first row */}
          <Label className="text-white text-2xl">Personal Info</Label>
          <div className=" grid md:grid-cols-2  mx-auto ">
            <div className="relative z-0 w-full md:w-3/4 mb-12 group flex items-center ">
              <div className=" w-full max-w-lg">
                <Label className=" text-white ">Name</Label>
                <div className="flex items-center gap-3">
                  <Input
                    type="text"
                    name="FullName"
                    id="name"
                    placeholder="Enter your Name"
                    //   value={}
                    value={formData.FullName}
                    onChange={handleInputChange}
                    required
                    className="  bg-transparent text-white"
                  />
                </div>
              </div>
            </div>
            <div className="relative z-0 w-full md:w-3/4 mb-12 group flex items-center ">
              <div className=" w-full max-w-lg">
                <Label className=" text-white ">Phone Number</Label>
                <div className="flex items-center gap-3">
                  <Input
                    type="tel"
                    name="MobileNumber"
                    maxLength={10}
                    id="phoneNumber"
                    placeholder="Enter your beautiful name"
                    value={formData.MobileNumber}
                    onChange={handleInputChange}
                    required
                    className=" bg-transparent text-white"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* second row */}
          <div className="grid md:grid-cols-2 mx-auto">
            <div className="relative z-0 w-full md:w-3/4 mb-12 group flex items-center gap-3">
              <div className="form-control w-full ">
                <Label htmlFor="phoneNumber" className=" text-white">
                  Email
                </Label>
                <div className="flex  items-center gap-3 ">
                  <Input
                    type="email"
                    name="email"
                    disabled
                    id="email"
                    // placeholder="manmittiwade124@gmail.com"
                    value={userData?.email}
                    // onChange={handleInputChangeObjData}
                    className=" bg-transparent text-white w-full max-w-lg "
                  />
                </div>
              </div>
            </div>

            <div className="relative z-0 w-full md:w-3/4 mb-12 group flex items-center gap-3">
              <div className="f w-full  ">
                <Label htmlFor="dateOfBirth" className="label">
                  <span className="label-text text-white">
                    {" "}
                    Graduation Date
                  </span>
                </Label>
                <div className="flex  items-center gap-3">
                  <Input
                    type="number"
                    name="GraduationYear"
                    value={formData.GraduationYear}
                    onChange={handleInputChange}
                    placeholder="Type here"
                    className=" input-w-full max-w-lg   bg-transparent text-white"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 mx-auto">
            <div className="relative z-0 w-full md:w-3/4 mb-12 group flex items-center gap-3">
              <div className="form-control w-full ">
                <Label htmlFor="phoneNumber" className=" ">
                  <span className=" text-white">Select Branch</span>
                </Label>
                <div className="flex  items-center gap-3 ">
                  <select
                    name="Branch"
                    value={formData.Branch}
                    onChange={handleInputChange}
                    className="bg-transparent text-white"
                  >
                    <option className=" bg-black text-white" value="" disabled>
                      Select your Branch
                    </option>
                    <option className=" bg-black text-white" value="CSE">
                      Computer Science
                    </option>
                    imag
                    <option className=" bg-black text-white" value="Civil">
                      Civil
                    </option>
                    <option className=" bg-black text-white" value="ENTC">
                      ENTC
                    </option>
                    <option className=" bg-black text-white" value="Electrical">
                      Electrical
                    </option>
                    <option className=" bg-black text-white" value="Mechanical">
                      Mechanical
                    </option>
                    <option className=" bg-black text-white" value="Instr">
                      Instrumentation
                    </option>
                  </select>

                  {/* <Select
                  name="Branch"
                    value={formData.Branch}
                    // onChange={handleInputChange}
                    className="bg-transparent text-white"
                  >
                    <SelectTrigger className="bg-transparent text-white">
                      <SelectValue placeholder="select your Branch"/>
                    </SelectTrigger>
                    <SelectContent
                  
                     
                      className="bg-transparent text-white"
                    >
                      <SelectItem name="Branch" value="CSE">Computer Science</SelectItem>
                      <SelectItem value="Civil">Civil</SelectItem>
                      <SelectItem value="ENTC">ENTC</SelectItem>
                      <SelectItem value="Electrical">Electrical</SelectItem>
                      <SelectItem value="Mechanical">Mechanical</SelectItem>
                      <SelectItem value="Instr">Instrumentation</SelectItem>
                    </SelectContent>
                  </Select> */}
                </div>
              </div>
            </div>

            <div className="relative z-0 w-full md:w-3/4 mb-12 group flex items-center gap-3">
              <div className="f w-full  ">
                <Label htmlFor="dateOfBirth" className="label">
                  <span className=" text-white">Street Address</span>
                </Label>
                <div className="flex  items-center gap-3">
                  <select
                    name="Degree"
                    value={formData.Degree}
                    onChange={handleInputChange}
                    className="bg-transparent text-white"
                  >
                    <option className=" bg-black text-white" value="" disabled>
                      Select your Degree
                    </option>
                    <option className=" bg-black text-white" value="B.Tech">
                      B.Tech
                    </option>

                    <option className="  bg-black text-white" value="M.Tech">
                      M.Tech
                    </option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 mx-auto">
            <div className="relative z-0 w-full md:w-3/4 mb-12 group flex items-center gap-3">
              <div className="form-control w-full ">
                <Label htmlFor="phoneNumber" className="label">
                  <span className=" text-white">City</span>
                </Label>
                <div className="flex  items-center gap-3 ">
                  <Input
                    type="text"
                    name="city"
                    id="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    placeholder="Enter your city"
                    className="bg-transparent text-white input-bordered w-full max-w-lg "
                  />
                </div>
              </div>
            </div>

            <div className="relative z-0 w-full md:w-3/4 mb-12 group flex items-center gap-3">
              <div className="f w-full  ">
                <Label htmlFor="dateOfBirth" className="label">
                  <span className=" text-white">Postal Code</span>
                </Label>
                <div className="flex  items-center gap-3">
                  <Input
                    type="tel"
                    id="postalCode"
                    name="postalCode"
                    maxLength={10}
                    value={formData.postalCode}
                    onChange={handleInputChange}
                    placeholder=""
                    className=" input-w-full max-w-lg  bg-transparent text-white"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 mx-auto">
            <div className="relative z-0 w-full md:w-3/4 mb-12 group flex items-center gap-3">
              <div className="form-control w-full ">
                <Label htmlFor="phoneNumber" className="label">
                  <span className=" text-white">Country </span>
                </Label>
                <div className="flex  items-center gap-3 ">
                  <select
                    name="country"
                    value={formData?.country}
                    onChange={handleInputChange}
                    className="bg-transparent text-white"
                  >
                    <option className=" bg-black text-white" value="" disabled>
                      Select your Country
                    </option>
                    <option className=" bg-black text-white" value="India">
                      India
                    </option>

                    <option className="  bg-black text-white" value="USA">
                      USA
                    </option>
                  </select>
                </div>
              </div>
            </div>

            <div className="relative z-0 w-full md:w-3/4 mb-12 group flex items-center gap-3">
              <div className="f w-full  ">
                <Label htmlFor="dateOfBirth" className="label">
                  <span className=" text-white">Street Address</span>
                </Label>
                <div className="flex  items-center gap-3">
                  <Input
                    type="text"
                    id="streetAddress"
                    name="streetAddress"
                    value={formData.streetAddress}
                    onChange={handleInputChange}
                    placeholder="Enter Your street address"
                    className=" input-w-full max-w-lg  bg-transparent text-white"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* work experience */}
          <Label className="text-white text-2xl">Work Experience</Label>
          <div className="grid md:grid-cols-2 mx-auto">
            <div className="relative z-0 w-full md:w-3/4 mb-12 group flex items-center gap-3">
              <div className="form-control w-full ">
                <Label htmlFor="Company" className=" text-white">
                  Company
                </Label>
                <div className="flex  items-center gap-3 ">
                  <Input
                    type="text"
                    name="Company"
                    id="Company"
                    // placeholder="manmittiwade124@gmail.com"
                    value={formData?.Company}
                    onChange={handleInputChange}
                    className=" bg-transparent text-white w-full max-w-lg "
                  />
                </div>
              </div>
            </div>

            <div className="relative z-0 w-full md:w-3/4 mb-12 group flex items-center gap-3">
              <div className="f w-full  ">
                <Label htmlFor="dateOfBirth" className="label">
                  <span className="label-text text-white"> Designation</span>
                </Label>
                <div className="flex  items-center gap-3">
                  <Input
                    type="text"
                    name="designation"
                    value={formData?.designation}
                    onChange={handleInputChange}
                    placeholder="Type here"
                    className=" input-w-full max-w-lg   bg-transparent text-white"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* <WorkExperince
            experiences={formData.WorkExperience}
            handleExperienceChange={handleExperienceChange}
            handleAddExperience={handleAddExperience}
            handleRemoveExperience={handleRemoveExperience}
          /> */}

          <div className="flex flex-col md:flex-row  items-start gap-5  mb-10 mt-9">
            <div className="relative z-0 w-full md:w-3/4 mb-5  group flex items-center gap-3">
              <div className="  w-full">
                <Label>
                  <span className="  text-white">Bio</span>
                </Label>
                <div className="flex flex-col  gap-3">
                  <Textarea
                    name="bio"
                    maxLength={250}
                    id="bio"
                    className=" w-full bg-transparent text-white  h-24 max-w-lg"
                    placeholder=""
                    value={formData.bio}
                    onChange={handleInputChange}
                  ></Textarea>
                  <p className="text-sm text-muted-foreground">
                    Bio should be 250 max characters
                  </p>
                  {/* <Checkbox
                      isCheckedState={formData.bio.showOnWebsite}
                      setState={updateShowOnWebsite("bio")}
                    /> */}
                </div>
              </div>
            </div>
            {/* skills */}

            <div className="relative z-0 w-full md:w-3/4 mb-5  group flex items-center gap-3">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">
                    Upload Profile Picture {"(automatically focuses on face)"}
                  </span>
                </label>
                <div className="flex items-center gap-3">
                  {/* <ImageUploader
                      image={formData.picture}
                      setFormData={setFormData}
                    ></ImageUploader> */}
                  <NewImageUploader
                    image={formData.image}
                    setformData={setformData}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 pb-8">
            <div className="flex gap-4 items-center">
              <FaInstagram size={40} className="text-green-500" />
              <Input
                type="text"
                name="instagram"
                value={formData.social.instagram}
                placeholder="Instagram URL"
                onChange={handleSocialChange}
                className="bg-transparent text-white sm:w-2/6 md:w-2/5"
              />
            </div>
            <div className="flex gap-4 items-center">
              <FaLinkedin size={40} className=" text-green-500" />
              <Input
                type="text"
                name="linkedin"
                value={formData.social.linkedin}
                placeholder="Linkedin URL"
                onChange={handleSocialChange}
                className="bg-transparent text-white sm:w-2/6 md:w-2/5"
              />
            </div>
            <div className="flex gap-4 items-center">
              <FaXTwitter size={40} className=" text-green-500" />
              <Input
                type="text"
                name="twitter"
                value={formData.social.twitter}
                placeholder="Twitter URL"
                onChange={handleSocialChange}
                className="bg-transparent text-white sm:w-2/6 md:w-2/5"
              />
            </div>
            <div className="flex gap-4 items-center">
              <FaGlobe size={40} className=" text-green-500" />
              <Input
                type="text"
                name="website"
                value={formData.social.website}
                placeholder="personal website"
                onChange={handleSocialChange}
                className="bg-transparent text-white sm:w-2/6 md:w-2/5"
              />
            </div>
          </div>
          <div className=" flex  ">
            <Button type="submit" onClick={handleProfilesubmit}>
              Update the Data
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
