<div
  className={`pt-80 py-25  w-300 absolute left-0 top-0 bottom-0 vp-980:flex flex-col justify-start vp-600:justify-between hidden   overflow-y-auto bg-white-white  z-9999`}
>
  <div className=" flex  pl-25 my-16 vp-600:my-2">
    {userPicture ? (
      <div>picture</div>
    ) : (
      <div className="h-37 w-37 text-xs flex justify-center items-center font-semibold mr-15 border overflow-hidden p-0 rounded-full bg-primary-darkGreen">
        <span className="flex-grow h-full w-full text-white-white bg-primary-darkGreen flex justify-center items-center border-2 rounded-full border-white-white m-0 capitalize ">
          {initials}
        </span>
      </div>
    )}
    <div className="">
      <h6 className="text-gray-text ">
        {firstName} {lastName}
      </h6>
      <p className=" text-primary-darkGreen">@{userName}</p>
      <h6 className=" text-other-success mt-10 vp-768:text-xs">Starter</h6>
    </div>
  </div>
  <div className="mt-10">
    <div className="">
      <Link href="/home" passHref>
        <div
          className={`${
            router.pathname.startsWith("/home") &&
            "bg-primary-darkGreen  justify-start text-white-white "
          } ' flex items-center gap-x-7  cursor-pointer pl-25  text-gray-texth h-73 vp-600:h-53`}
        >
          <Image
            src={
              router.pathname.startsWith("/home")
                ? "https://res.cloudinary.com/insomaryland/image/upload/v1659168361/home_ihfz7d.svg"
                : "https://res.cloudinary.com/insomaryland/image/upload/v1659960630/home_tfw1yn.svg"
            }
            alt="home"
            draggable="false"
            width="24"
            height="24"
            layout="fixed"
          />
          <h6 className="">Home</h6>
        </div>
      </Link>
      <Link href="/discussions" passHref>
        <div
          className={`${
            router.pathname.startsWith("/discussions") &&
            "bg-primary-darkGreen  justify-start text-white-white "
          } ' flex items-center gap-x-7  cursor-pointer pl-25  text-gray-texth h-73 vp-600:h-53`}
        >
          <Image
            src={
              router.pathname.startsWith("/discussions")
                ? "https://res.cloudinary.com/insomaryland/image/upload/v1655468832/InsoImages/dashboard_active_rrsvgb.svg"
                : "https://res.cloudinary.com/insomaryland/image/upload/v1659960630/home_tfw1yn.svg"
            }
            alt="discussion"
            draggable="false"
            width="24"
            height="24"
            layout="fixed"
          />
          <h6 className="">Discussions</h6>
        </div>
      </Link>
      <Link href="/notifications" passHref>
        <div
          className={`${
            router.pathname.startsWith("/notifications") &&
            "bg-primary-darkGreen  justify-start text-white-white "
          } ' flex items-center gap-x-7  cursor-pointer pl-25  text-gray-text h-73 vp-600:h-53`}
        >
          <Image
            src={
              router.pathname.startsWith("/notifications")
                ? "https://res.cloudinary.com/insomaryland/image/upload/v1655468844/InsoImages/notification_active_ai8d5r.svg"
                : "https://res.cloudinary.com/insomaryland/image/upload/v1659960378/notifications_inactive_ye3826.svg"
            }
            alt="notifications"
            draggable="false"
            width="24"
            height="24"
            layout="fixed"
          />
          <h6 className="">Notifications</h6>
        </div>
      </Link>
      <Link href="/stats" passHref>
        <div
          className={`${
            router.pathname.startsWith("/stats") &&
            "bg-primary-darkGreen  justify-start text-white-white "
          } ' flex items-center gap-x-7  cursor-pointer pl-25  text-gray-text  h-73 vp-600:h-53`}
        >
          <Image
            src={
              router.pathname.startsWith("/stats")
                ? "https://res.cloudinary.com/insomaryland/image/upload/v1655325351/InsoImages/stats_zjldog.svg"
                : "https://res.cloudinary.com/insomaryland/image/upload/v1659962014/stats_inactive_je9wv9.svg"
            }
            alt="stats"
            draggable="false"
            width="24"
            height="24"
            layout="fixed"
          />
          <h6 className="">Stats</h6>
        </div>
      </Link>
      <Link href="/analytics" passHref>
        <div
          className={`${
            router.pathname.startsWith("/analytics") &&
            "bg-primary-darkGreen  justify-start text-white-white "
          } ' flex items-center gap-x-7  cursor-pointer pl-25  text-gray-text  h-73 vp-600:h-53`}
        >
          <Image
            src={
              router.pathname.startsWith("/analytics")
                ? "https://res.cloudinary.com/insomaryland/image/upload/v1655325640/InsoImages/analytics_active_isunzk.svg"
                : "https://res.cloudinary.com/insomaryland/image/upload/v1659960921/analytics_inactive_kul1jz.svg"
            }
            alt="analytics"
            draggable="false"
            width="24"
            height="24"
            layout="fixed"
          />
          <h6 className="">Analytics</h6>
        </div>
      </Link>
      {/* <Link href="/charts" passHref>
              <div
                className={`${
                  router.pathname.startsWith("/charts") &&
                  "bg-primary-darkGreen  justify-start text-white-white "
                } ' flex items-center gap-x-7  cursor-pointer pl-25  text-gray-text  h-73 vp-600:h-53`}
              >
                <Image
                  src={
                    router.pathname.startsWith("/charts")
                      ? "https://res.cloudinary.com/insomaryland/image/upload/v1655325713/InsoImages/charts_bczceq.svg"
                      : "https://res.cloudinary.com/insomaryland/image/upload/v1655325713/InsoImages/charts_bczceq.svg"
                  }
                  alt="charts"
                  draggable="false"
                  width="24"
                  height="24"
                  layout="fixed"
                />
                <h6 className="">Charts</h6>
              </div>
            </Link> */}
      {/* <Link href="/calendar" passHref>
              <div
                className={`${
                  router.pathname.startsWith("/calendar") &&
                  "bg-primary-darkGreen  justify-start text-white-white "
                } ' flex items-center gap-x-7  cursor-pointer pl-25  text-gray-text  h-73 vp-600:h-53`}
              >
                <Image
                  src={
                    router.pathname.startsWith("/calendar")
                      ? "https://res.cloudinary.com/insomaryland/image/upload/v1655326223/InsoImages/calendar_active_ixszvw.svg"
                      : "https://res.cloudinary.com/insomaryland/image/upload/v1655326223/InsoImages/calendar_ix65zg.svg"
                  }
                  alt="calendar"
                  draggable="false"
                  width="24"
                  height="24"
                  layout="fixed"
                />
                <h6 className="">Calendar</h6>
              </div>
            </Link> */}
      <Link href="/contact" passHref>
        <div
          className={`${
            router.pathname.startsWith("/contact") &&
            "bg-primary-darkGreen  justify-start text-white-white "
          } ' flex items-center gap-x-7  cursor-pointer pl-25  text-gray-text  h-73 vp-600:h-53`}
        >
          <Image
            src={
              router.pathname.startsWith("/contact")
                ? "https://res.cloudinary.com/insomaryland/image/upload/v1655326270/InsoImages/contact_active_e9ipb6.svg"
                : "https://res.cloudinary.com/insomaryland/image/upload/v1659962244/contact_inactive_gnxlpe.svg"
            }
            alt="contact"
            draggable="false"
            width="24"
            height="24"
            layout="fixed"
          />
          <h6 className="">Contact us</h6>
        </div>
      </Link>
      <Link href="/settings" passHref>
        <div
          className={`${
            router.pathname.startsWith("/settings") &&
            "bg-primary-darkGreen  justify-start text-white-white "
          } ' flex items-center gap-x-7  cursor-pointer pl-25  text-gray-text h-73 vp-600:h-53`}
        >
          <Image
            src={
              router.pathname.startsWith("/settings")
                ? "https://res.cloudinary.com/insomaryland/image/upload/v1655326321/InsoImages/settings_active_efkgp4.svg"
                : "https://res.cloudinary.com/insomaryland/image/upload/v1659962637/settings_inactive_twggmi.svg"
            }
            alt="settings"
            draggable="false"
            width="24"
            height="24"
            layout="fixed"
          />
          <h6 className="">Settings</h6>
        </div>
      </Link>
    </div>
  </div>
  <div className=" w-full px-25 mt-42">
    <div
      className={`w-full h-40 border border-primary-blue rounded flex items-center  justify-center  `}
    >
      <Image
        src="https://res.cloudinary.com/insomaryland/image/upload/v1659963152/download_inactive_kqpgt2.svg"
        alt="download"
        draggable="false"
        layout="fixed"
        height="24"
        width="24"
      />
      <p className={`  ml-17 text-primary-darkGreen `}>Upgrade</p>
    </div>
  </div>
</div>;
