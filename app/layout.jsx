import "./global.css";
import Navbar from "../components/navbar";

export default function LayoutRoot({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Pertamina Screening</title>
      </head>
      <body className="bg-green-100 flex flex-col px-6 py-4 min-h-screen">
        <header>
          <Navbar></Navbar>
        </header>
        <main className="py-3 grow">{children}</main>
        <footer className="border-t py-3 text-center">
          <span className="text-xs">
            Development by <a href="https://ugikdev.site">@ugikdev</a>
          </span>
        </footer>
      </body>
    </html>
  );
}
