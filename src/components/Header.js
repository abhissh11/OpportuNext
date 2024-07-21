import { Rocket } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="px-5 md:px-36 py-5 border border-b border-slate-200 ">
      <div className=" flex flex-row gap-2 items-center justify-between ">
        <div className="">
          <Link to="/">
            <div className="flex flex-row gap-1 items-center  rounded-full  hover:scale-95 transition-all">
              <Rocket size={44} />
              <h1 className="text-2xl font-bold">OppNext</h1>
            </div>
          </Link>
        </div>
        <div className="flex flex-row items-center gap-4">
          <a
            href="https://drive.google.com/file/d/1Vl5u472CKk3SjJCsBQn-taOuSAmp3Wjf/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="px-3 md:px-4 py-3 bg-green-600 text-white rounded-md text-sm font-semibold hover:bg-green-800 ">
              Hire Me
            </button>
          </a>
          <Link to="/post-Job">
            <button className="px-3 md:px-4 py-3 bg-blue-600 text-white rounded-md text-sm font-semibold hover:bg-black">
              Post a Job
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
