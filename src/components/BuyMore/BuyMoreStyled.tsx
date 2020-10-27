import styled from "styled-components";
import { Colors } from "@viasat/vci-components";

export const BuyMoreCardContainer = styled.div`
  border-radius: 12px;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.15);
  padding-left: 40px;
  padding-right: 16px;
  padding-top: 16px;
  padding-bottom: 36px;
  margin-left: 90px;
  margin-right: 90px;
  margin-top: 10px;
  margin-bottom: 20px;
`;

export const PriceText = styled.p`
  float: right;
  font-family: "Source Sans Pro", sans-serif;
  font-weight: bold;
  font-size: 20px;
`;

export const DataText = styled.p`
  font-family: "Uni Neue", sans-serif;
  font-weight: 900;
  font-size: 24px;
  margin-top: 20px;
  color: ${Colors.Teal500};
`;

export const BodyText = styled.p`
  font-family: "Source Sans Pro", sans-serif;
  font-size: 16px;
  margin-bottom: 66px;
`;

export const BodyContainer = styled.p`
  margin-right: 24px;
`;
