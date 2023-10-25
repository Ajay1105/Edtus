'use client'
import { Navbar } from "@/components/homepage";
import blogs from "./blogs.js";
import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter();

  return (
    <div>
      <Navbar />
      <h1 className="text-[#FF6600] text-4xl font-semibold">Blog</h1>

      {blogs.map((blog) => (
        <div>
          <h3>{blog.title}</h3>
          <p>
            {blog.blog.substring(0, 100)}
            <button type="button" onClick={() => router.push(`/blog/${blog.id}`)} className=" text-blue-600">...Read more</button>
          </p>
        </div>
      ))}
    </div>
  );
}
