import React, { useEffect, useContext, useState } from "react";
import Layout from "@/components/Layout";
import Image from "next/image";
import Profile from "@/components/Profile";
import Security from "@/components/Security";
import Plan from "@/components/Plan";
import styles from "@/styles/progressbar.module.css";
import ErrorModal from "@/components/ErrorModal";
import SuccessModal from "@/components/SuccessModal";
import { GlobalContext } from "@/context/Provider";
import { updateUserPassword } from "@/context/actions/user/updateUserPassword";
import { API_URL } from "@/utils/url";

const Settings = () => {
  const [activeSetting, setActiveSetting] = useState("profile");
  const [incompleteProfile, setIncompleteProfile] = useState(true);
  const [editProfile, setEditProfile] = useState(false);
  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [userId, setUserId] = useState(null);
  const [token, setToken] = useState("");
  const {
    userDispatch,
    userState: {
      user: {
        profileData,
        editProfileSuccess,
        error,
        updatePasswordSuccess,
        updatePasswordError,
      },
    },
  } = useContext(GlobalContext);
  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    console.log(accessToken);
    setToken(accessToken);
  }, []);

  useEffect(() => {
    if (profileData !== null) {
      const { _id } = profileData;
      setUserId(_id);
    }
  }, [profileData]);
  useEffect(() => {
    if (editProfileSuccess) {
      setTitle("User Updated Successfully");
    }
    if (error) {
      setTitle(error);
    }
  }, [editProfileSuccess, error]);

  useEffect(() => {
    console.log(updatePasswordSuccess);
    console.log(updatePasswordError);
    if (updatePasswordSuccess) {
      setTitle("Password Updated Successfully");
    }
    if (updatePasswordError !== null) {
      setTitle(updatePasswordError);
    }
  }, [updatePasswordSuccess, updatePasswordError]);

  const handlePasswordUpdate = (body) => {
    updateUserPassword(API_URL, token, userId, body)(userDispatch);
  };

  return (
    <Layout title="Inso | Settings">
      <div className={`${styles.hiddenScrollbar} h-full`}>
        {incompleteProfile && (
          <div className="h-80 bg-primary-darkGreen pl-50  flex items-center font-poppins">
            <Image
              src="/static/icons/user_profile.svg"
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

        <div className={` p-40  vp-600:p-23 vp-980:p-46`}>
          <div className="items-center  h-50 mb-20 hidden vp-980:flex">
            <div className="flex justify-center items-center mr-23">
              <Image
                src="/static/icons/arrow_left_green.svg"
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
          {activeSetting === "security" && (
            <Security
              editProfile={true}
              handlePasswordUpdate={handlePasswordUpdate}
            />
          )}
          {activeSetting === "plan" && <Plan />}
        </div>
        {editProfileSuccess && updatePasswordSuccess && (
          <SuccessModal title={title} subTitle={subTitle} />
        )}
        {error && <ErrorModal title={title} subTitle={subTitle} />}

        {updatePasswordError !== null && (
          <ErrorModal title={title} subTitle={subTitle} />
        )}
      </div>
    </Layout>
  );
};

export default Settings;
