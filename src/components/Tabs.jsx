import React from "react";
export default function Tabs({ children, buttons, ButtonsContainer = "menu" }) {
  // const ButtonsContainer = buttonsContainer;
  return (
    <>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </>
  );
}
