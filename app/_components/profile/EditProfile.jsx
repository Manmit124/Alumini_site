import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React, { useState } from "react";
import WorkExperince from "./WorkExperince";
import { Textarea } from "@/components/ui/textarea";
import NewImageUploader from "@/utils/NewImageUploader";
import { FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";

const EditProfile = () => {
  const [formData, setformData] = useState({
    FullName: "",
    GraduationYear: "",
    MobileNumber: "",
    Degree: "",
    Branch: "",
    image: "",
    experiences: [
      { jobTitle: "", company: "", industry: "", startEndYear: "" },

    ],
    bio:"",
    social:{
      linkedin:"",
      twitter:"",
      instagram:"",

    }

  });
  const handleAddExperience = () => {
    setformData((prevState) => ({
      ...prevState,
      experiences: [
        ...prevState.experiences,
        { jobTitle: "", company: "", industry: "", startEndYear: "" },
      ],
    }));
  };
  const handleExperienceChange = (e, index) => {
    const { name, value } = e.target;
    const newExperiences = [...formData.experiences];
    newExperiences[index][name] = value;
    setformData((prevState) => ({
      ...prevState,
      experiences: newExperiences,
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setformData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div className=" phone:mt-12 max-phone:mt-24 py-4 w-11/12 mx-auto">
      <div className="  border  rounded-xl">
        <div className="w-full h-11 rounded-t-lg bg-gray-900 flex justify-start items-center space-x-1.5 px-3">
       
         <span class="w-3 h-3 rounded-full bg-red-400"></span>
        <span class="w-3 h-3 rounded-full bg-yellow-400"></span>
        <span class="w-3 h-3 rounded-full bg-green-400"></span>
      
          {/* <div className="" style={{ marginLeft: "0" }}>
            {"#include {digitomize} > {personal}"}
          </div> */}
        </div>
        <div className=" bg-transparent w-full p-8">
          {/* first row */}
          <Label className="text-white text-2xl">Personal Info</Label>
          <div className=" grid md:grid-cols-2  mx-auto ">
            <div className="relative z-0 w-full md:w-3/4 mb-12 group flex items-center ">
              <div className=" w-full max-w-lg">
                <Label className=" text-white ">Name</Label>
                <div className="flex items-center gap-3">
                  <Input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Enter your phone number"
                    //   value={}
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
                    name="phoneNumber"
                    maxLength={10}
                    id="phoneNumber"
                    placeholder="Enter your beautiful name"
                    //   value={}
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
                    //   value={formData.phoneNumber.data}
                    //   onChange={handleInputChangeObjData}
                    className=" bg-transparent text-white w-full max-w-lg "
                  />
                </div>
              </div>
            </div>

            <div className="relative z-0 w-full md:w-3/4 mb-12 group flex items-center gap-3">
              <div className="f w-full  ">
                <Label htmlFor="dateOfBirth" className="label">
                  <span className="label-text"> Graduation Date</span>
                </Label>
                <div className="flex  items-center gap-3">
                  <Input
                    type="date"
                    id="dateOfBirth"
                    name="dateOfBirth"
                    //   value={formData.dateOfBirth.data}
                    //   onChange={handleInputChangeObjData}
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
                  <Select className="bg-transparent text-white">
                    <SelectTrigger className='bg-transparent text-white'>
                      <SelectValue placeholder="Select your branch" />
                    </SelectTrigger>
                    <SelectContent className="bg-transparent text-white">
                      <SelectItem>Computer Science</SelectItem>
                      <SelectItem>Civil</SelectItem>
                      <SelectItem>ENTC</SelectItem>
                      <SelectItem>Electrical</SelectItem>
                      <SelectItem>Mechanical</SelectItem>
                      <SelectItem>Instrumentation</SelectItem>
                    </SelectContent>
                  </Select>
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
                    id="street_address"
                    name="street_address"
                    //   value={formData.dateOfBirth.data}
                    //   onChange={handleInputChangeObjData}
                    placeholder="Enter Your street address"
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
                  <span className=" text-white">City</span>
                </Label>
                <div className="flex  items-center gap-3 ">
                  <Input
                    type="text"
                    name="city"
                    id="city"
                    //   value={formData.phoneNumber.data}
                    //   onChange={handleInputChangeObjData}
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
                    id="job_role"
                    name="job_role"
                    maxLength={10}
                    //   value={formData.dateOfBirth.data}
                    //   onChange={handleInputChangeObjData}
                    placeholder="Enter Your Current Job Role"
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
                  <Select className="bg-transparent text-white">
                    <SelectTrigger className="bg-transparent text-white">
                      <SelectValue placeholder="Select your country" />
                    </SelectTrigger>
                    <SelectContent className="bg-transparent text-white  ">
                      <SelectItem value="US">United States</SelectItem>
                      <SelectItem value="CN">China</SelectItem>
                      <SelectItem value="IN">India</SelectItem>
                      <SelectItem value="ID">Indonesia</SelectItem>
                      <SelectItem value="PK">Pakistan</SelectItem>
                      <SelectItem value="BR">Brazil</SelectItem>
                      <SelectItem value="NG">Nigeria</SelectItem>
                      <SelectItem value="BD">Bangladesh</SelectItem>
                      <SelectItem value="RU">Russia</SelectItem>
                      <SelectItem value="MX">Mexico</SelectItem>
                      <SelectItem value="JP">Japan</SelectItem>
                      <SelectItem value="PH">Philippines</SelectItem>
                      <SelectItem value="EG">Egypt</SelectItem>
                      <SelectItem value="ET">Ethiopia</SelectItem>
                      <SelectItem value="VN">Vietnam</SelectItem>
                      <SelectItem value="CD">DR Congo</SelectItem>
                      <SelectItem value="IR">Iran</SelectItem>
                      <SelectItem value="TR">Turkey</SelectItem>
                      <SelectItem value="DE">Germany</SelectItem>
                      <SelectItem value="FR">France</SelectItem>
                      <SelectItem value="GB">United Kingdom</SelectItem>
                      <SelectItem value="IT">Italy</SelectItem>
                      <SelectItem value="ZA">South Africa</SelectItem>
                      <SelectItem value="KR">South Korea</SelectItem>
                      <SelectItem value="ES">Spain</SelectItem>
                      <SelectItem value="AR">Argentina</SelectItem>
                      <SelectItem value="UA">Ukraine</SelectItem>
                      <SelectItem value="CA">Canada</SelectItem>
                      <SelectItem value="AU">Australia</SelectItem>
                      <SelectItem value="SA">Saudi Arabia</SelectItem>
                      <SelectItem value="PL">Poland</SelectItem>
                      <SelectItem value="MY">Malaysia</SelectItem>
                      <SelectItem value="NL">Netherlands</SelectItem>
                      <SelectItem value="CO">Colombia</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            <div className="relative z-0 w-full md:w-3/4 mb-12 group flex items-center gap-3">
              <div className="f w-full  ">
                <Label htmlFor="dateOfBirth" className="label">
                  <span className=" text-white">Job Role</span>
                </Label>
                <div className="flex  items-center gap-3">
                  <Input
                    type="text"
                    id="job_role"
                    name="job_role"
                    //   value={formData.dateOfBirth.data}
                    //   onChange={handleInputChangeObjData}
                    placeholder="Enter Your Current Job Role"
                    className=" input-w-full bg-transparent text-white max-w-lg "
                  />
                </div>
              </div>
            </div>
          </div>

          {/* work experience */}
          <Label className="text-white text-2xl">Work Experience</Label>

          <WorkExperince
            experiences={formData.experiences}
            handleExperienceChange={handleExperienceChange}
            handleAddExperience={handleAddExperience}
          />

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
                    // value={formData.bio.data}
                    // onChange={handleInputChangeObjData}
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
                  // value={formData.social.instagram}
                  // placeholder="Instagram URL"
                  // onChange={handleSocialChange}
                  className="bg-transparent text-white sm:w-2/6 md:w-2/5"
                />
              </div>
              <div className="flex gap-4 items-center">
                <FaLinkedin size={40} className=" text-green-500" />
                <Input
                  type="text"
                  name="linkedin"
                  // value={formData.social.linkedin}
                  // placeholder="Linkedin URL"
                  // onChange={handleSocialChange}
                  className="bg-transparent text-white sm:w-2/6 md:w-2/5"
                />
              </div>
              <div className="flex gap-4 items-center">
                <FaXTwitter size={40} className=" text-green-500" />
                <Input
                  type="text"
                  name="twitter"
                  // value={formData.social.twitter}
                  // placeholder="Twitter URL"
                  // onChange={handleSocialChange}
                  className="bg-transparent text-white sm:w-2/6 md:w-2/5"
                />
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
