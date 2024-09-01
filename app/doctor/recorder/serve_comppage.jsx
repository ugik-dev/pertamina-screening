// "use client"; // jika alert mau tampil di client
import Breadcrumb from "@/components/breadcrumb";
import RecordCard from "@/components/RecordCard";
import axios from "axios";
// import React, { useState, useEffect } from "react";
async function fetchData() {
  try {
    const optionAxios = {
      headers: {
        "x-api-key": "SECRET", // Ganti dengan API key yang benar
      },
    };
    const response = await axios.get(
      "http://localhost:5000/api/users",
      optionAxios
    );
    if (response.data && response.data.code === 200) {
      return { users: response.data.data, err: null };
    } else {
      err = "Unexpected response structure:" + response.data;
      console.error("Unexpected response structure:", response.data);
      return [], null;
    }
  } catch (error) {
    console.log(error.response.data.status);
    const errMessage = error.response.data
      ? error.response.data.status +
        (error.response.data.data ? " " + error.response.data.data : "")
      : error.message;
    return { users: [], err: errMessage };
  }
}
export default async function RecorderPage() {
  const { users, err } = await fetchData();
  return (
    <>
      {err && <div className="bg-red-50 text-red-700 p-4">Warning: {err}</div>}

      <div className="flex flex-wrap">
        {users.length > 0 ? (
          users.map((user) => <RecordCard key={user.id} user={user} />)
        ) : (
          <div>No users found.</div>
        )}
      </div>
    </>
  );
}
