import React, { useState } from "react";
import Image from "next/image";
import SettingsInput from "./SettingsInput";

const Profile = ({ editProfile, setEditProfile }) => {
  const [userPicture, setUserPicture] = useState(true);
  const [userName, setUserName] = useState("@Patrick");
  const [firstName, setFirstName] = useState("Patrick");
  const [lastName, setLastName] = useState("Dempsey");
  const [email, setEmail] = useState("p**********ey@gmail.com");
  const [alternativeMail, setAlternativeMail] = useState("");
  const [role, setRole] = useState("");
  const [level, setLevel] = useState("");
  return (
    <div className="mt-34">
      <h3 className=" text-primary-darkGreen font-medium mb-36">Profile</h3>
      <div className="flex items-center mb-51">
        <div className=" flex mr-255 items-center">
          {userPicture ? (
            <div className=" rounded-full">
              <Image
                src="/images/avatar.svg"
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
          <div className="pl-25">
            <h6 className="text-gray-text">Patrick Dempsey</h6>
            <p className=" text-primary-darkGreen">@patrick</p>
          </div>
        </div>
        <div>
          {editProfile ? (
            <button className="w-146 h-34 bg-primary-blue text-white-white rounded text-sm">
              Save Changes
            </button>
          ) : (
            <button
              style={{ border: "2px solid rgba(7, 160, 152, 0.05)" }}
              className="w-146 h-34 rounded bg-white-white flex items-center justify-center"
              onClick={() => setEditProfile(true)}
            >
              <Image
                src="/icons/edit_blue.svg"
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
        <div className="flex items-center mb-12">
          <h6 className=" w-182  text-gray-text">Username :</h6>

          <SettingsInput
            type="text"
            value={userName}
            setValue={setUserName}
            placeholder="Enter Username"
            editProfile={editProfile}
          />
        </div>

        <div className="flex items-center mb-12">
          <h6 className=" w-182  text-gray-text">First Name :</h6>
          <SettingsInput
            type="text"
            value={firstName}
            setValue={setFirstName}
            placeholder="Enter Username"
            editProfile={editProfile}
          />
        </div>
        <div className="flex items-center mb-12">
          <h6 className=" w-182  text-gray-text">Last Name :</h6>
          <SettingsInput
            type="text"
            value={lastName}
            setValue={setLastName}
            placeholder="Enter Username"
            editProfile={editProfile}
          />
        </div>
        <div className="flex items-center mb-12">
          <h6 className=" w-182  text-gray-text">Email :</h6>
          <SettingsInput
            type="text"
            value={email}
            setValue={setEmail}
            placeholder="Enter Email Address"
            editProfile={editProfile}
          />
        </div>
        <div className="flex items-center mb-12">
          <h6 className=" w-182  text-gray-text">Alternative Mail :</h6>
          <SettingsInput
            type="text"
            value={alternativeMail}
            setValue={setAlternativeMail}
            placeholder="Input an alternative  email"
            editProfile={editProfile}
          />
        </div>
        <div className="flex items-center mb-12">
          <h6 className=" w-182  text-gray-text">Primary role :</h6>
          <SettingsInput
            type="text"
            value={role}
            setValue={setRole}
            placeholder="Input  your professional role"
            editProfile={editProfile}
          />
        </div>
        <div className="flex items-center ">
          <h6 className=" w-182  text-gray-text">Level :</h6>
          <SettingsInput
            type="text"
            value={level}
            setValue={setLevel}
            placeholder="Input  level/rank"
            editProfile={editProfile}
          />
        </div>
      </div>
      <button
        style={{ border: "2px solid rgba(7, 160, 152, 0.05)" }}
        className="flex justify-center items-center h-34 w-146 rounded "
      >
        <Image
          src="/icons/logout.svg"
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
