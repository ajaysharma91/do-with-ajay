import React, { useCallback, useEffect } from "react";
import CreateComment from "./CreateComment";
import CommentList from "./CommentList";
import styled from "styled-components";
import { useSession } from "next-auth/react";
import useGetComments from "../Posts/useGetComments";
const DIV = styled.div`
  width: 100%;
  padding: 0.3rem;
`;
const H2 = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
`;
function Comment({ postId }: { postId: any }) {
  console.log("Refresh component")
  const [comment,setComment] = React.useState([])
  const [response, setResponse] = React.useState(false);
  // const {error,loading,data} = useGetComments(postId);
  const { data: session } = useSession();
  const token = session?.user.accessToken;
  const getComments = async (postId:any) => {
    console.log("Get Past")
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var requestOptions:RequestInit = {
        method: "GET",
        headers: myHeaders,
        cache:'no-store'
      };
    try{const data = await fetch(`http://localhost:3000/api/comment/${postId}`,requestOptions)
    console.log({data})
    return data.json();}
    catch(err){
        console.log("Error",err)
    }
  };
  useEffect(()=>{
    console.log("Response Changed")
    getComments(postId).then(res=>setComment(res.response))
  },[response])
  const submitComment = async (
    e: React.FormEvent<HTMLFormElement>,
    body: any
  ) => {
    e.preventDefault();
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({
      token: session?.user.accessToken,
      commentData: {
        parent_id: body?.parent_id?body.parent_id:0,
        body: body?.bodyText,
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
        .then((res) => {
          console.log("Get response")
          setResponse(!response)})
        .catch((err) => console.log(err));
    } catch (error) {}
  };
  console.log({comment})
  return (
    <>
      <DIV>
        <H2>Post your thoughts here.!</H2>
      </DIV>
      <CreateComment postId={postId} submitComment={submitComment} />
      <DIV>
        {comment?.map((comment1: any, index: React.Key | null | undefined) => (
          <CommentList key={index} comments={comment1} submitComment={submitComment}/>
        ))}
      </DIV>
    </>
  );
}

export default Comment;
