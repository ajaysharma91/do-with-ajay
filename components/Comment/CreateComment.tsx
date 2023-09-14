import { useSession } from "next-auth/react";
import React from "react";
import { styled } from "styled-components";
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0.3rem;
`;
const InputWrapper = styled.div`
  display: flex;
  flex: 10;
  flex-direction: column;
  gap: 0.3rem;
`;
const Form = styled.form`
  display: flex;
  //   flex-direction: column;
  gap: 0.8rem;
  align-items: center;
  width: 100%;
`;
const Input = styled.textarea`
  // outline:auto;
  border: 1px solid gray;
  border-radius: 5px;
  padding: 0.5rem;
`;
const Button = styled.button`
  width: 100%;
  flex: 1;
  height: 50px;
  border: 1px solid gray;
  border-radius: 5px;
  padding: 0 0.5rem;
  color: white;
  background-color: green;
`;

function CreateComment({postId,submitCategory}:{postId:any,submitCategory:Function}) {
  const [bodyText, setBodyText] = React.useState("");
  return (
    <Container>
      <FormWrapper>
        <Form onSubmit={(e) => submitCategory(e,bodyText)}>
          <InputWrapper>
            <Input
              placeholder="Please Enter Thought.."
              name="bodyText"
              id="post-title"
              value={bodyText}
              onChange={(e) => setBodyText(e.target.value)}
            />
          </InputWrapper>
          <Button>Send</Button>
        </Form>
      </FormWrapper>
    </Container>
  );
}

export default CreateComment;
