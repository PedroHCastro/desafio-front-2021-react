import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  background: #fff;
  top: 50px;
  right:0;
  width: 560px;
  padding: 10px 10px 20px;
  box-shadow: -3px 3px 5px 3px rgba(0,0,0,0.15);
  z-index: 5;
`;

export const HeaderContent  = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

export const Title = styled.p`
  font-size: 24px;
  font-weight: bold;
`;

export const ClearCart = styled.button`
  color: #fff;
  background: #E63946;
  border: none;
  padding: 14px 22px;
  border-radius: 4px;
`;

export const ItemsContainer = styled.table`
  margin-top:15px;
`;
