"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";
import { styled } from "styled-components";

const NavbarMain = styled.div`
  position:fixed;
  z-index:1;
  width: 100%;
  display: flex;
  border-bottom:1px solid lightgray;
  background: ${(props) => props.theme.bg};
  color: ${(props) => props.theme.fg};
`;
const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
`;
const Nav = styled.div`
  display: flex;
  width: 70%;
  justify-content: flex-end;
  align-items: center;
  gap: 2rem;
  @media (max-width: 480px) {
    gap: 1rem;
  }
  @media (max-width: 320px) {
    display: none;
  }
`;
const Brand = styled.div`
  display: flex;
  width: 10%;
  justify-content: flex-start;
  align-items: center;
`;
const BrandText = styled.p`
  font-size: 20px;
  color: ${(props) => props.theme.fg};
`;
const Text = styled.p`
  font-size: 18px;
  font-weight: 300;
  @media (max-width: 480px) {
    font-size: 14px;
  }
`;
const Toggler = styled.div`
  display: none;
  @media (max-width: 320px) {
    display: block;
  }
`;

const AuthSection = styled.div`
  display: flex;
  width: 20%;
  justify-content: flex-end;
  gap:0.5rem;
  align-items: center;
`;
const ThemeChanger = styled.button`
  display: flex;
  background:${props=>props.theme.fg};
  border:1px solid ${props=>props.theme.fg};
  border-radius:1rem;
  color:${props=>props.theme.bg};
  padding:0.3rem 0.7rem;
`;
export default function Navbar({
  setIsLight,
  isLight,
}: {
  setIsLight: any;
  isLight: any;
}) {
  const {data:session} = useSession()
  return (
    <NavbarMain>
      <Container>
        <Brand>
          <BrandText color="black">
            LwP
          </BrandText>
        </Brand>
        <Toggler>
          <Text>More</Text>
        </Toggler>
        <Nav>
          <Text>Home</Text>
          <Text>Categories</Text>
          <Text>Posts</Text>
          <Text>About</Text>
        </Nav>
        <AuthSection>
          {!session && <button onClick={()=>signIn(undefined, { callbackUrl: 'http://localhost:3000/learn-with-parashar' })}>Login</button>}
          {session && <button onClick={()=>signOut()}>Logout</button>}
          <ThemeChanger onClick={() => setIsLight()}>
            {isLight ? "Dark" : "Light"}
          </ThemeChanger>
        </AuthSection>
      </Container>
    </NavbarMain>
  );
}
