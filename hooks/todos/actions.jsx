'use client'

import { useQuery } from "@tanstack/react-query";
import useAxiosAuth from "../useAxiosAuth";
import { getTodoDetail, getTodos } from "@/services/todos";

export function useFetchTodos() {
    const axios = useAxiosAuth();
    return useQuery({
      queryKey: ["todos"],
      queryFn: () => getTodos(axios),
    });
};

  export function useFetchTodoDetail(slug) {
    const axios = useAxiosAuth();
    return useQuery({
      queryKey: ["todo", slug],
      queryFn: () => getTodoDetail(slug, axios),
    });
};