"use client";

import { useQuery } from "@tanstack/react-query";
import useAxiosAuth from "../useAxiosAuth";
import {
  getCourseDetail,
  getCourseDetails,
  getCourses,
} from "@/services/courses";

// The ones without axios can be accessed by anyone

export function useFetchCourses() {
  return useQuery({
    queryKey: ["courses"],
    queryFn: () => getCourses(),
  });
}

export function useFetchCourseDetail(slug) {
  return useQuery({
    queryKey: ["course", slug],
    queryFn: () => getCourseDetails(slug),
  });
}

export function useFetchAuthCourseDetail(slug) {
  const axios = useAxiosAuth();
  return useQuery({
    queryKey: ["course", slug],
    queryFn: () => getCourseDetail(slug, axios),
  });
}
