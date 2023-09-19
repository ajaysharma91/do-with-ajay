import { useSession } from "next-auth/react";
import React from "react";
import { styled } from "styled-components";
import Input from "../../Common/Input";
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
// const Input = styled.textarea`
//   // outline:auto;
//   border: 1px solid gray;
//   border-radius: 5px;
//   padding: 0.5rem;
// `;
const Button = styled.button`
  width: 100%;
  flex: 2;
  border: 1px solid gray;
  border-radius: 5px;
  padding: 0.4rem;
  color: white;
  background-color: green;
`;

function CreateComment({postId,submitComment,parentId}:{postId?:any,submitComment:Function,parentId?:number}) {
  const [body, setBody] = React.useState({
    bodyText:'',
    parent_id:parentId
  });
  const onChangeHandler = (e:any)=>{
    console.log("Hello change")
    setBody({...body,bodyText:e.target.value})
  }
  return (
    <Container>
      <FormWrapper>
        <Form onSubmit={(e) => submitComment(e,body)}>
          <InputWrapper>
            <Input
              placeholder="Please Enter Thought.."
              name="bodyText"
              id="input-id"
              value={body.bodyText}
              onChange={onChangeHandler}
            />
          </InputWrapper>
          <Button>Send</Button>
        </Form>
      </FormWrapper>
    </Container>
  );
}

export default CreateComment;
