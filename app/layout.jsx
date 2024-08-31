import Link from "next/link";
import "./global.css";

export default function LayoutRoot({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Pertamina Screening</title>
      </head>
      <body>
        <header>
          <nav>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/doctor/recorder">Recorder</Link>
              </li>
              <li>
                <Link href="/management-user" prefetch={false}>
                  User
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>{children}</main>
        <footer>
          <hr />
          Development by <a href="https://ugikdev.site">@ugikdev</a>
        </footer>
      </body>
    </html>
  );
}
