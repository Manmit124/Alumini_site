import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

const WorkExperince = ({
  experiences,
  handleExperienceChange,
  handleAddExperience,
  handleRemoveExperience
}) => {
  return (
    <>
      {experiences.map((experience, index) => (
        <div key={index} className="grid md:grid-cols-2 mx-auto">
          <div className="relative z-0 w-full md:w-3/4 mb-12 group flex items-center gap-3">
            <div className="form-control w-full ">
              <Label htmlFor={`Job${index}`} className="label">
                <span className="text-white">Job Title</span>
              </Label>
              <div className="flex items-center gap-3">
                <Input
                  type="text"
                  name="Job"
                  id={`Job${index}`}
                  value={experience.Job}
                  onChange={(e) => handleExperienceChange(e, index)}
                  placeholder="Enter your job title"
                  className="bg-transparent text-white  w-full max-w-lg"
                />
              </div>
            </div>
          </div>
          <div className="relative z-0 w-full md:w-3/4 mb-12 group flex items-center gap-3">
            <div className=" w-full">
              <Label htmlFor={`Company${index}`} className="label">
                <span className="text-white">Company Name</span>
              </Label>
              <div className="flex items-center gap-3">
                <Input
                  type="text"
                  name="Company"
                  id={`Company${index}`}
                  value={experience.Company}
                  onChange={(e) => handleExperienceChange(e, index)}
                  placeholder="Enter your company name"
                  className="bg-transparent text-white w-full max-w-lg"
                />
              </div>
            </div>
          </div>

          <div className="relative z-0 w-full md:w-3/4 mb-12 group flex items-center gap-3">
            <div className=" w-full">
              <Label htmlFor={`industry${index}`} className="label">
                <span className="text-white">Industry</span>
              </Label>
              <div className="flex items-center gap-3">
                <Input
                  type="text"
                  name="Industry"
                  id={`Industry${index}`}
                  value={experience.Industry}
                  onChange={(e) => handleExperienceChange(e, index)}
                  placeholder="Enter your industry"
                  className="bg-transparent text-white w-full max-w-lg"
                />
              </div>
            </div>
          </div>

          <div className="relative z-0 w-full md:w-3/4 mb-12 group flex items-center gap-3">
            <div className="f w-full  ">
              <Label htmlFor={`startEndYear${index}`} className="label">
                <span className="text-white">Start and end year</span>
              </Label>
              <div className="flex items-center gap-3">
                <Input
                  type="text"
                  name="startEndYear"
                  id={`startEndYear${index}`}
                  value={experience.startEndYear}
                  onChange={(e) => handleExperienceChange(e, index)}
                  placeholder="Enter start and end year"
                  className="bg-transparent text-white w-full max-w-lg"
                />
              </div>
            </div>
          </div>
        
        <Button className=" w-28 mb-2 bg-red-800  hover:bg-red-500 " onClick={()=>handleRemoveExperience(index)}>Remove</Button>
        </div>
      ))}
      <Button onClick={handleAddExperience}>Add Experience</Button>
    </>
  );
};

export default WorkExperince;
