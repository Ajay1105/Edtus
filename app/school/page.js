const arr = [
  { name: "Abc", id: 1234 },
  { name: "Abc", id: 1234 },
  { name: "Abc", id: 1234 },
  { name: "Abc", id: 1234 },
  { name: "Abc", id: 1234 },
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
          {arr.map((a) => (
            <tr className="outline outline-black">
              <td className="outline outline-black px-2">a.name</td>
              <td className="px-2">a.code</td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

export default page;
