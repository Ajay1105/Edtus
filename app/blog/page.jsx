"use client";
import { Navbar } from "@/components/homep";
import blogs from "./blogs.js";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <>
      <Navbar />
      <div className="mx-4 md:mx-0 flex mt-6 justify-center align-middle items-center flex-col">
        <h1 className="text-blue-600 text-5xl italic mb-8 font-semibold">Blogs</h1>
        <div>
          {blogs.map((blog) => (
            <div  className="mb-8">
              <h3 className="text-3xl text-[#FF6600] mb-2">{blog.title}</h3>
              <p>
                {blog.blog.substring(0, 100)}
                <button
                  type="button"
                  onClick={() => router.push(`/blog/${blog.id}`)}
                  className=" text-blue-600"
                >
                  ...Read more
                </button>
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
