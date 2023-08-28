"use client"
import React, {useState} from "react";

const page = () => {

  const [schoolID, setSchoolID] = useState('');
  const [classNumber, setClassNumber] = useState('');
  const [sectionNumber, setSectionNumber] = useState('');
  const [name, setname] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const response = await fetch("http://localhost:3000/api/auth", {
        method: "POST",
        body: JSON.stringify({
          name: name,
          schoolID: schoolID,
          class: classNumber,
          section:sectionNumber,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      if (!response) {
        throw new Error('Response is undefined');
      }
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    setLoading(false);
  };

  return (
  <div>
  {loading? (<h1>Loading</h1>):(<h1>Not Loading</h1>)}
      <h1>Provide Details</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="schoolID">School ID:</label>
        <input
          type="text"
          id="schoolID"
          value={schoolID}
          onChange={(event) => setSchoolID(event.target.value)}
        />

        <label htmlFor="classNumber">Class:</label>
        <input
          type="text"
          id="classNumber"
          value={classNumber}
          onChange={(event) => setClassNumber(event.target.value)}
        />

        <label htmlFor="sectionNumber">Section:</label>
        <input
          type="text"
          id="sectionNumber"
          value={sectionNumber}
          onChange={(event) => setSectionNumber(event.target.value)}
        />

        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(event) => setname(event.target.value)}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default page;
