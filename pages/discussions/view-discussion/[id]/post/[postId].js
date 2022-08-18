import React from "react";
import { useRouter } from "next/router";
import Layout from "@/components/Layout";
const Post = () => {
  const router = useRouter();
  const { id, postId } = router.query;
  console.log(id, postId);
  return (
    <Layout>
      <div>POSt {postId}</div>
    </Layout>
  );
};

export default Post;
