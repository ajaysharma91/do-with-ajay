'use client'
import React from 'react'
import './page.css';
import { styled } from 'styled-components'
import Posts from '../../../components/Posts';
const Main = styled.div`
  margin-top:70px;
  position:relative;
  display:flex;
  min-height:100vh;
  width:100%;
  background:${props=>props.theme.bg};
  color:${props=>props.theme.fg};
`;
const LeftContainer = styled.div`
  width:70%;
  display:flex;
  min-height:100vh;
  padding:1rem;
  border-right: 1px solid lightgray;
`;
const RightContainer = styled.div`
  position:fixed;
  right:0;
  width:30%;
  min-height:100vh;
  display:flex;
  padding:1rem;
`;
export default function MainPage({}) {
  return (
    <Main>
      <LeftContainer><Posts/></LeftContainer>
      <RightContainer><p>Right Content</p></RightContainer>
    </Main>
  )
}
