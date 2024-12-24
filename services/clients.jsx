"use client";
import { apiActions } from "@/tools/api";

export const getClients = async (axios) => {
  const response = await apiActions?.get("/api/clients/", axios);
  return response?.data?.results;
};

export const getClientDetail = async (slug, axios) => {
  const response = await apiActions?.get(`/api/clients/${slug}/`, axios);
  return response?.data;
};

export const updateClient = async (slug, formData, axios) => {
  await apiActions?.patch(`/api/clients/${slug}/`, formData, axios);
};
