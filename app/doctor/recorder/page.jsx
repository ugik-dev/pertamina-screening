// "use client"; // jika alert mau tampil di client
import Breadcrumb from "@/components/breadcrumb";
import RecordCard from "@/components/RecordCard";

import React from "react";
console.log("Log ini jalan di server saja");
export default function RecorderPage() {
  const user = {
    name: "ugik",
    status: true,
    created_at: "10.10",
  };
  return (
    <>
      <div className="flex flex-wrap">
        <RecordCard user={user} />
        <RecordCard user={user} />
        <RecordCard user={user} />
        <RecordCard user={user} />
        <RecordCard user={user} />
        <RecordCard user={user} />
      </div>
    </>
  );
}
