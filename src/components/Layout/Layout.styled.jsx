import styled from '@emotion/styled';

export const Header = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  max-height: 80px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 4px;
  padding-bottom: 4px;
  color: #fff;
  background: rgb(116, 141, 166);
  background: linear-gradient(
    90deg,
    rgba(116, 141, 166, 1) 0%,
    rgba(156, 180, 204, 1) 25%,
    rgba(211, 206, 223, 1) 60%,
    rgba(242, 215, 217, 1) 99%
  );

  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const Main = styled.main`
  background-color: #e0dddd;
`;
