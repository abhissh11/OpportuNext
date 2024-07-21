import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { serverURL } from "../utils/constant";
import { Banknote, Building2, Clock, Globe, MapPin } from "lucide-react";
import { Spinner } from "flowbite-react";
import { Link } from "react-router-dom";

export default function JobsPage() {
  const [loading, setLoading] = useState(false);
  const [post, setPost] = useState({});
  const { slug } = useParams();

  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true);
      try {
        const res = await fetch(`${serverURL}/api/post/getPosts/${slug}`);
        const data = await res.json();
        if (data && data.items && data.items.length > 0) {
          setPost(data.items);
        } else {
          throw new Error("Post not found");
        }
      } catch (error) {
        console.error("Error fetching post:", error);
      } finally {
        setLoading(false);
        window.scrollTo(0, 0);
      }
    };
    fetchPost();
  }, [slug]);

  if (loading) {
    return (
      <>
        <div className="mx-5 md:mx-36 p-5 bg-gray-300 rounded-lg flex items-center mt-10">
          <h2 className="text-center text-black text-md font-bold">
            The Backend is deployed on Render Free version. <br />{" "}
            <span>
              For first visitor on the website will take about 50 seconds to
              activate the backend as per render guidelines for free version of
              deployments.{" "}
            </span>
          </h2>
        </div>
        <div className="flex justify-center items-center min-h-screen">
          <Spinner size={"xl"} className="text-black" />
        </div>
      </>
    );
  }

  const {
    title,
    company,
    jobType,
    salary,
    location,
    jobLocation,
    createdAt,
    description,
    website,
  } = post && post.length > 0 ? post[0] : {};

  const date = new Date(createdAt);

  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = date.toLocaleDateString("en-US", options);

  return (
    <div className="my-20">
      <div className="mx-5 md:mx-36">
        <div className="flex flex-col md:flex-row gap-2 items-center md:items-start  justify-between">
          <div className="flex flex-row gap-4 items-center ">
            <div className="">
              <img
                src="https://static.thenounproject.com/png/1266207-200.png"
                alt="devs."
                className="h-32"
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="">
                <h1 className="text-2xl font-bold">{title}</h1>
                <h2 className="text-xl font-bold text-blue-600">{company}</h2>
              </div>
              <div className="py-2 flex flex-col gap-3">
                <div className="flex flex-row gap-1 text-sm font-medium text-gray-600">
                  <Building2 size={20} />
                  <p>{jobType}</p>
                </div>
                <div className="flex flex-row gap-1 text-sm font-medium text-gray-600">
                  <MapPin size={20} />
                  <p>{jobLocation}</p>
                </div>
                <div className="flex flex-row gap-1 text-sm font-medium text-gray-600">
                  <Globe size={20} />
                  <p>{location}</p>
                </div>
                <div className="flex flex-row gap-1 text-sm font-medium text-gray-600">
                  <Banknote size={20} />
                  <p>₹{salary}</p>
                </div>
              </div>
            </div>
          </div>
          <a href={website} target="_blank" rel="noopener noreferrer">
            <h2 className="px-4 py-2 bg-black text-center max-w-32 text-white text-md font-semibold rounded-md">
              Apply Now
            </h2>
          </a>
        </div>
        <div className="my-10">
          <h1 className="text-md font-semibold">
            Date Posted: <span>{formattedDate}</span>
          </h1>
        </div>
        <div className="p-10 flex flex-col  items-center text-center justify-center gap-10">
          <a
            href={website}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full "
          >
            <h1 className="text-sm text-gray-800 overflow-clip">
              Website / Email :{" "}
              <span className="text-gray-600 hover:underline ">
                {post && website}
              </span>
            </h1>
          </a>

          <div
            className="text-start post-desc"
            dangerouslySetInnerHTML={{ __html: description }}
          ></div>
        </div>
      </div>
    </div>
  );
}
