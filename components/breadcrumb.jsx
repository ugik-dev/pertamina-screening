import { robot, nerko } from "@/app/fonts";

export default function Breadcrumb({ children }) {
  return (
    <h1 className={`text-2xl font-bold pb-3 ${nerko.className}`}>{children}</h1>
  );
}
