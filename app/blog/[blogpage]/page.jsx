import blogs from "../blogs.js";

export default function SearchBar({ params }) {
  const index = params.blogpage - 1;
  return (
    <>
    <h1 className="text-[#FF6600] text-4xl font-semibold">{blogs[index].title}</h1>
      <p>{blogs[index].blog}</p>
    </>
  );
}
