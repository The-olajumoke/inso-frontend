import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div className=" bg-primary-darkGreen h-748   relative overflow-hidden flex justify-center pt-70 vp-768:px-14 ">
      <div className="w-543 flex flex-col items-center text-center">
        <div className="mb-63">
          <Image
            src="/icons/bell_icon.svg"
            alt="about"
            draggable="false"
            layout="fixed"
            width="49"
            height="49"
          />
        </div>
        <h2 className="text-white-white font-medium mb-35">About us</h2>
        <h4 className=" text-center text-white-white vp-768:w-11/12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare et eu
          risus felis dictumst. Luctus ultrices et egestas id in diam. Odio
          gravida eu ornare amet integer neque, tincidunt ultrices gravida.
          Tellus congue enim pulvinar ut ultricies senectus.
        </h4>
      </div>
      <div className=" absolute -bottom-1/3  vp-768:top-2/4 vp-600:bottom-0 vp-600:top-auto ">
        <Image
          src="/illustrations/left_about.svg"
          alt="left overlay"
          draggable="false"
          layout="intrinsic"
          width="1607"
          height="936"
        />
      </div>
      <div className=" absolute -bottom-1/3 vp-768:-bottom-1/3 vp-768:-right-3/4  vp-600:-right-auto vp-600:-bottom-1/2">
        <Image
          src="/illustrations/right_about.svg"
          alt="right overlay"
          draggable="false"
          layout="fixed"
          width="1607"
          height="936"
        />
      </div>
    </div>
  );
};

export default About;
