import React, { useEffect, useState } from "react";
import JobCard from "../components/JobCard";
import SearchCard from "../components/SearchCard";
import { Spinner } from "flowbite-react";
import { MoveLeft, MoveRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { serverURL } from "../utils/constant";

export default function AllJobsPage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const limit = 5; // Number of posts per page

  console.log(posts);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `${serverURL}/api/post/getPosts?page=${currentPage}&limit=${limit}`
        );
        const data = await res.json();
        if (res.ok) {
          if (currentPage > data.totalPages) {
            setPosts([]);
          } else {
            setPosts(data.items);
            setTotalPages(data.totalPages);
          }
        }
        setLoading(false);
        window.scrollTo(0, 0); // Scroll to top after fetching posts
      } catch (error) {
        console.log(error.message);
        setLoading(false);
      }
    };
    fetchPosts();
  }, [currentPage]);

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      navigate(`/jobs/?page=${currentPage - 1}`);
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      navigate(`/jobs/?page=${currentPage + 1}`);
      setCurrentPage(currentPage + 1);
    }
  };

  if (loading)
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

  return (
    <div className="md:mx-36 mx-3">
      <div className="min-h-screen py-10">
        <h1 className="text-4xl md:text-5xl font-bold text-center">
          Explore Latest Jobs, Internships
        </h1>
        <div className="py-14">
          <div className="max-3 flex flex-col md:flex-row gap-10 justify-around p-3">
            <div className="">
              <SearchCard />
            </div>
            <div className="md:w-2/3 flex flex-col gap-4">
              {posts.map((post) => (
                <JobCard key={post._id} post={post} />
              ))}

              <div className="flex justify-evenly mt-4">
                <button
                  className="text-md font-semibold items-center flex gap-1 disabled:opacity-50"
                  onClick={handlePreviousPage}
                  disabled={currentPage === 1}
                >
                  <MoveLeft />
                  Previous Page
                </button>
                <span className="self-center text-md font-semibold">
                  Page {currentPage} of {totalPages}
                </span>
                <button
                  className="text-md font-semibold items-center flex gap-1 disabled:opacity-50"
                  onClick={handleNextPage}
                  disabled={currentPage === totalPages}
                >
                  Next Page
                  <MoveRight size={28} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
