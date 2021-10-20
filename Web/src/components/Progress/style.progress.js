import styled from "styled-components";
export const Div = styled.div`
  height: 0.3rem;
  width: 100%;
  background: white;
`;
export const Bar = styled.div`
  height: 100%;
  width: ${(props) => props.width};
  border-radius: 0.4rem;

  background: ${(props) => props.color};

  transition: width 0.4s ease;
`;
