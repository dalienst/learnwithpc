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
                <section className="grid grid-cols-1 md:grid-cols-3 gap-4 md:mt-3">
                    <div className='col-span-2'>
                        <div className="p-6">
                            <h5 className="text-2xl font-semibold mb-4">Content in this course</h5>
                            <ul className="list-disc list-inside px-4 space-y-2">
                                {course?.content?.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        </div>

                        <div className=" p-6">
                            <h5 className="text-2xl font-semibold mb-4">What you&apos;ll learn</h5>
                            <ol className="list-decimal list-inside px-4 space-y-2">
                                {course?.what_you_will_learn?.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ol>
                        </div>
                    </div>

                    <div className='md:px-12 w-100'>
                        <div className="mb-4 p-4 bg-navy rounded shadow text-white">
                            <h5 className="text-2xl font-semibold mb-4">Book this course</h5>
                            <Formik
                                initialValues={{ name: '', email: '', phone: '' }}
                                validationSchema={validationSchema}
                                onSubmit={(values) => {
                                    console.log(values);
                                }}
                            >
                                {({ values, handleChange, handleSubmit }) => (
                                    <Form onSubmit={handleSubmit} className="space-y-4">
                                        <div>
                                            <label htmlFor="name" className="block text-lg font-medium">Name</label>
                                            <Field
                                                name="name"
                                                type="text"
                                                className="w-full px-3 py-2 border border-gray-300 rounded"
                                            />
                                            <ErrorMessage name="name" component="div" className="text-red-500 text-sm" />
                                        </div>

                                        <div>
                                            <label htmlFor="email" className="block text-lg font-medium">Email</label>
                                            <Field
                                                name="email"
                                                type="email"
                                                className="w-full px-3 py-2 border border-gray-300 rounded"
                                            />
                                            <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
                                        </div>

                                        <div>
                                            <label htmlFor="phone" className="block text-lg font-medium">Phone Number</label>
                                            <Field
                                                name="phone"
                                                type="text"
                                                className="w-full px-3 py-2 border border-gray-300 rounded"
                                            />
                                            <ErrorMessage name="phone" component="div" className="text-red-500 text-sm" />
                                        </div>

                                        <button
                                            type="submit"
                                            className="bg-white text-navy hover:bg-navy hover:border hover:border-white hover:text-white font-bold rounded py-2 px-4"
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
