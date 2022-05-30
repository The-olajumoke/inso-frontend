import React, { useState } from "react";
import Image from "next/image";
import SavedSettings from "./SavedSettings";
import NewSettings from "./NewSettings";

export const ScoreSettings = ({ setActiveSection }) => {
  const [showSavedSettings, setShowSavedSettings] = useState(true);
  const settings = ["Setting 1", "Setting 2", "Setting 3"];

  return (
    <div className="py-18">
      <div className=" bg-white-white h-55 flex items-center px-45 justify-between">
        <div className="flex items-center">
          <button
            className="flex items-center justify-center"
            onClick={() => setActiveSection("discussions")}
          >
            <Image
              src="/icons/arrow_left_green.svg"
              alt="back"
              layout="fixed"
              width="20"
              height="20"
            />
          </button>
          <h3 className="ml-30  font-medium">Score Settings</h3>
        </div>
      </div>

      <div className="  bg-white-white">
        <div
          className=" flex justify-between bg-gray-createDisc items-center h-55 px-45"
          onClick={() => {
            setShowSavedSettings(!showSavedSettings);
          }}
        >
          <div className="flex items-center">
            <div className="mr-17 flex items-center justify-center">
              <Image
                src="/icons/saved_settings.svg"
                alt="settings"
                layout="fixed"
                width="18"
                height="18"
              />
            </div>
            <h4 className=" text-gray-text">Saved settings</h4>
          </div>

          <button>
            <Image
              src={
                showSavedSettings
                  ? "/icons/arrow_up.svg"
                  : "/icons/arrow_down.svg"
              }
              alt="arrow down"
              layout="fixed"
              width="15"
              height="15"
            />
          </button>
        </div>
        {showSavedSettings && (
          <div className="pb-35  bg-gray-createDisc">
            {settings.map((setting, index) => (
              <SavedSettings key={index} title={setting} />
            ))}
          </div>
        )}

        <div
          className=" flex justify-between items-center mt-21 h-55  px-45 bg-gray-createDisc"
          onClick={() => {
            setShowSavedSettings(false);
          }}
        >
          <div className="flex items-center">
            <div className="mr-17 flex items-center justify-center">
              <Image
                src="/icons/settings_icon.svg"
                alt="settings"
                layout="fixed"
                width="18"
                height="18"
              />
            </div>
            <h4 className=" text-gray-text">Add new settings</h4>
          </div>
          <button>
            <Image
              src={
                showSavedSettings
                  ? "/icons/arrow_down.svg"
                  : "/icons/arrow_up.svg"
              }
              alt="arrow down"
              layout="fixed"
              width="15"
              height="15"
            />
          </button>
        </div>
        {showSavedSettings === false && <NewSettings title="setting 1" />}
      </div>
    </div>
  );
};
