import styled from "styled-components";

export const FormContainer = styled.section`
    display: flex;
    align-items: center;
    width: 80%;
`;

export const FormSection = styled.form`
    margin: 20px 0 0;
    display: flex;
    align-items: center;
`;

export const Heading = styled.h3`
    color: '#fff';
`;
export const Input = styled.input`
  width: 370px;
  height: 36px;
  margin: 0 10px;
  padding: 0 15px;
  font-size: 14px;
  color: #000000;
  border: 1px solid #d5d5d5;

  :focus, :active {
    border: 1px solid #d5d5d5;
  }
`;

export const Button = styled.button`
  height: 36px;
  line-height: 36px;
  padding: 0 16px;
  font-size: 14px;
  font-weight: 500;
  color: #ffffff;
  background: #fdb755;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  text-transform: uppercase;

  ${props => props.negative && `
    background: #666;
    color: white;
  `}
`;
