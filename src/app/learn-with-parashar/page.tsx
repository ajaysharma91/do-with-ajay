'use client'
import React from 'react'
import { styled } from 'styled-components'
import Posts from '../../../components/Posts';
const Main = styled.div`
  display:flex;
  min-height:100vh;
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
