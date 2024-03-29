import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  position: fixed;
  background: #fff;
  top: 50px;
  right: -570px;
  width: 400px;
  max-width: 90%;
  height: calc(100vh - 50px);
  padding: 10px 10px 20px;
  box-shadow: -3px 3px 5px 3px rgba(0, 0, 0, 0.15);
  z-index: 5;
  transition: 1s right;

  &.open {
    right: 0;
  }

  @media (max-width: 767px) {
    top: 90px;
    height: calc(100vh - 90px);
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
  padding: 10px;
  border: 1px solid #c7c3fb;
`;

export const TableContainer = styled.div`
  margin-top: 15px;
  width: 100%;
  height: calc(100% - 155px);
  overflow: auto;
`;

export const ItemsContainer = styled.table`
  width: 100%;

  tbody {
    td:nth-child(2) {
      padding-left: 8px;
    }
    td:nth-child(3) {
      text-align: center;
    }
    td:nth-child(4) {
      width: 84px;
      text-align: center;
    }
  }
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
  margin-top: 15px;
`;
