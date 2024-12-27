'use client'
import { apiActions } from "@/tools/api";

export const createTodo = async (values, axios) => {
  await apiActions?.post("/api/tasks/", values, axios);
};

export const updateTodo = async (slug, values, axios) => {
    await apiActions?.patch(`/api/tasks/${slug}/`, values, axios);
};

export const getTodos = async (axios) => {
    const response = await apiActions?.get("/api/tasks/", axios);
    return response?.data?.results;
};
  
  export const getTodoDetail = async (slug, axios) => {
    const response = await apiActions?.get(`/api/tasks/${slug}/`, axios);
    return response?.data;
};
