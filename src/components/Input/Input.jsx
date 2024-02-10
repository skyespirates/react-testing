import { forwardRef } from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  padding: 8px 16px;
  outline-style: none;
  border: 1px solid purple;
  border-radius: 5px;
`;

const Input = forwardRef(
  ({ value, handleKeyDown, handleChange, placholder, ...props }, ref) => {
    return (
      <StyledInput
        ref={ref}
        type="number"
        value={value}
        onKeyDown={handleKeyDown}
        onChange={handleChange}
        placeholder={placholder}
        {...props}
      />
    );
  }
);

Input.defaultProps = {
  placeholder: "type here",
};

export default Input;
