import React, { useEffect, useState } from "react";
import JobCard from "../components/JobCard";
import SearchCard from "../components/SearchCard";
import { useParams } from "react-router";
import { Spinner } from "flowbite-react";

export default function AllJobjsPage() {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState();

  useEffect(() => {
    try {
      const fetchPosts = async () => {
        setLoading(true);
        const res = await fetch(`http://localhost:5000/api/post/getPosts`);
        const data = await res.json();
        if (!res.ok) {
          setLoading(false);
          return;
        }
        if (res.ok) {
          setPosts(data);
          setLoading(false);
        }
      };
      fetchPosts();
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Spinner size={"xl"} />
      </div>
    );

  return (
    <div className="md:mx-36 mx-3">
      <div className="min-h-screen py-10 ">
        <h1 className="text-4xl md:text-5xl font-bold text-center">
          Explore Latest Jobs, Internships
        </h1>
        <div className="py-14">
          <div className="max-3 flex flex-col md:flex-row gap-10 justify-around p-3">
            <div className="">
              <SearchCard />
            </div>
            <div className="md:w-2/3 flex flex-col gap-4">
              {/* <JobCard /> */}
              {posts &&
                posts.map((post) => <JobCard key={post._id} post={post} />)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
