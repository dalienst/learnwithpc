"use client";

import { useQuery } from "@tanstack/react-query";
import useAxiosAuth from "../useAxiosAuth";
import useUserId from "../useUserId";
import { getUser } from "@/services/accounts";

export function useFetchAccount() {
  const axios = useAxiosAuth();
  const userId = useUserId();

  return useQuery({
    queryKey: ["account", userId],
    queryFn: () => getUser(userId, axios),
    enabled: !!userId,
  });
}
