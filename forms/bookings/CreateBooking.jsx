"use client";
import { createBooking } from "@/services/bookings";
import { Formik, Form, Field } from "formik";
import React, { useState } from "react";
import toast from "react-hot-toast";

function CreateBooking({ course }) {
  const [loading, setLoading] = useState(false);

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        contact: "", // you can include a select for different codes i.e +254 +234
        preferred_time: "", // different times of the day
        year_group: "",
        notes: "",
        course: course?.reference,
      }}
      onSubmit={async (values, { resetForm }) => {
        setLoading(true);
        try {
          await createBooking(values);
          toast.success("Booking created successfully");
          resetForm();
          setLoading(false);
        } catch (error) {
          toast.error("Failed to create booking");
        }
      }}
    ></Formik>
  );
}

export default CreateBooking;
