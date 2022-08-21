import React, { useState, useContext, useEffect } from "react";
import Image from "next/image";
import SettingsInput from "./SettingsInput";
import { GlobalContext } from "@/context/Provider";
import SettingsDropdown from "./SettingsDropdown";
import { validateEmail } from "@/utils/validations";
import { updateUserProfile } from "@/context/actions/user/updateUserProfile";
import { API_URL } from "@/utils/url";

const Profile = ({ editProfile, setEditProfile }) => {
  const [userPicture, setUserPicture] = useState(true);
  const [userName, setUserName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [alternativeMail, setAlternativeMail] = useState("");
  const [role, setRole] = useState("");
  const [level, setLevel] = useState("");
  const [initials, setInitials] = useState("");
  const [userId, setUserId] = useState(null);
  const [openDropdownRoles, setOpenDropdownRoles] = useState(false);
  const [openDropdownLevel, setOpenDropdownLevel] = useState(false);
  const roles = ["Teacher", "Student", "Other"];
  const levels = [
    "K-6",
    "7-12",
    "2-year college",
    "4-year undergraduate",
    "Graduate",
    "Corporate",
    "Non-profit",
    "Other",
  ];
  const [token, setToken] = useState("");

  const {
    userDispatch,
    userState: {
      user: { profileData },
    },
  } = useContext(GlobalContext);

  useEffect(() => {
    if (profileData !== null) {
      console.log(profileData);
      const { f_name, l_name, username, contact, _id, level, role } =
        profileData;
      setFirstName(f_name);
      setLastName(l_name);
      setUserName(username);
      setEmail(contact[0]?.email);
      setAlternativeMail(contact[1]?.email);
      setLevel(level);
      setRole(role);
      setUserId(_id);
      const firstInit = f_name?.split("")[0];
      const lastInit = l_name?.split("")[0];
      setInitials(`${firstInit} ${lastInit}`);
    }
  }, [profileData]);

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    console.log(accessToken);
    setToken(accessToken);
  }, []);

  const emailBlurHandler = () => {
    if (!validateEmail(alternativeMail)) {
      setEmailError("Invalid email");
    } else {
      setEmailError("");
    }
  };
  const EditUserProfile = () => {
    let allEmails;
    if (alternativeMail !== "") {
      allEmails = [
        {
          email: alternativeMail,
          primary: false,
        },
      ];
    } else {
      allEmails = [];
    }
    const body = {
      username: userName,
      f_name: firstName,
      l_name: lastName,
      contact: allEmails,
      level,
      role,
    };
    console.log(body);
    updateUserProfile(API_URL, token, userId, body)(userDispatch);
  };
  return (
    <div className="mt-34">
      <h4 className=" vp-600:hidden text-primary-darkGreen font-medium mb-36">
        Profile
      </h4>
      <div className="flex items-center mb-51">
        <div className=" flex mr-255 vp-600:mr-0 items-center">
          {userPicture ? (
            <div className=" rounded-full">
              <Image
                src="/static/images/avatar.svg"
                alt=" userImage "
                draggable="false"
                layout="fixed"
                width="60"
                height="60"
              />
            </div>
          ) : (
            <div className="  h-60 w-60 text-primary-blue bg-other-faintBlue rounded-full text-md flex justify-center items-center font-semibold mr-15">
              PD
            </div>
          )}
          <div className="pl-25 ">
            <h6 className="text-gray-text">
              {firstName} {lastName}
            </h6>
            <p className=" text-primary-darkGreen">@{userName}</p>
          </div>
        </div>
        <div className="vp-600:hidden">
          {editProfile ? (
            <button
              className="w-146 h-34 bg-primary-blue text-white-white rounded text-sm"
              onClick={EditUserProfile}
            >
              Save Changes
            </button>
          ) : (
            <button
              style={{ border: "2px solid rgba(7, 160, 152, 0.05)" }}
              className="w-146 h-34 rounded bg-white-white flex items-center justify-center"
              onClick={() => setEditProfile(true)}
            >
              <Image
                src="/static/icons/edit_blue.svg"
                alt=" edit "
                draggable="false"
                layout="fixed"
                width="12"
                height="12"
              />
              <p className="ml-12 text-primary-blue"> Edit profile</p>{" "}
            </button>
          )}
        </div>
      </div>
      <div className="mb-90">
        <div className="flex vp-980:flex-col items-center mb-12 vp-980:mb-26 vp-980:items-start">
          <h6 className="  w-182 vp-980:w-auto  text-gray-text vp-980:mb-6">
            Username :
          </h6>

          <SettingsInput
            type="text"
            value={userName}
            setValue={setUserName}
            placeholder="Enter Username"
            editProfile={editProfile}
            disabled={!editProfile ? true : false}
          />
        </div>

        <div className="flex vp-980:flex-col items-center mb-12 vp-980:mb-26 vp-980:items-start">
          <h6 className="  w-182 vp-980:w-auto  text-gray-text vp-980:mb-6">
            First Name :
          </h6>
          <SettingsInput
            type="text"
            value={firstName}
            setValue={setFirstName}
            placeholder="Enter Username"
            editProfile={editProfile}
            disabled={!editProfile ? true : false}
          />
        </div>
        <div className="flex vp-980:flex-col items-center mb-12 vp-980:mb-26 vp-980:items-start">
          <h6 className="  w-182 vp-980:w-auto  text-gray-text vp-980:mb-6">
            Last Name :
          </h6>
          <SettingsInput
            type="text"
            value={lastName}
            setValue={setLastName}
            placeholder="Enter Username"
            editProfile={editProfile}
            disabled={!editProfile ? true : false}
          />
        </div>
        <div className="flex vp-980:flex-col items-center mb-12 vp-980:mb-26 vp-980:items-start">
          <h6 className="  w-182 vp-980:w-auto  text-gray-text vp-980:mb-6">
            Email :
          </h6>
          <SettingsInput
            type="text"
            value={email}
            setValue={setEmail}
            placeholder="Enter Email Address"
            editProfile={editProfile}
            disabled={true}
          />
        </div>
        <div className="flex vp-980:flex-col items-center mb-12 vp-980:mb-26 vp-980:items-start">
          <h6 className="  w-182 vp-980:w-auto  text-gray-text vp-980:mb-6">
            Alternative Mail :
          </h6>
          <SettingsInput
            type="email"
            value={alternativeMail}
            setValue={setAlternativeMail}
            placeholder="Input an alternative  email"
            editProfile={editProfile}
            disabled={!editProfile ? true : false}
            blurHandler={emailBlurHandler}
          />
          {emailError !== "" && (
            <p className="text-xs text-other-danger">{emailError}</p>
          )}
        </div>
        <div className="flex vp-980:flex-col items-center mb-12 vp-980:mb-26 vp-980:items-start">
          <h6 className="  w-182 vp-980:w-auto  text-gray-text vp-980:mb-6">
            Primary role :
          </h6>

          <SettingsDropdown
            items={roles}
            setValue={setRole}
            value={role}
            openDropdown={openDropdownRoles}
            setOpenDropdown={setOpenDropdownRoles}
            placeholder="Input  your professional role"
            disabled={!editProfile ? true : false}
          />
        </div>
        <div className="flex vp-980:flex-col items-center mb-12 vp-980:mb-26 vp-980:items-start">
          <h6 className="  w-182 vp-980:w-auto  text-gray-text vp-980:mb-6">
            Level :
          </h6>
          <SettingsDropdown
            items={levels}
            setValue={setLevel}
            value={level}
            openDropdown={openDropdownLevel}
            setOpenDropdown={setOpenDropdownLevel}
            placeholder="Input level/rank"
            disabled={!editProfile ? true : false}
          />
        </div>
      </div>
      <button
        style={{ border: "2px solid rgba(7, 160, 152, 0.05)" }}
        className="flex justify-center items-center h-34 w-146 rounded"
      >
        <Image
          src="/static/icons/logout.svg"
          alt=" Discussion dropdown "
          draggable="false"
          layout="fixed"
          width="16"
          height="16"
        />
        <p className="ml-11 text-other-danger">Sign Out</p>
      </button>
    </div>
  );
};

export default Profile;
