import { nerko } from "@/app/fonts";

export default function Breadcrumb({ children }) {
  return (
    <span>
      <h1 className="text-2xl pb-3 font-nerko">
        App / <span className={nerko.className}>{children}</span>
      </h1>
    </span>
  );
}
