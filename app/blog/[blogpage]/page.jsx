import blogs from "../blogs.js";
import {Navbar} from '@/components/homep'

export default function SearchBar({ params }) {
  const index = params.blogpage - 1;
  return (
    <>
    <Navbar/>
    <h1 className="mx-4 md:mx-0 text-[#FF6600] text-4xl font-semibold mt-10">{blogs[index].title}</h1>
      <p className="mx-4 mt-6 md:mx-0 ">{blogs[index].blog}</p>
    </>
  );
}
