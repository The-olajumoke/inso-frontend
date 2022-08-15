import withAuth from "@/HOC/withAuth";
import Image from "next/image";
import React, { Children } from "react";

function RegLayout({ children }) {
  return (
    <div className="py-32 px-50 vp-600:p-0 h-screen ">
      <div className="h-61 flex justify-between vp-600:hidden">
        <div>
          <Image
            src="https://res.cloudinary.com/insomaryland/image/upload/v1660169006/inso_logo_x1kgxc.svg"
            alt="Inso Logo"
            draggable="false"
            layout="fixed"
            width="129"
            height="60"
          />
        </div>
        <div className="flex items-center  gap-8  ">
          <button className="btn-outline w-133 h-44 text-md">Sign up</button>
          <button className="btn-outline w-133 h-44 text-md">Log in</button>
        </div>
      </div>
      <div className="fixed grid place-items-center bg-other-overlay w-full h-full top-0 left-0  z-9999  overflow-y-auto vp-600:relative vp-600:h-full vp-600:flex vp-600:items-stretch vp-600:justify-evenly">
        {children}
      </div>
    </div>
  );
}

export default RegLayout;
