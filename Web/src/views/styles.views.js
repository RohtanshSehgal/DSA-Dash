import styled from "styled-components";
export const Section = styled.section`
  /* display: flex; */
  margin-top: 30px;
  padding: 20px;
  display: flex;
  justify-content: space-evenly;

  @media (max-width: 650px) {
    flex-direction: column;
    align-items: center;
    margin-top: 0px;
  }
`;
export const Heading = styled.h1`
  /* @import url("https://fonts.googleapis.com/css2?family=Major+Mono+Display&display=swap"); */
  font-family: "Major Mono Display", monospace;
  color: white;
  font-weight: 300;
  @media (max-width: 650px) {
    font-size: larger;
  }
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  background-color: #1a1f26;
  padding: 0px 50px;
`;
export const ContentContainer = styled.div`
  display: flex;

  flex-wrap: wrap;
  justify-content: center;
`;
export const Desc = styled.p`
  /* @import url("https://fonts.googleapis.com/css2?family=Major+Mono+Display&display=swap"); */
  font-family: Courier, monospace;
  padding-bottom: 18px;
  font-weight: 200;
  font-size: x-large;
  @media (max-width: 650px) {
    font-size: small;
  }
`;
export const QuestionContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 80%;
  justify-content: space-between;
  border-style: solid;
  border-color: ${(props) => props.color};
  border-radius: 30px;
  padding: 0px 20px;
  text-align: left;
  margin: 10px;
  transition: 0.5s;
`;
export const Checkbox = styled.button`
  background-color: ${(props) => (props.color ? props.color : "#1A1F26")};
  border-style: solid;
  border-color: white;
  border-radius: 8px;
  height: 23px;
  width: 23px;
  padding: revert;
  margin: initial;
  transition: 0.5s;
  &:hover {
    cursor: pointer;
    background-color: white;
  }
`;
export const Button = styled.button`
  margin: 10px;
  padding: 10px;
  height: 50px;
  border-style: solid;
  border-color: ${(props) => props.color};
  width: 150px;
  border-radius: 20px;
  color: white;
  font-weight: bolder;
  background-color: ${(props) => props.color};
  font-size: larger;
  &:hover {
    cursor: pointer;
  }
`;
