import React from "react";

const ScrollPanel = ({ children, className = "", id, style, zIndex }) => {
  return (
    <section id={id} className={`stack-panel ${className}`.trim()} style={{ ...style, zIndex }}>
      <div className="stack-panel__surface">{children}</div>
    </section>
  );
};

export default ScrollPanel;
