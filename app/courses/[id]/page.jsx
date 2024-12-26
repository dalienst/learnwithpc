"use client";
import CourseDetailHero from "@/components/courses/CourseDetailHero";
import { useFetchCourseDetail } from "@/hooks/courses/actions";
import { createBooking } from "@/services/bookings";
import { Form, Formik, Field, ErrorMessage } from "formik";
import React, { useState } from "react";
import toast from "react-hot-toast";
import * as Yup from "yup"; 

function CourseDetail({ params: { id } }) {
  const [loading, setLoading] = useState(false);
  const {isPending, data, error} = useFetchCourseDetail(id);
  if (isPending) return <div className="h-[80vh] grid place-content-center">Loading...</div>;
  if (error) return <div className="h-[80vh] grid place-content-center">Error: {error.message}</div>;

  // Validation schema using Yup
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    contact: Yup.string()
    .matches(/^[0-9]{10}$/, "Phone number must be exactly 10 digits")
    .required("Phone number is required"),
    year_group: Yup.string().required("Year group is required"), 
    preferred_time: Yup.string().required("Your preferred time is required")  
  });

  return (
    <div className="flex flex-col md:flex-row px-4 lg:px-10 gap-10">
      <div className="flex-[3]">
        <CourseDetailHero course={data} />
      </div>
      <aside className="flex-1 w-[340px] md:w-auto mb-4">
        <div className="p-4 rounded border text-white">
          <h1 className="text-2xl font-semibold mb-4 text-black">Book this course</h1>
          <Formik
            initialValues={{ name: "", email: "", contact: "", year_group:"", preferred_time:"", course: ""}}
            validationSchema={validationSchema}
            onSubmit={async(values , { resetForm }) => {
              const formData = new FormData();
              formData.append("name", values.name);
              formData.append("email", values.email);
              formData.append("contact", values.contact);
              formData.append("year_group", values.year_group);
              formData.append("course", data?.reference);
              formData.append("preferred_time", values.preferred_time);
              setLoading(true);
              try {
                await createBooking(formData);
                toast.success("Booking created successfully");
                resetForm();
              } catch (error) {
                toast.error("Failed to create booking");
                console.log(error,'error creating booking')
              }finally{
                setLoading(false);
              }
            }}
          >
            {({ handleSubmit }) => (
              <Form onSubmit={handleSubmit} className="space-y-3 text-black">
                <div>
                  <label htmlFor="name" className="block text-lg font-medium">
                    Name
                  </label>
                  <Field
                    name="name"
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded"
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-lg font-medium">
                    Email
                  </label>
                  <Field
                    name="email"
                    type="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="contact" className="block text-lg font-medium">
                    Phone Number
                  </label>
                  <Field
                    name="contact"
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded"
                  />
                  <ErrorMessage
                    name="contact"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="time" className="block text-lg font-medium">
                    Preferred time
                  </label>
                  <Field
                    name="preferred_time"
                    id='time'
                    as='select'
                    type="text"
                    className="w-full px-3 py-2 border bg-transparent border-gray-300 rounded"
                  >
                    <option value="">Select your preferred time</option>
                    <option value="6:30-8 am">6:30 - 8:00 am</option>
                    <option value="8:30-10 am">8:30 - 10:00 am</option>
                    <option value="1-2:30 pm">13:00 - 14:30 pm</option>
                    <option value="8-10 pm">19:30 - 21:00 pm</option>
                  </Field>
                  <ErrorMessage
                    name="preferred_time"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="year_group" className="block text-lg font-medium">
                    Year Group
                  </label>
                  <Field
                    name="year_group"
                    as='select'
                    type="text"
                    className="w-full px-3 py-2 border bg-transparent border-gray-300 rounded"
                  >
                    <option value="">Select Year Group</option>
                    <option value="1-10">1 - 10</option>
                    <option value="10-13">10 - 13</option>
                  </Field>
                  <ErrorMessage
                    name="year_group"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-navy text-white border border-navy hover:bg-white hover:text-navy font-bold rounded py-2 px-4"
                >
                  {loading ? 'Loading...' : 'Book now'}
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </aside>
    </div>
  );
}

export default CourseDetail;
