import React from "react";
import { Button, ButtonSizes } from "@viasat/vci-components";
import { setDataLimit } from "@ktaboada/api";
import {
  BuyMoreCardContainer,
  PriceText,
  DataText,
  BodyText,
  BodyContainer,
} from "./BuyMoreStyled";

export const BuyMoreCard = ({
  price,
  data,
  setShowModal,
  setOpen,
  eventBus,
}) => {
  const purchaseData = () => {
    setOpen(false);
    setShowModal(data);
    setDataLimit(data, eventBus);
  };
  return (
    <BuyMoreCardContainer>
      <PriceText>${price}</PriceText>
      <BodyContainer>
        <DataText>{data} GB</DataText>
        <BodyText>
          Stream and download TV episodes and music; browse the internet, email
          and share large files and photos.
        </BodyText>
        <Button size={ButtonSizes.Medium} onClick={() => purchaseData()}>
          BUY {data} GB OF DATA
        </Button>
      </BodyContainer>
    </BuyMoreCardContainer>
  );
};
