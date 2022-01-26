import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Container = styled.div`
  /* border: 2px solid #c3cfd9; */
  box-shadow: 3px 3px 5px 3px rgba(0, 0, 0, 0.15);
  border-bottom: none;
  width: 22%;
  margin-bottom: 40px;

  border-radius: 4px;
  /* overflow: hidden; */
  position: relative;
  background: #fff;
`;

export const ImgContainer = styled.div`
  width: 100%;
  height: 175px;
  position: relative;
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
  &:hover {
    position: absolute;
    width: 150%;
    height: auto;
    border-radius: 4px;
    overflow: hidden;

    top: 0;
    left: 50%;
    transform: translate(-50%, 0%);
    z-index: 5;

    > div {
      /* position: absolute;
      bottom: 0;
      width: 100%;
      height: 100%; */
      text-align: center;
      background: #000;//rgba(255, 255, 255, 0.50);
      /* rgb(114 202 160 / 50%); */

      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: center;

      ${DateLabel} {
        position: static;
        display: none;
      }

      .hidden {
        display: block;
        color: #fff;
      }
    }

    > span {
      position: static;
    }
  }
`;

export const HeartIcon = styled(FontAwesomeIcon)`
  position: absolute;
  top: 5px;
  right: 5px;
  color: #fff;
  font-size: 26px;
  z-index: 4;
`

export const ImgStyled = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const DetailContainer = styled.div`
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
  /* align-items: center; */
  justify-content: center;
  margin: 8px auto 12px;
`;
export const Rating = styled.div`
  margin-right: 15px;
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
`;
