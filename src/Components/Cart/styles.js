import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  position: fixed;
  background: #fff;
  top: 50px;
  right: -570px;
  width: 400px;
  height: calc(100vh - 50px);
  padding: 10px 10px 20px;
  box-shadow: -3px 3px 5px 3px rgba(0, 0, 0, 0.15);
  z-index: 5;
  transition: 1s right;

  &.open {
    right: 0;
  }
`;

export const HeaderContent = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.p`
  font-size: 24px;
  font-weight: bold;
`;

export const ClearCart = styled.button`
  color: #6558f5;
  background: transparent;
  border: none;
  padding: 14px 10px;
  border-bottom: 1px solid #c7c3fb;
`;

export const TableContainer = styled.div`
  margin-top: 15px;
  width: 100%;
  height: calc(100% - 120px);
  overflow: auto;
`;

export const ItemsContainer = styled.table`
  width: 100%;
`;

export const PaymentContainer = styled.div`
  width: 100%;
  height: 60px;
  margin-top: 20px;
`;

export const TotalBox = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const LabelTotal = styled.span``;
export const LabelPrice = styled.span`
  font-weight: bold;
`;

export const LinkStyled = styled(Link)`
  width: 100%;
  display: block;
  text-align: center;
  background: #6558f5;
  color: #fff;
  padding: 10px 0;
  border-radius: 4px;
  text-decoration: none;
`;
