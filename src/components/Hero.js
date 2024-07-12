import { ChevronsRight } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="md:mx-36 mx-3 rounded-xl border-4 border-blue-500 text-white bg-gray-800">
      <div className="px-10 flex flex-col gap-10 justify-center items-center min-h-screen">
        <div className="flex flex-col gap-5">
          <h1 className="text-3xl font-bold text-center">
            Your one-stop solution for all your jobs and internship-related
            queries.
          </h1>
          <p className="text-gray-400 text-center">
            Explore latest Jobs and Internships floating on the internet curated
            at one place at OppurtuNext.
          </p>
        </div>
        <Link to="/jobs">
          <button className="group px-4 py-3 bg-blue-600 rounded-md text-md text-center flex items-center font-semibold hover:bg-black">
            Explore latest Jobs | Internships{" "}
            <span className="pl-2 scale-0 opacity-0 group-hover:opacity-100 transform group-hover:scale-125 transition duration-300 ease-in-out">
              <ChevronsRight />
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
}
