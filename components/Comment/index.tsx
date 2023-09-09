import React from "react";
import CreateComment from "./CreateComment";
import CommentList from "./CommentList";
import styled from "styled-components";
const DIV = styled.div`
  width: 50%;
`;
function Comment() {
  const [comment, setComment] = React.useState([
    {
      id: 1,
      body: "First Comment",
      reply: [
        { id: 1, body: "reply on first", reply: [] },
        {
          id: 2,
          body: "reply 1 on first",
          reply: [{ id: 1, body: "Thanks", reply: [] }],
        },
      ],
    },
    {
      id: 2,
      body: "Second Comment",
      reply: [
        {
          id: 1,
          body: "reply 1 on second",
          reply: [{ id: 1, body: "Thanks for your resply", reply: [] }],
        },
      ],
    },
  ]);
  return (
    <>
      <CreateComment />
      <DIV>
      {comment.map((comment1,index)=>  (<CommentList key={index} comments={comment1} />))}
      </DIV>
    </>
  );
}

export default Comment;
