import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <img src="/images/logo-pertamina.png" width={100} height={40}></img>
      <ul className="flex gap-2">
        <li>
          <Link
            href="/"
            prefetch={false}
            className="text-red-800 hover:underline"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/doctor/recorder"
            prefetch={false}
            className="text-red-800 hover:underline"
          >
            Recorder
          </Link>
        </li>
        <li>
          <Link
            href="/management-user"
            prefetch={false}
            className="text-red-800 hover:underline"
          >
            User
          </Link>
        </li>
      </ul>
    </nav>
  );
}
