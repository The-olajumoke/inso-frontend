import React from "react";
import { useRouter } from "next/router";
import Layout from "@/components/Layout";
import styles from "@/styles/discussion.module.css";
import Image from "next/image";
import Link from "next/link";

const ViewDiscussion = ({}) => {
  const router = useRouter();
  const id = router.query.id;

  return (
    <Layout
      title={`Inso | Discussions | ${id} `}
      searchBar={false}
      bgColor="bg-white-white"
    >
      <div className=" h-full flex flex-col  ">
        <div className="h-89 bg-gray-background mb-10 px-50 flex items-center justify-between">
          <div className=" flex items-center">
            <Link href="/discussions" passHref>
              <div className="flex items-center justify-center">
                <Image
                  src="/icons/arrow_back.svg"
                  alt="back"
                  layout="fixed"
                  width="20"
                  height="20"
                />
              </div>
            </Link>
            <h3 className="ml-13">Discussion title</h3>
          </div>
          <form action="">
            <div className={`${styles.searchInput}  `}>
              <div className="flex items-center justify-center ">
                <Image
                  src="/icons/search.svg"
                  alt="more"
                  layout="fixed"
                  width="13"
                  height="13"
                />
              </div>
              <input
                type="text"
                className={`border-none h-auto focus:ring-0 bg-transparent`}
                placeholder="Input keyword to search or filter "
              />
            </div>
          </form>
          <div className="flex  items-center gap-6">
            <div className="flex items-center justify-center cursor-pointer">
              <Image
                src="/icons/more_icon.svg"
                alt="more"
                layout="fixed"
                width="20"
                height="20"
              />
            </div>
            <div className="flex items-center justify-center ">
              <Image
                src="/icons/divider.svg"
                alt="divider"
                layout="fixed"
                width="20"
                height="53"
              />
            </div>
            <div className="flex items-center justify-center cursor-pointer">
              <Image
                src="/icons/help_icon.svg"
                alt="help"
                layout="fixed"
                width="23"
                height="23"
              />
            </div>
          </div>
        </div>
        <div className="h-94 px-50 py-10 bg-gray-background ">
          <div className=" flex justify-between items-center">
            <div className="flex  items-center">
              <div className="flex items-center justify-center">
                <Image
                  src="/icons/avatar.svg"
                  alt="back"
                  layout="fixed"
                  width="40"
                  height="40"
                />
              </div>
              <div className="ml-13">
                <h5 className=" font-bold">
                  Dante Bowe
                  <span className=" text-primary-darkGreen text-xs font-normal ml-3">
                    @DANTE
                  </span>
                </h5>
                <span className="text-xs text-gray-text">
                  posted 6 mins ago
                </span>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <Image
                src="/icons/more_icon_grey.svg"
                alt="back"
                layout="fixed"
                width="7"
                height="26"
                className=" cursor-pointer"
              />
            </div>
          </div>
          <h6 className="mt-10 text-gray-text break-words">
            What’s your opinion on the Fukushima Nuclear power plant incident in
            2011 and how does it relate with current occurences now in 2021?
          </h6>
        </div>
        <div className=" flex-grow  flex flex-col  justify-between mt-32">
          <div style={{ maxHeight: "400px" }} className="px-50 overflow-y-auto">
            {/* <Image
              src="/icons/comments.svg"
              alt="no discussion"
              layout="fixed"
              width="800"
              height="400"
            /> */}
          </div>
          {/* COMMENT BOX */}
          <div className="h-122 my-32 px-50">
            <div className="h-full border  rounded-lg border-primary-darkGreen py-12 px-20 flex items-end">
              <div className="flex w-full items-center justify-between">
                <div className="flex items-center">
                  <div className="mr-42">
                    <Image
                      src="/illustrations/post_inspiration_button.svg"
                      alt="post inspirations"
                      layout="fixed"
                      width="90"
                      height="34"
                    />
                  </div>
                  <div className="flex items-center gap-12">
                    <Image
                      src="/icons/font_icon.svg"
                      alt="font"
                      layout="fixed"
                      width="20"
                      height="20"
                      className=" cursor-pointer"
                    />
                    <Image
                      src="/icons/emoji_icon.svg"
                      alt="emoji"
                      layout="fixed"
                      width="22"
                      height="22"
                      className=" cursor-pointer"
                    />
                    <Image
                      src="/icons/attach_icon.svg"
                      alt="attach"
                      layout="fixed"
                      width="20"
                      height="20"
                      className=" cursor-pointer"
                    />
                    <Image
                      src="/icons/image_icon.svg"
                      alt="image"
                      layout="fixed"
                      width="18"
                      height="18"
                      className=" cursor-pointer"
                    />
                  </div>
                </div>

                <button disabled={true} className="w-93 h-34 text-sm  btn">
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ViewDiscussion;