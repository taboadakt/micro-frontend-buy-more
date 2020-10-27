import React from "react";
import { Modal } from "rsuite";
import { DataText, BodyText } from "../components/BuyMore/BuyMoreStyled";
import {
  Title,
  Button,
  ButtonTypes,
  ButtonSizes,
} from "@viasat/vci-components";

export const BuyMoreModal = ({ showModal, setShowModal }) => {
  const show = showModal !== null;
  return (
    <Modal size="xs" show={showModal} onHide={() => setShowModal(null)}>
      <Modal.Header>
        <DataText>{showModal} GB of data purchased!</DataText>
      </Modal.Header>
      <Modal.Body>
        <BodyText>
          You will see an additional {showModal} GB of data added to your
          account.
        </BodyText>
      </Modal.Body>
      <Modal.Footer>
        <Button size={ButtonSizes.Medium} onClick={() => setShowModal(null)}>
          CLOSE
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
