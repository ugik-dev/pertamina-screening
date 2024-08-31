export default function LayoutRecorder({ children }) {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ border: "1px solid black" }}>
        <h1>Layout Recorder</h1>
      </div>
      {children}
    </div>
  );
}
