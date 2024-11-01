"use client";
import { useEffect, useState } from "react";
import { fetchUsers, User } from "./utils/utils";
import SearchBar from "./components/SearchBar";

export default function Demo() {
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const loadUsers = async () => {
      setLoading(true);

      const users = await fetchUsers(search);
      setUsers(users);

      setLoading(false);
    };
    loadUsers();
  }, [search]);

  return (
    <div className="tutorial">
      <SearchBar onChange={(value) => setSearch(value)} />
      {loading && <div>Loading...</div>}
      {!loading &&
        users.map((user) => {
          return <div key={user.id}>{user.name}</div>;
        })}
    </div>
  );
}
