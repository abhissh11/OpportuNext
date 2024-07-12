import React from "react";

export default function About() {
  return (
    <div className="md:mx-36 py-28 text-center  mx-3">
      <div className="flex flex-col justify-center items-center gap-10">
        <h1 className=" text-3xl font-bold w-fit px-7 py-3 border-b-4 border-blue-500 rounded-bl-xl">
          About Us
        </h1>
        <p className="text-gray-500 text-md font-semibold px-16 md:px-28">
          At OppurtuNext, we post daily updates on internships and job
          opportunities! Our vision is to empower the youth of our nation and
          make them Atmanirbhar (self-reliant). By providing opportunities
          across various sectors and sharing valuable knowledge, we aim to equip
          young individuals with the skills and confidence to excel in any
          field. If you have any queries regarding the site, advertisements, or
          any other issues, please feel free to <br /> contact us at{" "}
          <span className="font-bold">support@oppurtunext.co.</span>
        </p>
      </div>
    </div>
  );
}
