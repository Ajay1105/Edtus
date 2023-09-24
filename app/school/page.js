"use-client"
const arr = [
  { name: "Abc", code: 1234 },
  { name: "Def", code: 5678 },
  { name: "Ghi", code: 9012 },
  { name: "Jkl", code: 3456 },
  { name: "Mno", code: 7890 },
];

const page = () => {
  return (
    <div className="flex flex-col px-[10vw] h-[100vh]">
      <p className="text-3xl pt-10 pb-5 text-[#FF6600] "> Schools</p>
      <div>
        <table>
          <tr className="outline outline-black">
            <th className="outline outline-black px-2">School Name</th>
            <th className="px-2">School Code</th>
          </tr>
          {arr.map((a, index) => (
            <tr className="outline outline-black" key={index}>
              <td className="outline outline-black px-2">{a.name}</td>
              <td className="px-2">{a.code}</td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

export default page;
