import { Banknote, Clock, Globe, MapPin } from "lucide-react";
import React from "react";

export default function JobCard() {
  return (
    <div className="max-w-2xl">
      <div
        className="flex flex-col md:flex-row gap-2  justify-between p-3 border border-gray-300 
      rounded-md hover:bg-gray-100"
      >
        <div className="flex flex-row items-center gap-4">
          <div className="">
            <img
              src="https://static.thenounproject.com/png/1266207-200.png"
              alt="devs."
              className="h-32"
            />
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-1 ">
              <h1 className="text-xl font-semibold">
                Software Engineering Intern
              </h1>
              <h2 className="text-md font-medium text-gray-600">Microsoft</h2>
            </div>
            <div className="flex flex-row gap-1 text-sm font-medium text-gray-600">
              <MapPin size={20} />
              <p>On-site</p>
            </div>
            <div className="flex flex-row gap-1 text-sm font-medium text-gray-600">
              <Globe size={20} />
              <p>Hyderabad, India</p>
            </div>
            <div className="flex flex-row gap-1 text-sm font-medium text-gray-600">
              <Banknote size={20} />
              <p>₹30000</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-1 justify-between items-end">
          <h3 className="text-md font-medium px-2 text-gray-500 bg-gray-200 rounded-sm border border-gray-300">
            Internship
          </h3>
          <div className="flex flex-row gap-1 text-sm font-medium text-gray-600">
            <Clock size={20} />
            <p>2 days ago</p>
          </div>
        </div>
      </div>
    </div>
  );
}