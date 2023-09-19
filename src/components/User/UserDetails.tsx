import Image from "next/image";
import React from "react";
import { styled } from "styled-components";
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.3rem;
`;
const ContainerFooter = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.3rem;
  flex-direction: column;
`;
const Span = styled.span`
  color: ${(props) => (props.theme.isLight ? props.color : props.theme.color)};
  font-wight: 300;
`;
const ImageWrapper = styled.div`
  padding: 0.2rem;
  border: 1px solid black;
  border-radius: 50%;
`;
const UserContainer = styled.div`
  display: flex;
  gap: 0.1rem;
  flex-direction: row;
`;
const Details = styled.div`
  display: flex;
  align-items: center;
`;
const FolowUpDetails = styled.div`
  display: flex;
  align-items: flex-start;
  gap:0.1rem;
`;
const About = styled.div`
  display: flex;
  align-items: center;
`;
const BulletPoint = styled.div`
  display: inline;
  width: 2px;
  height: 2px;
  border: 2px solid ${(props) => props.theme.fg};
  border-radius: 50%;
  margin: 0 0.2rem;
`;
const AboutMe = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap:0.1rem;
`;
const H1 = styled.h1`
  font-wight: bold;
  font-size: 26px;
`;

const Button = styled.div<ButtonType>`
  background:${props=>props?.background};
  border:1px solid ${props=>props.theme.isLight?"lightgray":"white"};
  padding:0.4rem;
  border-radius:10px;
  color:white;
`;
interface UserProps  {
  username?: string | "";
  email?: string | "";
}
type ButtonType = {
  background?: string
}
function UserDetails({
  user,
  footer = false,
}: {
  user: UserProps;
  footer?: boolean;
}) {
  return (
    <>
      {!footer && (
        <Container>
          <Image alt="user-imag" width={30} height={20} src="/user_dummy.jpg" />
          <AboutMe>
            <About>
              <Span>
                {user.username!.slice(0, 1).toUpperCase() +
                  user?.username?.slice(1)}
              </Span>
              <BulletPoint />
              <Span color="#1A8917">Follow</Span>
            </About>
            <Details>
              <Span>8 min read</Span>
              <BulletPoint /> <Span>6 days ago</Span>
            </Details>
          </AboutMe>
        </Container>
      )}
      {footer && (
        <ContainerFooter>
          <Image alt="user-imag" width={30} height={20} src="/user_dummy.jpg" />
          <UserContainer>
            <AboutMe>
              <About>
                <H1>
                  Written by{" "}
                  {user.username!.slice(0, 1).toUpperCase() +
                    user?.username?.slice(1)}
                </H1>
              </About>
              <About>
                <Span color="#1A8917">35K Followers</Span>
                <BulletPoint /> Writter for LwP
              </About>
              <About>
                <p>Hi, I am fullstack developer, working full time in XYZ MNCm my expertise in Front End Developer
                Support me on Substack: https://artificialcorner.substack.com/ Medium does not support tech writing since August 1st</p>
              </About>
            </AboutMe>
            <FolowUpDetails>
              <Button background="green">
                    <button>Follow</button>
              </Button>
              <Button background="green">
                    <button>subscribe</button>
              </Button>
            </FolowUpDetails>
          </UserContainer>
        </ContainerFooter>
      )}
    </>
  );
}

export default UserDetails;
