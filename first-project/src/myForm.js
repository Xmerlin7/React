export default function MyForm() {
  return (
    <form>
      <label style={{marginRight: "5px"}}>Name:</label>
      <input type="text" placeholder="username"></input>
      <hr />
      <label style={{marginRight: "5px"}}>Email:</label>
      <input type="text" placeholder="email"></input>
      <hr />
      <button >Click</button>
    </form>
  );
}
