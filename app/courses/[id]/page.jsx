"use client";
import CourseDetailHero from "@/components/courses/CourseDetailHero";
import { allcourses } from "@/data/allcourses";
import { Form, Formik, Field, ErrorMessage } from "formik";
import React from "react";
import * as Yup from "yup"; // Import Yup for validation

function CourseDetail({ params: { id } }) {
  const course = allcourses?.find((course) => course.id === id);

  // Validation schema using Yup
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phone: Yup.string()
      .matches(/^[0-9]+$/, "Phone number is not valid")
      .required("Phone number is required"),
  });

  return (
    <div className="flex flex-col md:flex-row px-4 lg:px-10 gap-10">
      <div className="flex-[3]">
        <CourseDetailHero course={course} />
        <section className="grid grid-cols-1 mt-3 lg:mt-0 md:grid-cols-3 gap-4">
          <div className="col-span-2 space-y-3 lg:space-y-0">
            <div className="lg:p-6">
              <h5 className="text-2xl font-semibold mb-4">
                Content in this course
              </h5>
              <ul className="list-disc list-inside px-4 space-y-2">
                {course?.content?.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="lg:p-6">
              <h5 className="text-2xl font-semibold mb-4">
                What you&apos;ll learn
              </h5>
              <ol className="list-decimal list-inside px-4 space-y-2">
                {course?.what_you_will_learn?.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ol>
            </div>
          </div>
        </section>
      </div>
      <aside className="flex-1 max-w-[340px] md:w-auto mb-4">
        <div className="p-4 rounded border text-white">
          <h1 className="text-2xl font-semibold mb-4 text-black">Book this course</h1>
          <Formik
            initialValues={{ name: "", email: "", phone: "" }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            {({ values, handleChange, handleSubmit }) => (
              <Form onSubmit={handleSubmit} className="space-y-4 text-black">
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
                  <label htmlFor="phone" className="block text-lg font-medium">
                    Phone Number
                  </label>
                  <Field
                    name="phone"
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded"
                  />
                  <ErrorMessage
                    name="phone"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                <button
                  type="submit"
                  className="bg-navy text-white border border-navy hover:bg-white hover:text-navy font-bold rounded py-2 px-4"
                >
                  Submit
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
