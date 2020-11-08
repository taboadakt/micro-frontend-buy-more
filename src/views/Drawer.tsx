import React, { useState, useEffect } from "react";
import { Drawer } from "rsuite";
import {
  Title,
  Button,
  ButtonTypes,
  ButtonSizes,
} from "@viasat/vci-components";
import { BuyMoreCard } from "../components/BuyMore/BuyMoreCard";
// @ts-ignore
import { events } from "@ktaboada/api";

export const BuyMoreDrawer = ({ eventBus, setShowModal }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const subscription = eventBus.subscribe(events.setBuyMoreModalOpen, (arg) =>
      setOpen(arg)
    );
    // Specify how to clean up after this effect:
    return function cleanup() {
      subscription.unsubscribe();
    };
  });

  return (
    <div>
      <Drawer show={open} onHide={() => setOpen(false)}>
        <Drawer.Header>
          <Title>Buy more. Save More</Title>
        </Drawer.Header>
        <Drawer.Body>
          <BuyMoreCard
            price={24}
            data={1}
            setShowModal={setShowModal}
            setOpen={setOpen}
            eventBus={eventBus}
          />
          <BuyMoreCard
            price={48}
            data={5}
            setShowModal={setShowModal}
            setOpen={setOpen}
            eventBus={eventBus}
          />
          <BuyMoreCard
            price={96}
            data={10}
            setShowModal={setShowModal}
            setOpen={setOpen}
            eventBus={eventBus}
          />
          <Button
            onClick={() => setOpen(false)}
            typeName={ButtonTypes.Secondary}
            size={ButtonSizes.Small}
          >
            CANCEL
          </Button>
        </Drawer.Body>
      </Drawer>
    </div>
  );
};
