import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #cacaca;

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

export const Content = styled.div`
  background-color: #808080;
  width: 50%;
  max-width: 600px;
  padding: 20px;
  border-radius: 10px;
  -webkit-box-shadow: 17px 17px 11px 9px rgba(0, 0, 0, 0.53);
  -moz-box-shadow: 17px 17px 11px 9px rgba(0, 0, 0, 0.53);
  box-shadow: 17px 17px 11px 9px rgba(0, 0, 0, 0.53);

  @media (max-width: 768px) {
    width: 80%;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;

  & > button {
    flex: 1;
    margin: 0 5px;
    padding: 15px;
    font-size: 1.2em;

    &.clear {
      background-color: #ff3333;
    }

    &.equals {
      background-color: #24b324;
    }
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
`;
