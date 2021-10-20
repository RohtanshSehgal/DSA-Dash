import styled from "styled-components";
export const Div = styled.div`
  /* @import url("https://fonts.googleapis.com/css2?family=Major+Mono+Display&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@200&display=swap"); */
  width: 286px;
  height: 428px;
  text-align: center;
  padding-left: 10px;
  padding-right: 10px;
  border-style: solid;
  color: ${(props) => props.color};
  border-color: ${(props) => props.color};
  border-radius: 20px;
  transition: 0.3s;
  margin: 0px 24px;

  &:hover {
    transform: scale(1.1);
  }
  p {
    font-weight: 600;
    font-family: "Major Mono Display", monospace;
    font-size: 30px;
  }
  h4 {
    font-family: "Major Mono Display", monospace;
    /* font-family: "IBM Plex Mono", monospace; */
    font-size: small;
    font-weight: bolder;
    margin-bottom: 55px;
  }
  //responsive
  @media (max-width: 1000px) {
    width: 143px;
    height: 214px;
    p {
      font-weight: 600;
      font-family: "Major Mono Display", monospace;
      font-size: medium;
    }
    h4 {
      font-size: xx-small;
      font-weight: bolder;
      margin-bottom: 20px;
    }
    svg {
      height: 100px;
      width: 120px;
    }
  }
  @media (max-width: 650px) {
    margin-top: 10px;
  }
`;
