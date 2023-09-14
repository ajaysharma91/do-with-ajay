import React from "react";
import CreateComment from "./CreateComment";
import CommentList from "./CommentList";
import styled from "styled-components";
import { useSession } from "next-auth/react";
const DIV = styled.div`
  width: 100%;
  padding: 0.3rem;
`;
const H2 = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
`;
function Comment({ comments, postId }: { comments: any; postId: any }) {
  const [comment, setComment] = React.useState(comments);
  const [response, setResponse] = React.useState("");
  const { data: session } = useSession();
  const token = session?.user.accessToken;
  console.log({ comment }, { comments });
  const submitCategory = async (
    e: React.FormEvent<HTMLFormElement>,
    bodyText: any
  ) => {
    e.preventDefault();
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({
      token: session?.user.accessToken,
      commentData: {
        parent_id: 0,
        body: bodyText,
        name: "kashis",
        email: "test2@gmail.com",
      },
    });
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
    };
    try {
      await fetch(`/api/comment/${postId}`, requestOptions)
        .then((res) => setResponse(JSON.stringify(res)))
        .catch((err) => console.log(err));
    } catch (error) {}
  };
  return (
    <>
      <DIV>
        <H2>Post your thoughts here.!</H2>
      </DIV>
      <CreateComment postId={postId} submitCategory={submitCategory} />
      <DIV>
        {comment?.map((comment1: any, index: React.Key | null | undefined) => (
          <CommentList key={index} comments={comment1} />
        ))}
      </DIV>
    </>
  );
}

export default Comment;
