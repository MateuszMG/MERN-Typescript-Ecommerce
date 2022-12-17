import { FormHTMLAttributes, ReactNode } from 'react';
import { Wrapper, SplitedFields, ButtonsWrapper } from './Form.styled';

interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
  children: ReactNode;
  className?: string;
}

export const Form = ({ children, className, ...rest }: FormProps) => {
  return (
    <Wrapper {...rest} className={className}>
      {children}
    </Wrapper>
  );
};

Form.SplitedFields = SplitedFields;
Form.ButtonsWrapper = ButtonsWrapper;
