import React from "react";

export default function Button({ text, styleName }) {
  return (
    <div>
      <button className={styleName}>{text}</button>
    </div>
  );
}
