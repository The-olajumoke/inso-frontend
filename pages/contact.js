import React, { useState } from "react";
import Layout from "@/components/Layout";
import Input from "@/components/Input";
const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [Email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  return (
    <Layout>
      <div className="p-40">
        <h4 className=" text-primary-darkGreen mb-18">Contact Us</h4>
        <h5 className="w-528 mb-49    text-gray-text">
          We’re happy to answer any questions or requests you may have about
          Pretzl.
        </h5>
        <div className="flex items-center mb-12">
          <h6 className=" w-182  text-gray-text">Name:</h6>
          <input
            type="text"
            className="h-40 px-15 border  border-blue-inputBlue w-414"
            placeholder="Input  your name"
          />
        </div>
        <div className="flex items-center mb-12">
          <h6 className=" w-182  text-gray-text">Email address:</h6>
          <input
            type="text"
            className="h-40 px-15 border  border-blue-inputBlue w-414"
            placeholder="Input email address"
          />
        </div>
        <div className="flex items-start mb-20">
          <h6 className=" w-182  text-gray-text">Message: </h6>
          <textarea
            type="text"
            placeholder="What would you like to tell?"
            className="w-414 border  border-blue-inputBlue py-12 px-15 h-158 "
          ></textarea>
        </div>
        <div className="w-600 flex justify-end ">
          <button disabled={true} className="btn h-34 w-149  text-sm">
            Send message
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
