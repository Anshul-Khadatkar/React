// eslint-disable-next-line no-unused-vars
import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const { userid } = useParams();
  return (
    <>
      <div className="flex justify-center">
        <div className="bg-gray-600 text-3xl text-white p-4">User: {userid}</div>
      </div>

      
    </>
  );
}

export default User;
