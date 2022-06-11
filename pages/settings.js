import React, { useState } from "react";
import Layout from "@/components/Layout";
import Image from "next/image";
import Profile from "@/components/Profile";
import Security from "@/components/Security";
import Plan from "@/components/Plan";

const Settings = () => {
  const [activeSetting, setActiveSetting] = useState("profile");
  const [incompleteProfile, setIncompleteProfile] = useState(false);
  const [editProfile, setEditProfile] = useState(false);

  return (
    <Layout title="Inso | Settings">
      <>
        {incompleteProfile && (
          <div className="h-80 bg-primary-darkGreen pl-50  flex items-center">
            <Image
              src="/icons/user_profile.svg"
              alt="user "
              draggable="false"
              layout="fixed"
              width="24"
              height="24"
            />
            <p className=" text-white-white ml-20 mr-138">
              Your profile is incomplete. Complete it access all Inso features.
            </p>
            <button
              className="border-2 border-other-overlay w-120 h-34 text-white-white  text-xs rounded"
              onClick={() => setEditProfile(true)}
            >
              Edit profile
            </button>
          </div>
        )}

        <div className="p-40  vp-600:p-23 vp-980:p-46">
          <div className="items-center  h-50 mb-20 hidden vp-980:flex">
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
            <h4 className=" text-black-analText">Settings</h4>
          </div>
          <div className="flex items-center">
            <button
              className={` ${
                activeSetting === "profile"
                  ? "btn  font-medium"
                  : "btn-nonActive"
              } h-30 w-164 text-sm mr-15 `}
              onClick={() => setActiveSetting("profile")}
            >
              Profile
            </button>
            <button
              className={` ${
                activeSetting === "security"
                  ? "btn font-medium"
                  : "btn-nonActive"
              } h-30 w-164 text-sm mr-15`}
              onClick={() => setActiveSetting("security")}
            >
              Security
            </button>
            <button
              className={` ${
                activeSetting === "plan" ? "btn font-medium" : "btn-nonActive"
              } h-30 w-164 text-sm `}
              onClick={() => setActiveSetting("plan")}
            >
              Plan
            </button>
          </div>

          {activeSetting === "profile" && (
            <Profile
              editProfile={editProfile}
              setEditProfile={setEditProfile}
            />
          )}
          {activeSetting === "security" && <Security editProfile={true} />}
          {activeSetting === "plan" && <Plan />}
        </div>
      </>
    </Layout>
  );
};

export default Settings;
