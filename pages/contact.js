import React, { useState } from "react";
import Layout from "@/components/Layout";
import Input from "@/components/Input";
import Image from "next/image";
const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [Email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  return (
    <Layout title="Inso | Contact">
      <div className="p-40  vp-600:p-23 vp-980:p-46">
        <h4 className="vp-980:hidden text-primary-darkGreen mb-18">
          Contact Us
        </h4>
        <div className="items-center  h-50 mb-12 hidden vp-980:flex">
          <div className="flex justify-center items-center mr-23">
            <Image
              src="/icons/arrow_left_green.svg"
              alt=" Discussion dropdown "
              draggable="false"
              layout="fixed"
              width="18"
              height="18"
            />
          </div>
          <h4 className=" text-black-analText">Contact Us</h4>
        </div>
        <h5 className="w-528 vp-980:w-auto mb-49  text-black-analText">
          We’re happy to answer any questions or requests you may have about
          Pretzl.
        </h5>
        <div className="flex vp-980:flex-col items-center mb-12 vp-980:mb-26 vp-980:items-start">
          <h6 className="  w-182 vp-980:w-auto  text-gray-text vp-980:mb-6">
            Name:
          </h6>
          <input
            type="text"
            className="h-40 px-15 border  border-blue-inputBlue w-414 vp-980:w-full"
            placeholder="Input  your name"
          />
        </div>
        <div className="flex vp-980:flex-col items-center mb-12 vp-980:mb-26 vp-980:items-start">
          <h6 className="  w-182 vp-980:w-auto  text-gray-text vp-980:mb-6">
            Email address:
          </h6>
          <input
            type="text"
            className="h-40 px-15 border  border-blue-inputBlue w-414 vp-980:w-full"
            placeholder="Input email address"
          />
        </div>
        <div className="flex vp-980:flex-col items-center mb-12 vp-980:mb-26 vp-980:items-start">
          <h6 className=" w-182 vp-980:mb-6 vp-980:w-auto text-gray-text">
            Message:{" "}
          </h6>
          <textarea
            type="text"
            placeholder="What would you like to tell?"
            className="w-414 vp-980:w-full border  border-blue-inputBlue py-12 px-15 h-158 "
          ></textarea>
        </div>
        <div className="w-600 vp-980:w-auto flex justify-end ">
          <button disabled={true} className="btn h-34 w-149  text-sm">
            Send message
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
