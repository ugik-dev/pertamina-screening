import { getRecord } from "@/lib/get_record";

export default async function Result() {
  const post = await getRecord();

  return (
    <div>
      <h3> Tekanan Darah : {post.result.tekanan_darah} mmHg</h3>
      <h3> Suhu : {post.result.suhu} &deg;C </h3>
      <h3> Nadi : {post.result.nadi} bpm</h3>
      <p>{post.content}</p>
    </div>
  );
}
