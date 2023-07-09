'use client'
import React from 'react'
import { styled } from 'styled-components'
const PostContainer = styled.div`
  display:flex;
  padding:1rem;
  height:100vh;
  flex-direction:column;
  width:100%;
  background:${props=>props.theme.bg};
  color:${props=>props.theme.fg};
`;
const Content = styled.div`
  width:70%;
  display:flex;
  flex-direction:column;
`;
const Comments = styled.div`
  width:30%;
  display:flex;
`;
const PostTitle = styled.h2`
    font-size:26px;
    font-weight:bold;
    line-height:1.2;
`;
const PostBody = styled.p`
    font-size:16;
`;
const UserDetails = styled.div`
  display:flex;
  gap:0.5rem;
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
const getPost = async (postId:any)=> {
  const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
  return data.json();
}
const getUser = async (userId:any)=>{
  const user = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
  return user.json()
}
export default async function Post({params}:{params:any}) {
  const {postId} = params;
  console.log({params})
  const post = await getPost(postId[0]);
  const user = await getUser(post.userId)
  return (
    <PostContainer>
      <UserDetails>
        <TextBold>{user.username}</TextBold>
        <Text>{user.email}</Text>
      </UserDetails>
      <Content>
        <PostTitle>
          {post.title}
        </PostTitle>
        <PostBody>{post.body}</PostBody>
      </Content>
      <Comments></Comments>
    </PostContainer>
  )
}
