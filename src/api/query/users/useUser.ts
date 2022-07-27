import { apiFetcher } from "@/services/ApiService";
import { User } from "@/types/user";
import { useQuery } from "@tanstack/react-query";

export const getUser = (userId: number) =>
  apiFetcher<User>({
    method: "GET",
    url: `users/${userId}`,
  });

export const useUser = (userId: number) => {
  return useQuery({
    queryKey: ["users", { userId }],
    queryFn: () => getUser(userId),
    staleTime: 60000,
  });
};
