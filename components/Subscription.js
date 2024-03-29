import React from "react";
import styles from "@/styles/Home.module.css";
import Image from "next/image";
const Subscription = () => {
  return (
    <div className="h-900 bg-primary-darkGreen relative overflow-hidden">
      <div className=" absolute top-0 bottom-0 -right-40 -">
        <Image
          src="/illustrations/subscription_image.svg"
          alt="plan overlay"
          draggable="false"
          layout="intrinsic"
          width="1440"
          height="900"
        />
      </div>

      <div className="bg-transparent absolute top-0 bottom-0 -right-0 left-0 pt-62 pb-120 px-63 vp-1024:px-46 vp-600:px-0 ">
        <h3 className="text-white-white font-medium mb-66 text-center ">
          Subscription plans
        </h3>{" "}
        <div className="vp-600:overflow-x-scroll">
          <div className=" vp-600:w-600">
            <div
              className=" z-20 bg-white-white rounded-sm shadow-plan-Shadow grid grid-cols-9 py-29 vp-600:rounded-none"
              style={{ height: "616px" }}
            >
              <div className="border-r-2 border-border-line col-span-3">
                <div className="h-174 border-b-2  border-border-line"></div>
                {/* content */}
                <div className="mt-38 ml-64 vp-600:ml-30  text-black-postInsp">
                  <h5 className="mb-21">First benefit</h5>
                  <h5 className="mb-21">Second benefit</h5>
                  <h5 className="mb-21">Third benefit</h5>
                  <h5 className="mb-21">Fourth benefit</h5>
                  <h5 className="mb-21">Fifth benefit</h5>
                </div>
              </div>
              <div className="border-r-2 border-border-line col-span-2">
                <div className="h-174 border-b-2  border-border-line flex flex-col items-center justify-center">
                  <h4 className=" text-black-postInsp mb-19">Free User</h4>
                  <h2 className=" text-border-line">$0</h2>
                  <span className=" text-black-postInsp">per year</span>
                </div>
                <div className="mt-38  text-black-postInsp text-center">
                  <h5 className="mb-21">Basic</h5>
                  <h5 className="mb-21">Basic</h5>
                  <h5 className="mb-21">Basic</h5>
                  <h5 className="mb-21">Basic</h5>
                  <h5 className="mb-21">Basic</h5>
                </div>
              </div>
              <div className="border-r-2 border-border-line col-span-2">
                <div className="h-174 border-b-2  border-border-line flex flex-col items-center justify-center">
                  <h4 className=" text-black-postInsp mb-19">Level 1 User </h4>
                  <h2 className=" text-border-line">$10</h2>
                  <span className=" text-black-postInsp">per year</span>
                </div>
                <div className="mt-38  text-black-postInsp text-center">
                  <h5 className="mb-21">Third benefit</h5>
                  <h5 className="mb-21">-</h5>
                  <h5 className="mb-21">-</h5>
                  <h5 className="mb-21">-</h5>
                  <h5 className="mb-21">-</h5>
                </div>
                <div className="w-full flex justify-center">
                  <button className={`${styles.planButton}`}>
                    Select plan
                  </button>
                </div>
              </div>
              <div className=" col-span-2">
                <div className="h-174 border-b-2  border-border-line flex flex-col items-center justify-center">
                  <h4 className=" text-black-postInsp mb-19">Level 2 User </h4>
                  <h2 className=" text-border-line">$20</h2>
                  <span className=" text-black-postInsp">per year</span>
                </div>
                <div className="mt-38  text-black-postInsp text-center">
                  <h5 className="mb-21">Third benefit</h5>
                  <h5 className="mb-21">-</h5>
                  <h5 className="mb-21">-</h5>
                  <h5 className="mb-21">-</h5>
                  <h5 className="mb-21">-</h5>
                </div>
                <div className="w-full flex justify-center">
                  <button className={`${styles.planButton}`}>
                    Select plan
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
