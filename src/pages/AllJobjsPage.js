import React from "react";
import JobCard from "../components/JobCard";
import SearchCard from "../components/SearchCard";

export default function AllJobjsPage() {
  return (
    <div className="md:mx-36 mx-3">
      <div className="min-h-screen py-10 ">
        <h1 className="text-4xl md:text-5xl font-bold text-center">
          Explore Latest Jobs, Internships
        </h1>
        <div className="py-14">
          <div className=""></div>
          <div className="flex-1 md:flex-row flex-col ">
            <JobCard />
            <SearchCard />
          </div>
        </div>
      </div>
    </div>
  );
}
