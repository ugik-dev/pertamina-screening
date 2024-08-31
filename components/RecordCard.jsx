import React from "react";

export default function RecordCard({ user }) {
  const i = Math.floor(Math.random() * 69) + 1;
  return (
    <div className="flex max-w-sm mb-2 mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="w-2/3 p-4">
        <h2 className="text-gray-900 font-bold text-xl">{user.name}</h2>
        <p className="mt-2 text-gray-600"> {user.created_at}</p>
        <p className="mt-2 text-gray-600"> {user.status ? "FIT" : "NonFIT"}</p>
      </div>
      <div className="w-1/3">
        <img
          className="object-cover h-full w-full"
          src={`https://i.pravatar.cc/150?img=${i}`}
          alt="Foto"
        />
      </div>
    </div>
  );
}
