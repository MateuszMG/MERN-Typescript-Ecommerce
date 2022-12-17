import { ReactNode } from "react";
import { Error, Label, Wrap } from "./InputBox.styled";

interface InputBoxProps {
  children: ReactNode;
  error?: string;
  label?: string;
}

export const InputBox = ({ children, error, label }: InputBoxProps) => {
  return (
    <Wrap>
      <Label> {label} </Label>
      {children}
      <Error> {error} </Error>
    </Wrap>
  );
};
