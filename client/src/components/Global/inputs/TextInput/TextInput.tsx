import { forwardRef, InputHTMLAttributes } from 'react';
import { InputBox } from '../../InputBox/InputBox';
import { InputTag } from './TextInput.styled';

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  label?: string;
}

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ label, error, ...rest }: TextInputProps, ref) => {
    return (
      <InputBox label={label} error={error}>
        <InputTag {...rest} ref={ref} />
      </InputBox>
    );
  },
);
