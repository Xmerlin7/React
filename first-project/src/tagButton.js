export default function TagButton({ title, children }) {
  return (
    <>
      <button className="tagButton">
        <div>{title}</div>
        <div>{children}</div>
      </button>
    </>
  );
}
