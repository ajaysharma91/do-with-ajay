import React from 'react'
import { styled } from 'styled-components'
interface CategoryProps {
    name?:string,
    description?:string
}
const Container = styled.div`
    display:flex;
    justify-content:center;
    align-items:Center;
`;
const Span = styled.span`
    font-wight:300;
    color:${(props) => props.theme.color};
`;
export default function CategoryDetails({category}:{category:CategoryProps}) {
  return (
    <Container>
        <Span>{category.name}</Span>
        <Span>{category.description}</Span>
    </Container>
  )
}
