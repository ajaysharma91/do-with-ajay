"use client";
import { useSession } from "next-auth/react";
import React from "react";
import { styled } from "styled-components";
const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction:column;
`;
const HeadingH2 = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 32px;
  font-weight: bold;
`;
const FormWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
`;
const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;
const Input = styled.input`
  // outline:auto;
  border: 1px solid gray;
  border-radius: 5px;
  padding: 0.5rem;
`;
const Button = styled.button`
  width: 100%;
  border: 1px solid gray;
  border-radius: 5px;
  padding: 0.5rem;
  color: white;
  background-color: green;
`;
function Category() {
    const { data: session } = useSession();

  const [category, setCategory] = React.useState({
    name: "",
    description: "",
  });
  const submitCategory = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    console.log("Session", session?.user.accessToken);
    var raw = JSON.stringify({
      token: session?.user.accessToken,
      category,
    });
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
    };

    fetch("http://localhost:3000/api/category", requestOptions)
      .then((res) => console.log(res))
      .catch((e) => console.log(e));
  };
  return (
    <Container>
      <HeadingH2>Add Your Category Here!</HeadingH2>
      <FormWrapper>
        <Form onSubmit={(e) => submitCategory(e)}>
          <InputWrapper>
            <label>Name</label>
            <Input
              type="text"
              placeholder="Please Enter name.."
              name="name"
              id="name"
              value={category.name}
              onChange={(e) =>
                setCategory({ ...category, name: e.target.value })
              }
            />
          </InputWrapper>
          <InputWrapper>
            <label>Description</label>
            <Input
              type="text"
              placeholder="Please Enter Description.."
              name="description"
              id="description"
              value={category.description}
              onChange={(e) =>
                setCategory({ ...category, description: e.target.value })
              }
            />
          </InputWrapper>
          <Button>Add Category</Button>
        </Form>
      </FormWrapper>
    </Container>
  );
}

export default Category;
