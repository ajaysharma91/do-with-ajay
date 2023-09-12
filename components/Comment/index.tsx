import React from "react";
import CreateComment from "./CreateComment";
import CommentList from "./CommentList";
import styled from "styled-components";
const DIV = styled.div`
  width: 100%;
  padding:0.3rem;
`;
function Comment(comments) {
  const [comment, setComment] = React.useState(comments);
  console.log({comment})
  return (
    <>
      <CreateComment />
      <DIV>
      {comment?.comments?.map((comment1,index)=>  (<CommentList key={index} comments={comment1} />))}
      </DIV>
    </>
  );
}

export default Comment;
