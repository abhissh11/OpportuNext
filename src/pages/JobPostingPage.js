import { Button, Label, Select, TextInput } from "flowbite-react";
import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function JobPostingPage() {
  return (
    <div className="md:mx-36 mx-3 my-10 min-h-svh flex flex-col items-center">
      <div className="pb-10 flex flex-col gap-4 text-center items-center">
        <h1 className="text-4xl font-extrabold">Find Your perfect candidate</h1>
        <p className="tetx-lg font-sm text-gray-600">
          Get your job posting seen by thousands of job seekers.
        </p>
      </div>

      {/* form */}

      <div className="md:w-2/3 border-2 border-gray-400 p-4 rounded-xl border-dashed">
        <form action="">
          <div className=" flex flex-col gap-1">
            <h2 className="text-lg font-semibold">Job details</h2>
            <p className="text-md text-gray-600">
              Provide Job description and details
            </p>
          </div>
          <div className="py-5 flex flex-col gap-2">
            <div className="flex flex-col gap-2">
              <Label htmlFor="title" value="Job Title" />
              <TextInput
                type="text"
                required
                id="title"
                placeholder="e.g. Software developer"
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="JobType" value="Job Type" />
              <Select id="jobType" required>
                <option>Full-Time</option>
                <option>Part-time</option>
                <option>Internship</option>
                <option>Temporary</option>
                <option>Contract</option>
                <option>Volunteer</option>
              </Select>
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="company" value="Company" />
              <TextInput
                type="text"
                id="company"
                required
                placeholder="company name"
              />
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="office-location" value="Office Location" />
              <Select id="location" required>
                <option>Bengaluru, Karnatka India</option>
                <option>Hyederabad, Telangna, India</option>
                <option>Pune, Maharashtra, India</option>
                <option>Gurugram, Haryana, India</option>
                <option>Delhi, India</option>
                <option>Chandigarh, India</option>
                <option>Noida, UP, India</option>
                <option>Jaipur, Rajasthan, India</option>
                <option>Mumbai, Maharashtra, India</option>
                <option>Ahemdabad, Gujarat, India</option>
                <option>Chennai, Tamil Nadu, India</option>
                <option>NYC, USA</option>
              </Select>
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="location" value="Location" />
              <Select>
                <option>Remote</option>
                <option>In-Office</option>
                <option>Hybrid</option>
              </Select>
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="applyMethod" value="How to Apply" />
              <TextInput
                type="text"
                id="website"
                required
                placeholder="Email or Website"
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="salary" value="Salary" />
              <TextInput
                type="text"
                id="salary"
                placeholder="salary offerings"
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="desciption" value="Description" />
              <ReactQuill
                theme="snow"
                placeholder="Write about the Job Description."
                className="h-32 mb-12"
                required
              />
            </div>
            <div className="pt-2">
              <Button type="submit" className="bg-black px-4">
                Publish
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
