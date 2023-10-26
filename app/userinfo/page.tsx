"use client";
import { useUser, useAuth } from "@clerk/nextjs";
 
export default function Example() {
  const { isLoaded, isSignedIn, user } = useUser();
  const { userId, sessionId, getToken } = useAuth();

  if (!isLoaded || !isSignedIn) {
    return null;
  }
 
  const fetchData = async () => {
    try {
      const response = await fetch('https://edtus.vercel.app/api/auth', {
        method: 'GET',
      });

      if (response.status === 200) {
        const data = await response.json();
        console.log(data);
      } else if (response.status === 401) {
        console.error('Unauthorized access.');
      } else {
        console.error('An error occurred during the API request.');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  fetchData();

  return <div>Hello,{userId}, {user.firstName} welcome to Clerk</div>;
}
