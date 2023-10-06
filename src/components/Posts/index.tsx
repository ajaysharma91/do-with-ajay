"use client";
import React, { useEffect, useRef, useState } from "react";
import { styled } from "styled-components";
import { useRouter } from "next/navigation";
import useGetPosts from "./useGetPosts";
import Cards from "./Cards";

const PostContainer = styled.div`
  margin-top: 70px;
  display: flex;
  width: 100%;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 100px;
`;
const PostCard = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background: ${(props) => props.theme.cardBg};
  border: ${(props) => props.theme.border};
  box-shadow: ${(props) => props.theme.bs};
  // box-shadow: 1px 2px 4px 2px rgba(12, 12, 12, 0.2);
`;
const CardTitle = styled.h3`
  font-weight: 400;
  font-size: 24px;
`;
const CardSubtitle = styled.h4`
  font-weight: 400;
  font-size: 20px;
`;
const PostCardImage = styled.div`
  width: 20%;
  padding: 0.2rem;
`;
const PostContent = styled.div`
  display: flex;
  width: 80%;
  flex-direction: column;
  padding: 0.2rem;
`;
const CardBody = styled.p`
  font-weight: 300;
  font-size: 18px;
`;
const CardFooter = styled.div`
  width: 100%;
`;
const ButtonMore = styled.button`
  width: 50%;
  display: flex;
  align-items: flex-end;
`;

export default function Posts() {
  const [pageNumer, setPageNumber] = useState(1);
  const { error, loading, data } = useGetPosts(pageNumer);
  const starting = (pageNumer - 1) * 10;
  const getCards: React.ReactElement[] = data
    .slice(0, pageNumer * 10)
    .map((post: any, index: any) => {
      const isLast = index + 1 == pageNumer * 10;
      console.log({ isLast });
      return (
        <Cards
          post={post}
          setPageNumber={setPageNumber}
          isLast={isLast}
          key={index}
        />
      );
    });
  return (
    <PostContainer>
      {getCards}
      {loading && <h1>Loading....</h1>}
    </PostContainer>
  );
}
