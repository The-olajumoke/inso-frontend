import React from "react";
import Image from "next/image";

const Profile = ({ editProfile, setEditProfile }) => {
  return (
    <div className="border mt-34">
      <h3 className=" text-primary-darkGreen font-medium mb-36">Profile</h3>
      <div className="flex">
        <div></div>
        <div>
          {editProfile ? (
            <button className="w-146 h-34 bg-primary-blue text-white-white rounded text-sm">
              Save Changes
            </button>
          ) : (
            <div
              style={{ border: "2px solid rgba(7, 160, 152, 0.05)" }}
              className="w-146 h-34 rounded bg-white-white flex items-center justify-center"
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
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
