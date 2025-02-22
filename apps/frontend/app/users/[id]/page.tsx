"use client";

import { useParams } from "next/navigation";
import { useGetUser } from "@/hooks/useGetUser";

export default function UserDetailPage() {
  const params = useParams(); // ✅ params を取得
  const userId = Number(params.id); // ✅ id を数値に変換

  /**
   * MEMO: ⭐️ 仮にuseQueryを使用したhooksを使用しない場合は以下のようにAPIを直接叩く必要がある
   * const res = await apiClient.user._id(Number(params.id)).get(); // ✅ GET /user/:id
   * const user = res.body;
   */

  // MEMO: ⭐️ 今、useQueryを使用したhooksがあるので以下のように記述
  const { data: user, isLoading, error } = useGetUser(userId);

  if (isLoading) return <p>Loading...</p>;
  if (error || !user) return <p>Error fetching user</p>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">User Detail</h1>
      <p>ID: {user.id}</p>
      <p>Name: {user.name}</p>
    </div>
  );
}
