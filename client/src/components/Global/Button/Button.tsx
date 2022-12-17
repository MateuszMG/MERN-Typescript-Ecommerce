import { ButtonHTMLAttributes, ReactNode } from 'react';
import { Loader } from '../Loader/Loader';
import { ButtonTag } from './Button.styled';

interface GlobalButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string | ReactNode;
  isError?: boolean;
  isLoading?: boolean;
}

export const Button = ({
  children,
  disabled,
  isError,
  isLoading,
  ...rest
}: GlobalButtonProps) => {
  return (
    <ButtonTag {...rest} disabled={disabled || isLoading || isError}>
      {isLoading ? <Loader /> : children}
    </ButtonTag>
  );
};
