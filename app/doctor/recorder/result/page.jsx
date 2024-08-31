import { readFile } from "node:fs/promises";

export default async function Result() {
  const content = await readFile("./content/dumy_recorder.md", "utf-8");

  return (
    <div>
      Result
      <p>{content}</p>
    </div>
  );
}
