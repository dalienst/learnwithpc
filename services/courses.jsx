"use client";
import { apiMultipartActions } from "@/tools/api";

export const getCourses = async () => {
  const response = await apiMultipartActions?.get("/api/courses/");
  return response?.data?.results;
};

export const getCourseDetails = async (reference) => {
  const response = await apiMultipartActions?.get(`/api/courses/${reference}/`);
  return response?.data;
};

export const createCourse = async (formData, axios) => {
  await apiMultipartActions?.post("/api/courses/create/", formData, axios);
};

export const getCourseDetail = async (slug, axios) => {
  const response = await apiMultipartActions?.get(
    `/api/courses/${slug}/`,
    axios
  );
  return response?.data;
};
