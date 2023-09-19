import React, { useEffect, useRef } from "react";
import Image from "next/image";
import styled from "styled-components";
const PostContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  gap: 0.2rem;
  background: ${(props) => props.theme.cardBg};
  // border: ${(props) => props.theme.border};
  padding: 1rem;
`;
const PostCard = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  gap: 0.1rem;
  // box-shadow: ${(props) => props.theme.bs};
  // box-shadow: 1px 2px 4px 2px rgba(12, 12, 12, 0.2);
`;
const CardTitle = styled.h3`
  font-weight: 800;
  font-size: 24px;
`;
const CardSubtitle = styled.h4`
  font-weight: 4 00;
  font-size: 20px;
`;
const PostCardImage = styled.div`
  width: 20%;
  display: flex;
  justify-content: center;
`;
const PostContent = styled.div`
  display: flex;
  width: 80%;
  flex-direction: column;
`;
const CardBody = styled.div`
  font-weight: 300;
  font-size: 18px;
  height: 200px;
  overflow: hidden;
`;
const CardFooter = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${(props) => props.theme.color};
`;
const ButtonMore = styled.button`
  width: 50%;
  display: flex;
  align-items: flex-end;
`;
const CardHeader = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 0.1rem;
  margin-bottom: 0.5rem;
`;
import { useRouter } from "next/navigation";
import UserDetails from "../User/UserDetails";
import CategoryDetails from "../Category";

export default function Cards({
  post,
  setPageNumber,
  isLast,
}: {
  post: any;
  setPageNumber: any;
  isLast: any;
}) {
  const router = useRouter();
  const cardRef = useRef();
  console.log({ post });
  useEffect(() => {
    if (!cardRef?.current) {
      console.log("Hello1", cardRef.current);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        console.log("Hello", isLast);
        if (isLast && entry.isIntersecting) {
          setPageNumber((prev: number) => (prev < 10 ? prev + 1 : 10));
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "-100px" }
    );

    observer.observe(cardRef.current);
  }, [isLast, setPageNumber]);
  console.log({ isLast });
  const cat = { name: post.category.name };
  return (
    <PostContainer>
      <PostCard
        key={post.id}
        ref={cardRef as unknown as React.RefObject<HTMLDivElement>}
      >
        <PostContent>
          <CardHeader>
            <UserDetails user={post.user} />
          </CardHeader>
          <CardTitle>{post.title} </CardTitle>
          <CardSubtitle>{post.description} </CardSubtitle>
          {/* <CardBody dangerouslySetInnerHTML={{ __html: post.content }} /> */}
        </PostContent>
        <PostCardImage>
          <Image src="/book.jpg" alt="book image" width={300} height={300} />
        </PostCardImage>
      </PostCard>
      <CardFooter>
        <ButtonMore
          onClick={() => router.push(`/learn-with-parashar/post/${post.id}`)}
        >
          More Info.
        </ButtonMore>
        <CategoryDetails category={cat} />
      </CardFooter>
    </PostContainer>
  );
}
