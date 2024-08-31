import React from "react";

export default function layout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Pertamina Screening</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
