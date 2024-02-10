import styled from "styled-components";

const StyledText = styled.p`
  text-align: center;
  color: ${(props) => `#${props.color}`};
  font-weight: 900;
`;

const Text = ({ children, ...props }) => {
  return <StyledText {...props}>{children}</StyledText>;
};

export default Text;
