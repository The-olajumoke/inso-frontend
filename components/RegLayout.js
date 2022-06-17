import Image from "next/image";
import React from "react";

function RegLayout({ children }) {
  return (
    <div className="py-32 px-50 ">
      <div className="h-61 flex justify-between">
        <div>
          <Image
            src="https://res.cloudinary.com/insomaryland/image/upload/v1655327110/InsoImages/inso_logo_yi1rgz.svg"
            alt="Inso Logo"
            draggable="false"
            layout="fixed"
            width="129"
            height="60"
          />
        </div>
        <div className="flex items-center  gap-8">
          <button className="btn-outline w-133 h-44 text-md">Sign up</button>
          <button className="btn-outline w-133 h-44 text-md">Log in</button>
        </div>
      </div>
      <div className="border fixed grid place-items-center bg-other-overlay w-full h-full top-0 left-0  z-9999  overflow-y-auto ">
        {children}
      </div>
    </div>
  );
}

export default RegLayout;
