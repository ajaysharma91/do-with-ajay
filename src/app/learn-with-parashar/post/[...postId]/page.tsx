"use client";
import React, { useEffect } from "react";
import "../../page.css";
import { styled } from "styled-components";
import UserDetails from "../../../../../components/User/UserDetails";
const Container = styled.div`
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
const UserInfoSection = styled.div`
  padding:1rem;
  width:100%;
  justify-content: center;
  align-items: center;
  display:flex;
  border:0.1rem solid ${(props) => props.theme.bg};
  border-radius:10px;
`;
const WrapContainer = styled.div`
  position: absolute;
  top: 5rem;
  max-width: 1024px;
  justify-content: center;
  align-items: center;
  display: flex;
  padding: 1rem;
  flex-direction: column;
  width: 100%;
  background: ${(props) => props.theme.bg};
  color: ${(props) => props.theme.fg};
`;
const Content = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
`;
const Comments = styled.div`
  width: 30%;
  display: flex;
`;
const PostTitle = styled.h2`
  font-size: 26px;
  font-weight: bold;
  line-height: 1.2;
`;
const PostDesc = styled.h2`
  font-size: 20px;
  font-weight: 400;
  line-height: 1.2;
`;
const PostBody = styled.p`
  font-size: 16;
`;
// const UserDetails = styled.div`
//   display: flex;
//   gap: 0.5rem;
// `;
const UserWrapper = styled.div`
width:100%;
  display: flex;
  justify-content: flex-start;
  gap: 0.1rem;
  margin: 0.5rem 0;
`;
const Text = styled.p`
  font-size: 18px;
  font-weight: 300;
  @media (max-width: 480px) {
    font-size: 14px;
  }
`;
const TextBold = styled.p`
  font-size: 18px;
  font-weight: bold;
  @media (max-width: 480px) {
    font-size: 14px;
  }
`;
const BR = styled.div`
width:70%;
  border-top:1px solid ${(props)=>props.theme.lightGray};
  height:1px;
  margin:1rem 0;
`;
interface PostInterface {
  user: {
    username: string;
    email: string;
  };
  title: string;
  content: string;
  description: string;
  category: {
    id: string;
    name: string;
    description: string;
  };
}
const Post = ({ params }: { params: any }) => {
  const { postId } = params;
  const [post, setPost] = React.useState<PostInterface>({
    user: {
      username: "",
      email: "",
    },
    title: "",
    content: "",
    description: "",
    category: {
      id: "",
      name: "",
      description: "",
    },
  });
  console.log({ params });
  const getPost = async (postId: any) => {
    const data = await fetch(`http://localhost:8080/api/posts/${postId}`);
    return data.json();
  };
  useEffect(() => {
    getPost(postId[0]).then((res) => setPost(res));
  }, [postId]);
  console.log({ post });
  const { user }: any = post;
  return (
    <Container>
      <WrapContainer>
        <Content>
          <PostTitle>{post?.title}</PostTitle>
          <PostDesc>{post?.description}</PostDesc>
          <UserWrapper>
            <UserDetails user={user} />
          </UserWrapper>
          <PostBody dangerouslySetInnerHTML={{ __html: post?.content }} />
        </Content>
        <BR/>
        <Content>
        <UserWrapper>
        <UserDetails user={user} footer />
          </UserWrapper>
        </Content>
      </WrapContainer>
    </Container>
  );
};
export default React.memo(Post);
