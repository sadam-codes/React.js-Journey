import React, { useEffect, useState } from "react";

function Github() {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch("https://api.github.com/users/sadam-codes")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center bg-gray-800 text-white p-6">
      <div className="bg-gray-700 rounded-lg shadow-lg p-8 w-full max-w-2xl">
        <div className="flex flex-col items-center">
          <img
            src={data.avatar_url}
            alt="GitHub Avatar"
            className="rounded-full border-4 border-orange-500 shadow-md"
            width={150}
          />
          <h1 className="text-3xl font-bold mt-4">{data.name || "No Name"}</h1>
          <p className="text-gray-400 text-sm">{data.location || "No Location"}</p>
          <a
            href={data.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 mt-2 hover:underline"
          >
            @{data.login}
          </a>
        </div>

        <div className="mt-6 space-y-4">
          <div className="flex justify-between">
            <span className="font-medium text-lg">Public Repositories:</span>
            <span className="text-orange-500 font-semibold">{data.public_repos || 0}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium text-lg">Followers:</span>
            <span className="text-orange-500 font-semibold">{data.followers || 0}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium text-lg">Following:</span>
            <span className="text-orange-500 font-semibold">{data.following || 0}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium text-lg">Account Created:</span>
            <span className="text-gray-400">
              {new Date(data.created_at).toLocaleDateString() || "N/A"}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium text-lg">Last Updated:</span>
            <span className="text-gray-400">
              {new Date(data.updated_at).toLocaleDateString() || "N/A"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Github;
