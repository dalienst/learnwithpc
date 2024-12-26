"use client";
import { createBooking } from "@/services/bookings";
import { Formik, Form, Field, ErrorMessage } from "formik";
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
    >
      {({ touched }) => (
            <div className="grid place-content-center h-screen">
              <h3 className="text-2xl font-semibold text-center text-navy">Book this course</h3>

              <Form className="border w-[90vw] md:w-[460px] p-4 rounded-lg mt-3">
                <div className="flex flex-col gap-3 mb-3">
                  <label htmlFor="name">
                    Name
                  </label>
                  <Field
                    type="text"
                    className="border py-2 px-4 rounded-md"
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                  />
                  <ErrorMessage
                    name="name"
                    component="p"
                    className="text-red-500"
                  />
                </div>
                <div className="flex flex-col gap-3 mb-3">
                  <label htmlFor="business_name">
                    Business name
                  </label>
                  <Field
                    type="text"
                    className="border py-2 px-4 rounded-md"
                    id="business_name"
                    name="business_name"
                    placeholder="Enter your business name"
                  />
                  <ErrorMessage
                    name="business_name"
                    component="p"
                    className="text-red-500"
                  />
                </div>
                <div className="flex flex-col gap-3 mb-3">
                  <label htmlFor="email">
                    Email
                  </label>
                  <Field
                    type="email"
                    className="border py-2 px-4 rounded-md"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                  />
                  <ErrorMessage
                    name="email"
                    component="p"
                    className="text-red-500"
                  />
                </div>
                <div className="flex flex-col gap-3 mb-3">
                  <label htmlFor="password">
                    Password
                  </label>
                  <Field
                    type="password"
                    className="border py-2 px-4 rounded-md"
                    id="password"
                    name="password"
                    placeholder="Enter your password"
                  />
                  <ErrorMessage
                    name="password"
                    component="p"
                    className="text-red-500"
                  />
                </div>
                <div className="flex flex-col gap-3 mb-3">
                  <label
                    htmlFor="confirmPassword"
                  >
                    Confirm Password
                  </label>
                  <Field
                    type="password"
                    className="border py-2 px-4 rounded-md"
                    id="confirmPassword"
                    name="confirmPassword"
                    placeholder="Confirm your password"
                  />
                  <ErrorMessage
                    name="confirmPassword"
                    component="p"
                    className="text-red-500"
                  />
                </div>
                <button
                  type="submit"
                  className={`w-full px-4 py-2 text-white font-semibold rounded-md shadow ${
                    loading
                      ? "bg-[rgba(39,51,75,0.9)]"
                      : "bg-navy hover:bg-[rgb(33,43,62)] focus:ring-2 focus:ring-navy focus:ring-offset-2"
                  }`}
                  disabled={loading}
                >
                  {loading ? 'Booking...' : 'Book'}
                </button>
              </Form>
            </div>
          )}
    </Formik>
  );
}

export default CreateBooking;
