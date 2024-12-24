"use client";

import { apiMultipartActions } from "@/tools/api";

export const getUser = async (userId, axios) => {
  const response = await apiMultipartActions?.get(
    `/api/accounts/${userId}/`,
    axios
  );
  return response?.data || {};
};

export const updateProfile = async (userId, formData, axios) => {
  await apiMultipartActions?.patch(`/api/accounts/${userId}/`, formData, axios);
};
