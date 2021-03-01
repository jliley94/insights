import styled from "styled-components";
export const ProgressBar = styled.section`
    display: flex;
    align-items: center;
    width: 80%;
`;
export const Stage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${(props) => (props.active ? "#3c65b8" : "#3e5c99")};
  flex: 1;
`;
