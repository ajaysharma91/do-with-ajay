import React, { useEffect, useRef } from 'react'
import styled from 'styled-components';
const PostContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
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
import { useRouter } from "next/navigation";

export default function Cards({post,setPageNumber,isLast}) {
    const router = useRouter()
    const cardRef = useRef();

    useEffect(() => {
        if (!cardRef?.current) {
          console.log("Hello1",cardRef.current)
          return};
    
        const observer = new IntersectionObserver(([entry]) => {
          console.log("Hello",isLast)
          if (isLast && entry.isIntersecting) {
            setPageNumber((prev)=>prev<10?prev+1:10)
            observer.unobserve(entry.target);
          }
        },{rootMargin:'-100px'});
    
        observer.observe(cardRef.current);
      }, [isLast]);
      console.log({isLast})
  return <>
    <PostCard key={post.id} ref={cardRef as unknown as React.RefObject<HTMLDivElement>}>
    <PostCardImage>No Image</PostCardImage>
    <PostContent>
      <CardTitle>{post.title} </CardTitle>
      {/* <CardSubtitle>{post.category} </CardSubtitle> */}
      <CardBody>{post.body}</CardBody>
      <CardFooter>
        <ButtonMore
          onClick={() =>
            router.push(`/learn-with-parashar/post/${post.id}`)
          }
        >
          More Info.
        </ButtonMore>
      </CardFooter>
    </PostContent>
  </PostCard>
  </>
}
