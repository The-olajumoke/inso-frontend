import React, { useState } from "react";
import SettingsInput from "./SettingsInput";

const Security = ({ editProfile }) => {
  const [currentPassword, setCurrentPassword] = useState("********");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  return (
    <div className="mt-34">
      <h3 className=" vp-600:hidden text-primary-darkGreen font-medium mb-47">
        Security
      </h3>
      <div className="flex vp-980:flex-col items-center mb-12 vp-980:mb-26 vp-980:items-start">
        <h6 className="  w-182 vp-980:w-auto  text-gray-text vp-980:mb-6">
          Current Password :
        </h6>

        <SettingsInput
          type="password"
          value={currentPassword}
          setValue={setCurrentPassword}
          editProfile={editProfile}
        />
      </div>
      <div className="flex vp-980:flex-col items-center mb-12 vp-980:mb-26 vp-980:items-start">
        <h6 className="  w-182 vp-980:w-auto  text-gray-text vp-980:mb-6">
          New Password :
        </h6>

        <SettingsInput
          type="password"
          value={newPassword}
          setValue={setNewPassword}
          placeholder="Enter new password"
          editProfile={editProfile}
        />
      </div>
      <div className="flex vp-980:flex-col items-center mb-12 vp-980:mb-26 vp-980:items-start">
        <h6 className="  w-182 vp-980:w-auto  text-gray-text vp-980:mb-6">
          Confirm Password :
        </h6>

        <SettingsInput
          type="password"
          value={confirmPassword}
          setValue={setConfirmPassword}
          placeholder="Confirm Password"
          editProfile={editProfile}
        />
      </div>

      <div className="w-600  flex justify-end">
        <button className="w-146 h-34 bg-primary-blue text-white-white rounded text-sm">
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default Security;
