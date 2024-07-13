import { Button, Checkbox, Label, Select, TextInput } from "flowbite-react";
import React from "react";

export default function SearchCard() {
  return (
    <>
      <div className="border border-gray-300 p-3 rounded-lg">
        <form action="">
          <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-1">
              <Label htmlFor="text" value="Search" />
              <TextInput
                id="text"
                type="text"
                placeholder="company, jobs, roles, etc."
              />
            </div>
            <div className="flex flex-col gap-1">
              <Label htmlFor="type" value="Job Type" />
              <Select id="type" required>
                <option>Full-Time</option>
                <option>Part-time</option>
                <option>Internship</option>
                <option>Temporary</option>
                <option>Contract</option>
                <option>Volunteer</option>
              </Select>
            </div>
            <div className="flex flex-col gap-1">
              <Label htmlFor="location" value="Location" />
              <Select id="location" required>
                <option>Remote</option>
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
            <div className="flex items-center gap-2">
              <Checkbox id="remote" className="text-black " />
              <Label htmlFor="remote">Remote</Label>
            </div>
            <Button type="submit" className="bg-black">
              Apply Filters
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}
