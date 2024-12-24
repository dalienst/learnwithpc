"use client";
import useAxiosAuth from "@/hooks/useAxiosAuth";
import { createCourse } from "@/services/courses";
import { Formik } from "formik";
import React, { useState } from "react";

function CreateCourse() {
  const [loading, setLoading] = useState(false);
  const axios = useAxiosAuth();

  return (
    <Formik
      initialValues={{
        image: null,
        title: "",
        description: "",
        duration: "",
        method: "",
        level: "",
        tags: [],
        content: [],
        what_you_will_learn: [],
      }}
      onSubmit={async (values) => {
        setLoading(true);
        try {
          const formData = new FormData();
          if (values.image) {
            formData.append("image", values.image);
          }
          formData.append("title", values.title);
          formData.append("description", values.description);
          formData.append("duration", values.duration);
          formData.append("method", values.method);
          formData.append("level", values.level);
          formData.append("tags", values.tags);
          formData.append("content", values.content);
          formData.append("what_you_will_learn", values.what_you_will_learn);

          await createCourse(formData, axios);
          toast.success("Course created successfully");
          setLoading(false);
        } catch (error) {
          toast.error("Failed to create course");
        }
      }}
    ></Formik>
  );
}

export default CreateCourse;
