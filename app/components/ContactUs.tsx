"use client";
import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import LoadingSpinner from "./spinner";
import TypewriterHTML from "./animation/letterAnimation";

interface Form {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

function ContactUs() {
  const [formData, setFormData] = useState<Form>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submitHandleChange = async (e: any) => {
    e.preventDefault();
    try {
      setLoading(true);
      const dataSubmited = await axios.post("/api/contact-us", formData);

      console.log(dataSubmited?.data?.message);
      toast.success(dataSubmited?.data?.message);

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (err: any) {
      toast.error(err?.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative bg-gradient-to-b from-[#F3FF9F] to-white md:py-16 py-8 md:px-10 px-4">
      <div className=" grid lg:grid-cols-2 gap-16 bg-white shadow-lg   md:p-16 p-4">
        <div className="flex flex-col md:gap-16 gap-4 md:border-r border-0  border-gray-300">
          <h2 className="text-lg uppercase tracking-wider text-gray-700">
            Contact Us
          </h2>

          <div className="h-[100px]">
            <TypewriterHTML
              html={`  <h1 class="text-[44px] md:text-[84px] font-bold leading-tight">
            Reach Us
          </h1>`}
            />
          </div>
          <p className="text-gray-600 text-lg">
            Have a project in mind or need expert guidance? We’d love to{" "}
            <br></br> hear from you. Reach out to us for inquiries,
            collaborations, or <br></br> consultations.
          </p>

          <div className="space-y-4 text-gray-700">
            <p className="font-medium p-0 m-0">Phone: (808) 555-0111 3891</p>
            <p className="font-medium">
              Ranchview Dr. Richardson, <br></br> California 62639
            </p>
          </div>
        </div>

        <form
          className="flex flex-col md:gap-16 gap-4"
          onSubmit={submitHandleChange}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className=" flex flex-col gap-2">
              <label className="text-[20px] font-medium">First Name </label>
              <input
                onChange={handleChange}
                value={formData.firstName}
                name="firstName"
                type="text"
                className="border-b border-gray-400 focus:border-black outline-none "
              />
            </div>

            <div className=" flex flex-col gap-2">
              <label className="text-[20px] font-medium">Last Name </label>
              <input
                value={formData.lastName}
                onChange={handleChange}
                name="lastName"
                type="text"
                className="border-b border-gray-400 focus:border-black outline-none "
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className=" flex flex-col gap-2">
              <label className="text-[20px] font-medium">Phone Number </label>
              <input
                type="Number"
                value={formData.phone}
                onChange={handleChange}
                name="phone"
                className="border-b border-gray-400 focus:border-black outline-none "
              />
            </div>

            <div className=" flex flex-col gap-2">
              <label className="text-[20px] font-medium">Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={handleChange}
                name="email"
                className="border-b border-gray-400 focus:border-black outline-none "
              />
            </div>
          </div>

          <div className=" flex flex-col gap-2">
            <label className="text-[20px] font-medium">Message</label>
            <textarea
              onChange={handleChange}
              value={formData.message}
              name="message"
              className="border-b border-gray-400 focus:border-black outline-none py-2"
            />
          </div>

          <div className="flex justify-center items-center">
            <button
              type="submit"
              className="mt-4 flex cursor-pointer items-center justify-center gap-3 border border-gray-800 pl-12  font-medium hover:bg-gray-100 transition"
            >
              Submit
              {loading ? (
                <LoadingSpinner />
              ) : (
                <span className="bg-[#F3FF9F] p-4 rounded-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-black"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 12h14M12 5l7 7-7 7"
                    />
                  </svg>
                </span>
              )}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default ContactUs;
