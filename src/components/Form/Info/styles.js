import styled from "styled-components";

export const InfoItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;
  margin: 20px 0;

  &:first-child {
    margin-top: 50px;
  }
`;

export const InfoContent = styled.div`
  margin-bottom: 60px;
`;

export const InfoHeader = styled.div`
  padding-right: 16px;
  font-size: 1.1rem;
  font-weight: 700;
`;
