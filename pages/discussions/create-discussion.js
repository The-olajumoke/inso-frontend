import React, { useContext, useEffect, useState } from "react";
import Layout from "@/components/Layout";
import Image from "next/image";
import Link from "next/link";
import { API_URL } from "@/utils/url";
import { createDiscussion } from "@/context/actions/discussion/createDiscussion";
import { GlobalContext } from "@/context/Provider";
import WhiteLoader from "@/components/whiteLoader";
import { updateStarterPrompt } from "@/context/actions/discussion/updateStarterPrompt";
import arrow_back_blue from "../../public/static/icons/arrow_back_blue.svg";
import created from "../../public/static/new_icons/created_icon.svg";
import withAuth from "@/HOC/withAuth";

const CreateDiscussion = () => {
  const [token, setToken] = useState("");
  const [userId, setUserId] = useState(null);
  const [isDisabledTitle, setIsDisabledTitle] = useState(true);
  const [title, setTitle] = useState("");
  const [showSuccessMessage, setShowSuccessMessage] = useState(true);
  const [showSettingsbuttons, setShowSettingsbuttons] = useState(false);

  const [discId, setDiscId] = useState("");
  const [discName, setDiscName] = useState("");
  const [starterPromptValue, setStarterPromptValue] = useState("");

  const {
    discussionDispatch,
    discussionState: {
      discussion: { createLoading, createData, createError },
    },
  } = useContext(GlobalContext);
  const {
    userDispatch,
    userState: {
      user: { profileData },
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
    if (title !== "") {
      setIsDisabledTitle(false);
    } else {
      setIsDisabledTitle(true);
    }
  }, [title]);
  useEffect(() => {
    console.log(createLoading);
    console.log(createData);
    console.log(createError);
    if (createData !== null) {
      setDiscId(createData._id);
      setDiscName(createData.name);
    }
  }, [createLoading, createData, createError]);

  const handleCreateDisc = () => {
    const body = {
      name: title,
      poster: `${userId}`,
      facilitators: [`${userId}`],
    };
    console.log(body);
    createDiscussion(API_URL, token, body)(discussionDispatch);
  };

  useEffect(() => {
    if (createData !== null) {
      setShowSuccessMessage(true);
      setTimeout(() => {
        setShowSuccessMessage(false);
        setShowSettingsbuttons(true);
      }, 2000);
    }
  }, [createData]);

  const handleKeyDown = (e) => {
    if (e.key === "tab") {
      alert("tab");
    }
  };
  return (
    <Layout bgColor="bg-gray-background">
      <div
        className={` relative h-full py-35 pb-15 px-35 vp-600:p-23 vp-980:p-46 w-full flex flex-col`}
      >
        <div className=" vp-600:mt-10 flex items-center cursor-pointer">
          <Link href="/discussions" passHref>
            <div className="flex items-center justify-center">
              <Image
                src={arrow_back_blue.src}
                alt="back"
                layout="fixed"
                width="30"
                height="30"
              />
            </div>
          </Link>
          <h4 className="ml-13">create</h4>
        </div>

        <div className=" w-full flex-grow flex justify-center items-center">
          <div className=" w-400 h-180 rounded-md shadow-createDiscussion bg-white-white px-23 pb-8 py-16 flex flex-col justify-between">
            <form onSubmit={handleCreateDisc}>
              <textarea
                name=""
                id=""
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Input discussion title"
                className=" text-xl outline-none
              ring-0   h-100  border-none placeholder:text-gray-analyticsGray text-black-postInsp"
              ></textarea>
            </form>

            <div className="  flex justify-end items-center relative h-40">
              {createLoading ? (
                <button className="bg-blue-inputBlue rounded-md h-33 w-40 ">
                  <WhiteLoader />
                </button>
              ) : createData !== null ? (
                <div className="animate-fade-in-left absolute ">
                  {showSuccessMessage && (
                    <button className=" bg-other-pink rounded-md h-33 flex items-center justify-between gap-4 text-primary-darkGreen px-12">
                      <Image
                        src={created.src}
                        alt="success"
                        layout="fixed"
                        width="18"
                        height="18"
                      />{" "}
                      <p className=" text-primary-darkGreen">
                        Created successfully
                      </p>
                    </button>
                  )}
                  {showSettingsbuttons && (
                    <div className="flex items-center gap-5 justify-end w-full">
                      <Link href="/discussions" passHref>
                        <a>
                          <button className="border  bg-gray-background border-primary-darkGreen w-101 h-32 text-sm rounded text-primary-darkGreen ">
                            Done
                          </button>
                        </a>
                      </Link>
                      <Link
                        passHref
                        href={`/discussions/edit-discussion/${discId}`}
                      >
                        <a>
                          <button className=" btn w-auto h-32 text-sm px-32">
                            Add settings
                          </button>
                        </a>
                      </Link>
                    </div>
                  )}
                </div>
              ) : (
                <button
                  disabled={isDisabledTitle}
                  onClick={handleCreateDisc}
                  className="btn w-90 h-32 text-sm"
                >
                  Create{" "}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default withAuth(CreateDiscussion);
