"use client";
 
export default function Example() {

  const fetchData = async () => {
    try {
      const response = await fetch('https://edtus.vercel.app/api/populate', {
        method: 'POST',
        body:JSON.stringify({
            id:12345
        }),
      });
      console.log(response);
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  fetchData();

  return <div>Hello,welcome to Clerk</div>;
}
