"use client";
import Link from "next/link";
import { useGetUserList } from "../hooks/useGetUserList";

export default function UsersPage() {
  /**
   * MEMO: ⭐️ 仮に useQuery を使用した hooks を使用しない場合は以下のように API を直接叩く必要がある
   * const res = await apiClient.users.get(); // ✅ GET /users
   * const users = res.body;
   */

  // MEMO: ⭐️ 今、useQuery を使用した hooks があるので以下のように記述
  const { data: users, isLoading, error } = useGetUserList();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error fetching users</p>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">一覧ページ</h1>
      <ul className="mt-4 space-y-2">
        {users?.map((user) => (
          <Link key={user.id} href={`/users/${user.id}`}>
            <li className="p-2 border rounded-md">{user.name}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
