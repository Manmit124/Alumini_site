import Userprofile from "@/hooks/userProfile";
import React, { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import {
  Input,
  MarkDownEditor,
  MultiSelect,
  Select,
} from "../../FormComponents";
import { branches } from "@/config/branches";

const CreateExperience = ({ user }) => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({ trim: true });
  const [Loading, setLoading] = useState(false);
  const [formData, setformData] = useState({
    name: user?.FullName,
    email: user?.email,
    id: user?.$id,
    imgUrl: null,
    tags: [],
  });
  const [file, setfile] = useState(null);
  const [resetItems, setResetItems] = useState(false);
  const handleResetItems = () => {
    setResetItems(!resetItems);
  };
  const onSubmit = useCallback(async (data) => {
    data = { ...data, ...formData };
    setLoading(true);
    try {
      if (file) {
        // const res=await
        data = {
          ...data,
          imgUrl: res?.$id,
        };
      }
      // const res=await
    } catch (error) {}
  });
  return (
    <div className="bg-[#0a0b1d] relative lg:p-5 p-4 my-5 rounded-lg">
      {Loading && <Loading message={"Creating Document..."} />}
      <form className=" flex gap-3 flex-col" onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="Title"
          type="text"
          placeholder="Title"
          title="title"
          require={true}
          reactHookForm={register("title", {
            required: "Title is required",
            minLength: {
              value: 5,
              message: "Title must be at least 5 characters",
            },
            maxLength: {
              value: 256,
              message: "Title must not exceed 256 character",
            },
          })}
          className="bg-gray-950 rounded-lg px-3 py-2 mt-1 w-full text-gray-300"
          errors={errors.title}
        />
        <MarkDownEditor
          label="Message"
          placeholder="Message"
          title="message"
          reactHookForm={register("message", {
            required: "Message is required.",
            minLength: {
              value: 50,
              message: "Message must be at least 50 characters.",
            },
            maxLength: {
              value: 5000,
              message: "Message must not exceed 5000 characters.",
            },
          })}
          className="bg-gray-950 rounded-lg px-3 py-2 mt-1 w-full text-gray-300"
          errors={errors.message}
          reset={resetItems}
        />
        <div>
          <div>
            <label htmlFor="tags" className=" text-gray-300">
              Tags (without#)
            </label>
            <MultiSelect
              placeholder="#success"
              allItems={formData.tags}
              setAllItems={(items) => {
                setformData((prevDetails) => ({
                  ...prevDetails,
                  tags: items,
                }));
              }}
              resetItems={resetItems}
            />
          </div>
          <div className=" flex md:flex-row flex-col gap-3">
            <Input
              label="Branch"
              type="text"
              placeholder="ISRO"
              title="currentCompany"
              require={true}
              reactHookForm={register("currentCompany", {
                required: "Current Company is required",
                minLength: {
                  value: 2,
                  message: "Current Company must be at least 2 characters",
                },
                maxLength: {
                  value: 256,
                  message: "Current Company must not exceed 256 characters",
                },
              })}
              className="bg-gray-950 rounded-lg px-3 py-2 mt-1 w-full text-gray-300"
              errors={errors.currentCompany}
            />

            <Input
              label="Branch"
              type="number"
              placeholder="2002"
              title="batch"
              id="batch"
              reactHookForm={register("batch", {
                minLength: {
                  value: 4,
                  message: "Batch must be at least 4 characters",
                },
                maxLength: {
                  value: 4,
                  message: "Batch must not exceed 4 characters",
                },
                onChange: (e) => {
                  if (e.target.value > new Date().getFullYear() + 4) {
                    e.target.value = new Date().getFullYear() + 4;
                  }

                  if (e.target.value.length === 4 && e.target.value < 1800) {
                    e.target.value = 1800;
                  }
                },
              })}
              className="bg-gray-950 rounded-lg px-3 py-2 mt-1 w-full text-gray-300"
              errors={errors.batch}
            />

            <Select
              label="Branch"
              id="branch"
              require={true}
              options={branches}
              reactHookForm={register("branch", {
                required: "Branch is required",
              })}
              className="bg-gray-950 rounded-lg px-3 py-2 mt-1 w-full text-gray-300"
              errors={errors.branch}
              placeholder="Select Branch"
            />
          </div>
          <div className=" flex md:flex-row flex-col gap-3">
            <Input
              label="Your Designation/Role"
              type="text"
              placeholder="Your Designation/Role"
              title="currentPost"
              require={true}
              reactHookForm={register("currentPost", {
                required: "Current Post is required",
                minLength: {
                  value: 2,
                  message: "Current Post must be at least 2 characters",
                },
                maxLength: {
                  value: 256,
                  message: "Current Post must not exceed 256 characters",
                },
              })}
              className="bg-gray-950 rounded-lg px-3 py-2 mt-1 w-full text-gray-300"
              errors={errors.currentPost}
            />

            <Input
              label="Your Current City"
              type="text"
              placeholder="Chandrapur"
              title="currentCity"
              require={true}
              reactHookForm={register("currentCity", {
                required: "Current City is required",
                minLength: {
                  value: 2,
                  message: "Current City must be at least 2 characters",
                },
                maxLength: {
                  value: 256,
                  message: "Current City must not exceed 256 characters",
                },
              })}
              className="bg-gray-950 rounded-lg px-3 py-2 mt-1 w-full text-gray-300"
              errors={errors.currentCity}
            />
          </div>
          <div className="  text-white self-end w-fit flex gap-3 pt-6 pb-4">
          <button className=" px-8 py-3 transition-all rounded-xl bg-rose-500  hover:bg-rose-600 active:scale-105 active:bg-red-600">
            Reset
          </button>
          <button disabled={Loading} type="submit" className="px-8 py-3 transition-all rounded-xl bg-sky-500 hover:bg-sky-600 active:scale-105 active:bg-blue-600">
            Submit
          </button>

          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateExperience;
