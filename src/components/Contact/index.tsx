"use client";
import sociallinks from "../../../data/social-links";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const Contact = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { name, email, message } = data;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setData({ ...data, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name || !email || !message) {
      toast.error("Please fill in all fields.");
      return;
    }

    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
    const options = { publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY };

    try {
      const res = await emailjs.send(
        serviceID,
        templateID,
        {
          from_name: name,
          to_name: "Daelyte",
          message: message,
          reply_to: email,
        },
        options
      );

      if (res.status === 200) {
        toast.success("Message sent successfully!");
        setData({ name: "", email: "", message: "" });
        console.log("Message sent successfully!");
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed to send message. Please try again later.");
    }
  };

  return (
    <main className="px-5 max-w-[1000px] mx-auto flex-1">
      <section className="py-20">
        {/* Page Title */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 inline-block px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-500 rounded-2xl text-white transition-all duration-300 hover:shadow-[0_10px_40px_rgba(239,68,68,0.6)] cursor-default">
            Get In Touch
          </h1>
          <p className="text-white text-lg max-w-2xl mx-auto">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <form onSubmit={handleSubmit} className="w-full bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
              Send a Message
            </h3>
            <div className="mb-5">
              <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all outline-none"
                id="name"
                placeholder="Enter your name"
                value={name}
                onChange={handleChange}
                required
                suppressHydrationWarning
              />
            </div>
            <div className="mb-5">
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all outline-none"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={handleChange}
                required
                suppressHydrationWarning
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                Message
              </label>
              <textarea
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all outline-none resize-none"
                id="message"
                rows={5}
                placeholder="Enter your message"
                value={message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full px-6 py-4 rounded-lg bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold hover:from-purple-700 hover:to-pink-600 transform hover:scale-[1.02] transition-all shadow-lg hover:shadow-xl"
            >
              Send Message
            </button>
          </form>

          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl shadow-xl p-8 border border-purple-100">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
              Connect with Me
            </h3>
            <p className="text-gray-600 mb-6">
              Let's connect on social media or reach out directly!
            </p>
            
            <div className="flex gap-3 flex-wrap mb-8">
              {sociallinks.map((item, i) => {
                return (
                  <a
                    key={i}
                    className="bg-gradient-to-r from-purple-600 to-pink-500 p-3 rounded-lg hover:scale-110 duration-300 text-white shadow-lg hover:shadow-xl transform"
                    href={item.url}
                    target="_blank"
                    aria-label={`${item.name} link`}
                  >
                    {item.icon}
                  </a>
                );
              })}
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-lg font-semibold mb-3 text-gray-800 flex items-center gap-2">
                <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
                Email
              </h3>
              <a 
                href="mailto:daelytee@gmail.com" 
                className="text-purple-600 hover:text-pink-500 font-medium transition-colors"
              >
                daelytee@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
