import React from "react";

export default function PopUp({ open, children }) {
  if (!open) return null;
  return (
    <>
      <div className="popup-cover" />
      <div className="inner-popup">{children}</div>
    </>
  );
}
