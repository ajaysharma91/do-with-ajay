import React from "react";
import styled from "styled-components";
const Container = styled.div<{ flexDirection?: string }>`
width:100%;
  display: flex;
  flex-direction: ${(props) =>
    props.flexDirection ? props.flexDirection : "row"};
`;
const Label = styled.span`
  font-size: 18px;
  font-weight: 400;
`;
const InputText = styled.input`
  border: 1px solid gray;
  border-radius: 5px;
  padding: 0.3rem;
  width:100%;

`;
interface InputProps {
  flexDirection?: string;
  label?: string;
  onChange: (e: any) => void;
  name: string;
  value: any;
  id: string;
  placeholder: string;
}
export default function Input({
  flexDirection,
  label,
  onChange,
  id,
  name,
  value,
  placeholder,
  ...props
}: InputProps) {
  return (
    <Container flexDirection={flexDirection}>
      <Label>{label}</Label>
      <InputText
        onChange={(e) => onChange(e)}
        value={value}
        name={name}
        id={id}
        placeholder={placeholder}
        {...props}
      />
    </Container>
  );
}
