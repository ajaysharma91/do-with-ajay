"use client";
import React, { ReactNode } from "react";
import Navbar from "../../components/navbar";
import { ThemeProvider, styled } from "styled-components";
import { useSession } from "next-auth/react";
// import AuthProvider from "../AuthProvider";
import { redirect } from "next/navigation";
const NavWrapper = styled.div`
  position:relative;
`
const Main = styled.div`
  position:relative;
  display:flex;
  background:${props=>props.theme.bg};
  color:${props=>props.theme.fg};
  overflow: auto;
  height:100vh;
`
export default function MainLayout({ children }: { children: ReactNode }) {
  const [isLight, setIsLight] = React.useState(true);
  const lightTheme = {
    isLight:true,
    fg: "#000000",
    bg: "#f5f5f5",
    bs: "1px 2px 4px 2px rgba(12, 12, 12, 0.2)",
    border: "none",
    cardBg: "none",
    color:"#7b2323",
    lightGray:"lightgray"
  };
  const darkTheme = {
    fg: "#fff",
    bg: "#6f6464",
    bs: "1px 1px 4px 2px rgba(251, 251, 254, 0.2)",
    border: "1px solid #423f3f",
    cardBg: "##121111",
    color:"#fff",
    lightGray:"lightgray"
  };
  function changeThem() {
    console.log("Change");
    setIsLight(!isLight);
  }
  const { data: session, status } = useSession();
  if (status === "loading") {
    return <div>Loading...</div>;
  } else if (!session?.user) {
    redirect("/api/auth/signin");
  } else {
    return (
      // <AuthProvider>
      //   <ThemeProvider theme={isLight ? lightTheme : darkTheme}>
      //     <NavWrapper>
      //        <Navbar setIsLight={changeThem} isLight={isLight} />
      //     </NavWrapper>
      //     <Main>{children}</Main>
      //   </ThemeProvider>
      // </AuthProvider>
        <ThemeProvider theme={isLight ? lightTheme : darkTheme}>
          <NavWrapper>
             <Navbar setIsLight={changeThem} isLight={isLight} />
          </NavWrapper>
          <Main>{children}</Main>
        </ThemeProvider>
    );
  }
}
