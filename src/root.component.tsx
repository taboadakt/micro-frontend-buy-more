import React, { useState } from "react";
import { Global, css } from "@emotion/core";
import { ThemeProvider } from "./hooks/ThemeContext";
import { BuyMoreDrawer } from "./views/Drawer";
import { BuyMoreModal } from "./views/Modal";

import "rsuite/dist/styles/rsuite-default.css";

export default function Root(props) {
  const { eventBus, globalCSS, theme } = props;
  const [showModal, setShowModal] = useState(null);
  return (
    <>
      <Global
        styles={css`
          ${globalCSS}
        `}
      />
      <ThemeProvider theme={theme}>
        <BuyMoreDrawer eventBus={eventBus} setShowModal={setShowModal} />
        <BuyMoreModal showModal={showModal} setShowModal={setShowModal} />
      </ThemeProvider>
    </>
  );
}
