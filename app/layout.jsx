import React from "react";

export default function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Pertamina Screening</title>
      </head>
      <body>
        <header>[header]</header>
        <main>{children}</main>
        <footer>[footer]</footer>
      </body>
    </html>
  );
}
