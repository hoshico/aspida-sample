import { useQuery } from "@tanstack/react-query";
import { apiClient } from ".";

// MEMO: 「useGetUser」は特定のユーザー情報を取得するためのカスタムフック
export const useGetUser = (id: number | null) => {
  // MEMO: useQueryはデータの取得・キャッシュ管理・リフレッシュを自動で行うReact Queryのフック
  return useQuery({
    queryKey: ["user", id], // MEMO: queryKeyはデータをキャッシュする際の識別キー (idごとにキャッシュが分かれる)
    queryFn: async () => {
      // MEMO: id が null の場合はリクエストを送らずに null を返す
      if (id === null) return null;

      // MEMO: apiClientはopenapi2aspidaで生成されたクライアント (型安全にAPIをリクエストできるオブジェクト)
      // MEMO: apiClient.user._id(id).get() は GET /user/:id にリクエストを送る
      const res = await apiClient.user._id(id).get();
      return res.body;
    },
    enabled: id !== null, // MEMO: enabledを設定することでidがnullの場合はリクエストを実行しない
  });
};
