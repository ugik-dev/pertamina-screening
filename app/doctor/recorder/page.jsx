// "use client";

// import { useState, useEffect } from "react";
import axios from "axios";
import RecordCard from "@/components/RecordCard";

const fetchData = async () => {
  const optionAxios = {
    headers: {
      "x-api-key": "SECRET", // Ganti dengan API key yang benar
    },
  };

  try {
    const response = await axios.get(
      "https://backend-pertamina.ugikdev.site/api/users",
      optionAxios
    );

    if (response.data && response.data.code === 200) {
      return { users: response.data.data, err: null };
    } else {
      const err =
        "Unexpected response structure: " + JSON.stringify(response.data);
      console.error(err);
      return { users: [], err };
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    return { users: [], err: error.message };
  }
};

export default async function RecorderPage() {
  // const [users, setUsers] = useState([]);
  // const [err, setError] = useState(null);

  // useEffect(() => {
  //   const getUsers = async () => {
  const { users, err } = await fetchData();
  //   setUsers(users);
  //   setError(err);
  // };

  // getUsers();
  // }, []);

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
