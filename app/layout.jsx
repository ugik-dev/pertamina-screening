export default function LayoutRoot({ children }) {
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
