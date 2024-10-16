"use client";
import CourseDetailHero from '@/components/courses/CourseDetailHero';
import { allcourses } from '@/data/allcourses';
import { Form, Formik, Field, ErrorMessage } from 'formik';
import React from 'react';
import * as Yup from 'yup'; // Import Yup for validation

function CourseDetail({ params: { id } }) {
    const course = allcourses?.find((course) => course.id === id);

    // Validation schema using Yup
    const validationSchema = Yup.object().shape({
        name: Yup.string().required('Name is required'),
        email: Yup.string().email('Invalid email').required('Email is required'),
        phone: Yup.string()
            .matches(/^[0-9]+$/, 'Phone number is not valid')
            .required('Phone number is required'),
    });

    return (
        <>
            <CourseDetailHero course={course} />
            <main className="container mx-auto mb-3 px-4 py-3 max-w-screen-xl">
                <section className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
                    <div>
                        <div className="mb-4">
                            <h5 className="text-3xl font-semibold">Content in this course</h5>
                            <ul className="list-disc list-inside px-4">
                                {course?.content?.map((item) => (
                                    <li key={item} className="mb-1">{item}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="mb-4">
                            <h5 className="text-3xl font-semibold">What you'll learn</h5>
                            <ol className="list-decimal list-inside px-4">
                                {course?.what_you_will_learn?.map((item) => (
                                    <li key={item} className="mb-1">{item}</li>
                                ))}
                            </ol>
                        </div>
                    </div>

                    <div className='px-12'>
                        <div className="mb-4 p-4 bg-gray-100 rounded shadow">
                            <h5 className="text-3xl font-semibold mb-4">Book this course</h5>
                            <Formik
                                initialValues={{ name: '', email: '', phone: '' }}
                                validationSchema={validationSchema}
                                onSubmit={(values) => {
                                    // Handle form submission
                                    console.log(values);
                                }}
                            >
                                {({ values, handleChange, handleSubmit }) => (
                                    <Form onSubmit={handleSubmit} className="space-y-4">
                                        {/* Name Field */}
                                        <div>
                                            <label htmlFor="name" className="block text-lg font-medium">Name</label>
                                            <Field
                                                name="name"
                                                type="text"
                                                className="w-full px-3 py-2 border border-gray-300 rounded"
                                            />
                                            <ErrorMessage name="name" component="div" className="text-red-500 text-sm" />
                                        </div>

                                        {/* Email Field */}
                                        <div>
                                            <label htmlFor="email" className="block text-lg font-medium">Email</label>
                                            <Field
                                                name="email"
                                                type="email"
                                                className="w-full px-3 py-2 border border-gray-300 rounded"
                                            />
                                            <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
                                        </div>

                                        {/* Phone Field */}
                                        <div>
                                            <label htmlFor="phone" className="block text-lg font-medium">Phone Number</label>
                                            <Field
                                                name="phone"
                                                type="text"
                                                className="w-full px-3 py-2 border border-gray-300 rounded"
                                            />
                                            <ErrorMessage name="phone" component="div" className="text-red-500 text-sm" />
                                        </div>

                                        {/* Submit Button */}
                                        <button
                                            type="submit"
                                            className="w-full bg-navy text-white font-semibold py-2 px-4 rounded hover:bg-navy/90"
                                        >
                                            Submit
                                        </button>
                                    </Form>
                                )}
                            </Formik>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}

export default CourseDetail;
