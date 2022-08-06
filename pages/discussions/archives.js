import Layout from "@/components/Layout";
import React from "react";
import styles from "@/styles/discussion.module.css";

const Archives = () => {
  return (
    <Layout title="Inso | Archives">
      <div
        className={`${styles.hiddenScrollbar} relative h-full py-50 px-38 vp-600:p-23 vp-980:p-46 w-full`}
      >
        <h4 className=" text-primary-darkGreen">Archives</h4>
      </div>
    </Layout>
  );
};

export default Archives;
