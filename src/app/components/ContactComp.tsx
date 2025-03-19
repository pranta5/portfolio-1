"use client";
import {FaPhone, FaEnvelope, FaFacebook, FaXTwitter, FaLinkedin, FaGithub, FaUser } from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";

const ContactMeComp = () => {
  return (
    <section className="bg-[#F9F8F6] py-16 px-6 md:px-20">
      <h2 className="text-4xl font-bold text-lefy mb-10 pl-4">CONTACT ME</h2>
      
      <div className="grid md:grid-cols-[1fr_3fr] gap-10 max-w-6xl mx-auto">
        {/* Left Side - Contact Info */}
        <div className="bg-white shadow-lg p-6 rounded-lg">
          <div className="flex items-start gap-4 mb-6">
            <FaMapMarkerAlt size={24} />
            <div>
              <h3 className="font-semibold">OUR OFFICE:</h3>
              <p className="text-gray-600">Kolkata, West Bengal, India</p>
            </div>
          </div>

          <div className="flex items-start gap-6 mb-6">
            <FaPhone size={24} />
            <div>
              <h3 className="font-semibold">CONTACT NUMBER:</h3>
              <p className="text-gray-600">+1234321321</p>
            </div>
          </div>

          <div className="flex items-start gap-6 mb-8">
            <FaEnvelope size={24} />
            <div>
              <h3 className="font-semibold">EMAIL US:</h3>
              <p className="text-gray-600">websitename@mail.com</p>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6">
            <FaFacebook size={28} className="cursor-pointer hover:text-blue-600" />
            <FaXTwitter size={28} className="cursor-pointer hover:text-gray-500" />
            <FaLinkedin size={28} className="cursor-pointer hover:text-blue-500" />
            <FaGithub size={28} className="cursor-pointer hover:text-gray-500" />
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="bg-white shadow-lg p-6 rounded-lg">
          <form>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block font-medium">FULL NAME</label>
                <div className="flex items-center border border-gray-300 rounded-md p-2 mt-1">
                  <FaUser className="text-gray-400 mr-2" />
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full focus:outline-none"
                  />
                </div>
              </div>
              <div>
                <label className="block font-medium">EMAIL ADDRESS</label>
                <div className="flex items-center border border-gray-300 rounded-md p-2 mt-1">
                  <FaEnvelope className="text-gray-400 mr-2" />
                  <input
                    type="email"
                    placeholder="hello@websitename.com"
                    className="w-full focus:outline-none"
                  />
                </div>
              </div>
            </div>

            <div className="mt-4">
              <label className="block font-medium">SUBJECT</label>
              <div className="flex items-center border border-gray-300 rounded-md p-2 mt-1">
                <FaUser className="text-gray-400 mr-2" />
                <input
                  type="text"
                  placeholder="Your Subject"
                  className="w-full focus:outline-none"
                />
              </div>
            </div>

            <div className="mt-4">
              <label className="block font-medium">YOUR MESSAGE</label>
              <textarea
                placeholder="Write your message"
                className="w-full border border-gray-300 rounded-md p-2 mt-1 focus:outline-none"
                rows={4}
              ></textarea>
            </div>

            <button className="bg-black text-white font-semibold px-6 py-2 mt-4 rounded-md w-full hover:bg-gray-800">
              Send Me Message ✉️
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactMeComp;
