"use client";
import useAxiosAuth from "@/hooks/useAxiosAuth";
import { updateBooking } from "@/services/bookings";
import { Formik } from "formik";
import React, { useState } from "react";
import toast from "react-hot-toast";

function UpdateBooking({ booking, slug }) {
  const [loading, setLoading] = useState(false);
  const axios = useAxiosAuth();

  return (
    <Formik
      initialValues={{
        status: booking?.status || "", // select field: Pending, Active, Completed
      }}
      onSubmit={async (values) => {
        setLoading(true);
        try {
          const formData = new FormData();
          formData.append("status", values.status);

          await updateBooking(slug, formData, axios);
          toast.success("Booking updated successfully");
        } catch (error) {
          toast.error("Failed to update booking");
        } finally {
          setLoading(false);
        }
      }}
    ></Formik>
  );
}

export default UpdateBooking;
