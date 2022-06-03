import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/Home.module.css";

const HeroPage = () => {
  return (
    <>
      <div className=" h-61 flex justify-between  px-50">
        <div>
          <Image
            src="/images/inso_logo.svg"
            alt="Inso Logo"
            draggable="false"
            layout="fixed"
            width="129"
            height="60"
          />
        </div>
        <div className="flex items-center  gap-8">
          <Link passHref href="/auth/login">
            <button className="btn-outline w-133 h-44 text-md">Log in</button>
          </Link>
          <Link passHref href="/auth/signup">
            <button className="btn w-133 h-44 text-md">Get started</button>
          </Link>
        </div>
      </div>
      <div className=" flex justify-between  items-center overflow-hidden pl-50">
        <div className=" w-561">
          <h1 className={`${styles.heading}`}>Share ideas,</h1>
          <h1 className={`${styles.heading} mb-7`}> discover meaning</h1>
          <h4 className="text-gray-text">
            Power equitable achievement through developmental discussions about
            any topic.
          </h4>

          <div className="mt-70 flex items-center">
            <button className="btn text-xl mr-20 px-42 w-262 h-60">
              Get started for free
            </button>
            <input
              type="text"
              className="w-280 h-60 px-25 text-xl rounded"
              placeholder="Enter inso code"
            />
          </div>
        </div>

        <div className=" w-660 h-660 relative">
          <div className=" w-full absolute top-0 bottom-0  -right-60 flex justify-center items-center ">
            <Image
              src="/images/hero_image.svg"
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
