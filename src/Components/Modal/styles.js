import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  position: absolute;
  top: 180px;
  left: 50%;
  transform: translate(-50%, 0);
  text-align: center;
  padding: 30px 30px 20px;
  background: #fff;
  box-shadow: 3px 3px 5px 3px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
`;
export const Title = styled.p`
  font-size: 28px;
  font-weight: bold;
`;
export const Message = styled.p`
  font-size: 20px;
  margin: 40px 0;
`;
export const GoToStore = styled(Link)`
  display: inline-block;
  width: 100%;
  background-color: #6558f5;
  color: #fff;
  border: none;
  text-decoration: none;
  padding: 10px 0;
  border-radius: 4px;
`;
