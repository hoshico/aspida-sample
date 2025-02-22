
import { useQuery } from "@tanstack/react-query";
import { apiClient } from ".";

// MEMO: 「useGetUserList」はユーザー一覧を取得するためのカスタムフック
export const useGetUserList = () => {
  // MEMO: useQueryはデータの取得・キャッシュ管理・リフレッシュを自動で行うReactQueryのフック
  return useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      // MEMO: apiClientはopenapi2aspidaで生成されたクライアント(型安全にAPIをリクエストできるオブジェクト)
      // MEMO: apiClient.users.get()はGET /usersにリクエストを送る
      const res = await apiClient.users.get();
      return res.body;
    },
  });
};
