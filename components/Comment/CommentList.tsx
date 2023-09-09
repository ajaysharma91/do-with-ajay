import React from "react";
import { styled } from "styled-components";
const Container = styled.div`
  display: flex;
  backgrand: ${(props) => props.theme.bg};
  border-left: 1px solid #ad3b3bbf;
  padding: 0.8rem 0.5rem;
  border-radius: 5px;
  flex-direction: column;
  margin-top: 0.3rem;
`;
const PaddingLeft = styled.div`
  padding-left: 25px;
`;
const Main = styled.div`
  width: 100%;
  // margin-top: 0.3rem;
  display: flex;
  margin-left: 15px;
  backgrand: ${(props) => props.theme.bg};
  //   border: 1px solid lightgray;
  border-radius: 5px;
  flex-direction: column;
`;
const Action = styled.div`
  display: flex;
  gap: 0.2rem;
`;
const Input = styled.input`
  // outline:auto;
  flex: 10;
  border: 1px solid gray;
  border-radius: 5px;
  padding: 0.3rem;
`;
const Button = styled.button`
  width: 100%;
  flex: 1;
  //   height: 50px;
  border: 1px solid gray;
  border-radius: 5px;
  padding: 0.3rem;
  color: white;
  background-color: green;
`;
export default function CommentList({ comments }) {
  const [isReply, setIsReply] = React.useState(false);
  const [isShow, setIsShow] = React.useState(false);
  return (
    <Main>
      <>
        <Container>
          <div
            style={{
              border: "1px solid lightgray",
              padding: "0.2rem",
              borderRadius: "0.2rem",
            }}
          >
            <div>{comments?.body}</div>
            <Action>
              {!isReply && (
                <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',width:'100%',padding:'0 0.3rem'}}>
                  <button onClick={() => setIsReply(true)}>reply</button>
                  <button onClick={()=>setIsShow(!isShow)}>{isShow ? "Hide" : "Show"} Replies</button>
                </div>
              )}
              {/* <button>edit</button> */}
              {isReply && (
                <button onClick={() => setIsReply(false)}>cancel</button>
              )}
            </Action>
            {isReply && <CommentInput />}
          </div>

          <PaddingLeft
            style={{
              display: isShow ? "flex" : "none",
              flexDirection: "column",
            }}
          >
            {comments.reply?.map((comment, index) => (
              <CommentList key={index} comments={comment} />
            ))}
          </PaddingLeft>
        </Container>
      </>
    </Main>
  );
}

const CommentInput = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "0.1rem",
      }}
    >
      <Input />
      <Button>Comment</Button>
    </div>
  );
};