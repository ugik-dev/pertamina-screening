import { readFile } from "node:fs/promises";

export async function getRecord() {
  // disini api untuk mengambil data
  const result = {
    tekanan_darah: "120/80",
    suhu: "37",
    nadi: "70",
  };
  const content = await readFile("./content/dumy_recorder.md", "utf-8");
  return { content, result };
}
