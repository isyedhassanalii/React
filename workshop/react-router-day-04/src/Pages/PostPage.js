import React from "react";
import { useLocation, useParams } from "react-router";

const PostPage = () => {
  const { id } = useParams();
  // console.log(useLocation());
  const query = new URLSearchParams(useLocation().search);
  console.log(query);
  return (
    <>
      <h2>Id is = {id}</h2>
      <h3>{query.get("name")}</h3>
    </>
  );
};

export default PostPage;
