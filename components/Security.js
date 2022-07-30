import { validatePassword } from "@/utils/validations";
import React, { useState, useEffect } from "react";
import SettingsInput from "./SettingsInput";

const Security = ({ editProfile, handlePasswordUpdate }) => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [currentPasswordError, setCurrentPasswordError] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);

  const currentPasswordHandler = () => {
    if (!validatePassword(currentPassword)) {
      setCurrentPasswordError(
        "8 characters long, include an uppercase, a lowercase, a number and a special character."
      );
    } else {
      setCurrentPasswordError("");
    }
  };
  const passwordHandler = () => {
    if (!validatePassword(newPassword)) {
      setPasswordError(
        "8 characters long, include an uppercase, a lowercase, a number and a special character."
      );
    } else {
      setPasswordError("");
    }
  };
  const confirmPasswordHandler = () => {
    if (confirmPassword !== newPassword) {
      setConfirmPasswordError("Passwords do not match");
    } else {
      setConfirmPasswordError("");
    }
  };
  useEffect(() => {
    if (
      validatePassword(currentPassword) &&
      validatePassword(newPassword) &&
      confirmPassword === newPassword
    ) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [currentPassword, newPassword, confirmPassword]);
  const savePasswordChanges = () => {
    const body = {
      oldPassword: currentPassword,
      newPassword,
    };
    handlePasswordUpdate(body);
  };
  return (
    <div className="mt-34">
      <h4 className=" vp-600:hidden text-primary-darkGreen font-medium mb-47">
        Security
      </h4>
      <div className="flex vp-980:flex-col items-center mb-12 vp-980:mb-26 vp-980:items-start">
        <h6 className="  w-182 vp-980:w-auto  text-gray-text vp-980:mb-6">
          Current Password :
        </h6>

        <SettingsInput
          type="password"
          value={currentPassword}
          setValue={setCurrentPassword}
          editProfile={editProfile}
          keyUpHandler={currentPasswordHandler}
        />
        {currentPasswordError && (
          <span className="ml-5 text-other-danger">{currentPasswordError}</span>
        )}
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
          keyUpHandler={passwordHandler}
        />
        {passwordError && (
          <span className="ml-5 text-other-danger">{passwordError}</span>
        )}
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
          keyUpHandler={confirmPasswordHandler}
        />
        {confirmPasswordError && (
          <span className="ml-5 text-other-danger">{confirmPasswordError}</span>
        )}
      </div>

      <div className="w-600  flex justify-end">
        <button
          className={`w-146 h-34 bg-primary-blue text-white-white rounded text-sm  disabled:cursor-not-allowed disabled:bg-other-disabled disabled:text-other-disabledText`}
          disabled={isDisabled}
          onClick={savePasswordChanges}
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default Security;
