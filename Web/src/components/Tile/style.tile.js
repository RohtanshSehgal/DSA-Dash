import styled from "styled-components";
export const Div = styled.div`
  font-family: "IBM Plex Mono", monospace;
  display: flex;
  flex-direction: column;
  border-style: solid;
  color: white;
  border-color: ${(props) => props.color};
  border-radius: 20px;
  margin: 15px;
  height: 160px;
  width: 200px;
  justify-content: space-between;

  h2 {
    text-align: center;
    transition: 0.5s;
  }
  p {
    font-style: italic;
    text-align: center;
  }
  &:hover {
    h2 {
      color: ${(props) => props.color};
    }
    cursor: pointer;
  }
`;
