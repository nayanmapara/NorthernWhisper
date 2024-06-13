"use client";

import React, { useRef, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import emailjs from "@emailjs/browser";

const ContactPage: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID!,
        EMAILJS_TEMPLATE_ID!,
        {
          from_name: form.name,
          to_name: "Northern Whisper Team",
          from_email: form.email,
          to_email: "contact@northernwhisper.com",
          message: form.message,
        },
        EMAILJS_PUBLIC_KEY
      );
      setLoading(false);
      alert("Thank you. We will get back to you as soon as possible.");

      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      setLoading(false);
      console.error(error);
      alert("Oops, something went wrong. Please try again.");
    }
  };

  return (
    <div className="bg-[#03040B] flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow flex flex-col items-center justify-center p-10">
        <h1 className="text-4xl font-bold text-white mb-8">Contact Us</h1>
        <form ref={formRef} onSubmit={handleSubmit} className="bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-md">
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-400">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-400">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium text-gray-400">Message</label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
              rows={4}
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-md transition duration-300"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;