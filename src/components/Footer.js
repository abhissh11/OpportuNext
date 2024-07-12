import { Rocket } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div>
      <div className="m-3 mt-20 p-10 min-h-64  border-4 border-blue-500 rounded-lg bg-gray-800 text-white">
        <div className="flex flex-col justify-between md:flex-row gap-20">
          <div className="">
            <Link to="/">
              <div className="flex flex-row gap-1 items-center  rounded-full  hover:scale-95 transition-all">
                <Rocket size={44} />
                <h1 className="text-2xl font-bold">OppNext</h1>
              </div>
            </Link>
          </div>

          <div className="flex flex-col gap-4">
            <h1 className="text-xl font-bold">About</h1>
            <p className="text-gray-500 text-md font-semibold max-w-72 ">
              At OppurtuNext, we post daily updates on internships and job
              opportunities! Our vision is to empower the youth of our nation
              and make them Atmanirbhar (self-reliant). By providing
              opportunities across various sectors and sharing valuable
              knowledge, we aim to equip young individuals with the skills and
              confidence to excel in any field.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-xl font-bold">Features</h1>
            <Link to="/jobs" className="hover:underline">
              Explore Latest Jobs
            </Link>
            <Link to="/jobs" className="hover:underline">
              Explore Internships
            </Link>
            <h2>Stay Updated</h2>
            <Link to="/jobs" className="hover:underline">
              Post Jobs
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-xl font-bold">Contact</h1>
            <Link
              to="mailto:dev.abhishekkr@gmail.com"
              target="_blank"
              className="hover:underline"
            >
              dev.abhishekkr@gmail.com
            </Link>
            <h2>Kolkata, India</h2>
            <h2>+91-62072XXXXX</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
