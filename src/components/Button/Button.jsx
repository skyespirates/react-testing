import styled from "styled-components";

const StyledButton = styled.button`
  border: 1px solid purple;
  color: white;
  background-color: ${(props) =>
    props.type === "primary" ? "purple" : "gray"};
  padding: 8px 16px;
  border-radius: 5px;
  cursor: pointer;
`;

const Button = ({ type, children, handleClick, ...props }) => {
  return (
    <StyledButton type={type} onClick={handleClick} {...props}>
      {children}
    </StyledButton>
  );
};

Button.defaultProps = {
  children: "Button",
};

export default Button;
