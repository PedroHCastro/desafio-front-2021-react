import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Container = styled.div`
  box-shadow: 3px 3px 5px 3px rgba(0, 0, 0, 0.15);
  border-bottom: none;
  width: 22%;
  margin-bottom: 40px;

  border-radius: 4px;
  position: relative;
  background: #fff;

  @media (max-width: 767px) {
    width: 100%;
  }
`;

export const ImgContainer = styled.div`
  width: 100%;
  height: 175px;
  position: relative;
  @media (max-width: 767px) {
    height: auto;
  }
`;

export const HiddenDetail = styled.div`
  .hidden {
    display: none;
  }
`;

export const DateLabel = styled.span`
  position: absolute;
  width: 100%;
  bottom: 15px;
  left: 50%;
  transform: translate(-50%, 50%);

  font-weight: bold;
  color: #fff;
  text-align: center;
`;

export const ExpansiveContainer = styled.div`
  width: 100%;
  height: 100%;

  @media (min-width: 768px) {
    &:hover {
      position: absolute;
      width: 150%;
      height: auto;
      border-radius: 4px;
      overflow: hidden;
      display: flex;
      flex-direction: column;

      top: 0;
      left: 50%;
      transform: translate(-50%, 0%);
      z-index: 5;

      > div {
        text-align: left;
        background: #000;
        padding: 5px;

        width: 100%;
        height: 72px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        ${DateLabel} {
          position: static;
          display: none;
        }

        .hidden {
          display: block;
          color: #fff !important;
        }

        h2 {
          color: #fff;
        }
      }

      > span {
        position: static;
      }
    }
  }
`;

export const HeartButton = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  z-index: 4;
  background: transparent;
  border: none;
`;

export const HeartIcon = styled(FontAwesomeIcon)`
  color: #fff;
  font-size: 26px;
  text-shadow: 3px 3px rgb(0 0 0);

  &.favorite {
    color: #c51d3b;
  }
`;

export const ImgStyled = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.92);
`;

export const DetailContainer = styled.div`
  min-height: 142px;
  text-align: center;
  padding: 10px;
`;
export const TitleFilm = styled.h2`
  font-size: 18px;
  color: #293845;
  height: 44px;
  text-overflow: ellipsis;
  overflow: hidden;

  @supports (-webkit-line-clamp: 2) {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: initial;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
`;
export const SubDetailContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 8px auto 12px;
`;
export const Rating = styled.div`
  margin-right: 15px;
  font-weight: bold;
`;

export const ButtonAddToCartDetail = styled.button`
  background: transparent;
  width: 52px;
  min-width: 52px;
  height: 100%;
  border: none;
  border-left: 1px solid #fff;
  margin-left: 8px;
  font-size: 20px;
`;

export const Gender = styled.span``;
export const Price = styled.p``;
export const ButtonAddToCart = styled.button`
  width: 100%;
  height: 34px;
  background-color: #6558f5;
  color: #fff;
  border: none;
  border-radius: 4px;

  @media (max-width: 767px) {
    height: 54px;
  }
`;

export const StarIcon = styled(FontAwesomeIcon)`
  margin-right: 8px;
`;
