import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/Home.module.css";

const HeroPage = () => {
  return (
    <>
      <div className=" h-61 flex justify-between  px-50 vp-768:px-14 w-full">
        <div className="  vp-600:w-87 flex justify-center items-center">
          <Image
            src="/images/inso_logo.svg"
            alt="Inso Logo"
            draggable="false"
            layout="intrinsic"
            width="129"
            height="60"
          />
        </div>
        <div className="flex items-center  gap-8 vp-600:gap-4">
          <Link passHref href="/auth/login">
            <button className="btn-outline w-133 vp-600:w-77 vp-600:h-33 h-44 text-md">
              Log in
            </button>
          </Link>
          <Link passHref href="/auth/signup">
            <button className="btn w-133 vp-600:w-119 vp-600:h-33 h-44 text-md">
              Get started
            </button>
          </Link>
        </div>
      </div>
      <div className="flex vp-768:flex-col justify-between  items-center overflow-hidden pl-50 vp-768:px-14 vp-768:mt-50 ">
        <div className="  w-561 vp-768:w-full ">
          <h1 className={`${styles.heading}`}>Share ideas,</h1>
          <h1 className={`${styles.heading} mb-7`}> discover meaning</h1>
          <h4 className="text-gray-text vp-768:w-8/12 vp-600:w-9/12">
            Power equitable achievement through developmental discussions about
            any topic.
          </h4>

          <div className="mt-70 vp-768:mt-48 flex vp-768:flex-col items-center vp-768:items-start">
            <button className="btn text-xl vp-768:text-lg vp-600:text-sm mr-20  w-262 h-60 vp-768:h-50  vp-768:mb-20">
              Get started for free
            </button>
            <input
              type="text"
              className="w-262 h-60 vp-768:h-50  px-25  text-xl vp-768:text-lg vp-600:text-sm rounded"
              placeholder="Enter inso code"
            />
          </div>
        </div>

        <div className=" w-660 vp-768:w-full h-600 vp-600:h-450 relative ">
          <div className=" w-full absolute top-0 bottom-0  flex justify-center items-center vp-600:hidden  mt-60">
            <Image
              src="/images/hero_image_resp.svg"
              alt="Inso Logo"
              draggable="false"
              layout="intrinsic"
              width="800"
              height="700"
            />
          </div>
          <div className="  hidden vp-600:flex mt-60 absolute -right-10">
            <Image
              src="/images/hero_image_resp.svg"
              alt="Inso Logo"
              draggable="false"
              layout="intrinsic"
              width="800"
              height="800"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroPage;
