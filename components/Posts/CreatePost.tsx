import React, { useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { PostForm } from "@/app/global";
import { styled } from "styled-components";
import { useSession } from "next-auth/react";
const PostContainer = styled.div`
  width: 100;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const PostHeadingH2 = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 32px;
  font-weight: bold;
`;
const PostFormWrapper = styled.div`
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
export default function CreatePost({ post }: { post: PostForm }) {
  const { data: session } = useSession();
  const [message, setMessage] = useState("");
  const [postData, setPostData] = useState(post);
  const handleEditorChange = (e: any) => {
    console.log("Content was updated:", e.target.getContent());
    setPostData({ ...postData, content: e.target.getContent() });
  };
  const submitPost = (e: any) => {
    e.preventDefault();
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    console.log("Session", session?.user.accessToken);
    var raw = JSON.stringify({
      token: session?.user.accessToken,
      postData,
    });
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
    };

    fetch("http://localhost:3000/api/post", requestOptions)
      .then((res) => console.log(res))
      .catch((e) => console.log(e));
  };
  return (
    <PostContainer>
      <PostHeadingH2>Create Your Post Here!</PostHeadingH2>
      <PostFormWrapper>
        <Form onSubmit={(e) => submitPost(e)}>
          <InputWrapper>
            <label>Title</label>
            <Input
              type="text"
              placeholder="Please Enter Title.."
              name="post-title"
              id="post-title"
              value={postData.title}
              onChange={(e) =>
                setPostData({ ...postData, title: e.target.value })
              }
            />
          </InputWrapper>
          <InputWrapper>
            <label>Description</label>
            <Input
              type="text"
              placeholder="Please Enter Description.."
              name="description-title"
              id="description-title"
              value={postData.description}
              onChange={(e) =>
                setPostData({ ...postData, description: e.target.value })
              }
            />
          </InputWrapper>
          <InputWrapper>
            <label>Content</label>
            <Editor
              initialValue="<p>This is the initial content of the editor</p>"
              init={{
                plugins: "link image code media",
                toolbar:
                  "undo redo | bold italic | alignleft aligncenter alignright | code | media",
              }}
              onChange={(e) => handleEditorChange(e)}
            />
          </InputWrapper>
          <Button>Create Post</Button>
        </Form>
      </PostFormWrapper>
    </PostContainer>
  );
}
