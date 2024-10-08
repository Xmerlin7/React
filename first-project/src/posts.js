import "./posts.css";
const posts = [
  {
    key: 1,
    name: "seif",
  },
  {
    key: 2,
    name: "Adam",
  },
  {
    key: 3,
    name: "Merlin",
  },
];
const postLists = posts.map((post) => {
  return <PostInof key={post.key} name={post.name} />;
});
export  function PostInof({ name, children }) {
  return (
    <div className="posts">
      <h2>
        This is the post is written by{" "}
        <span style={{ color: "red" }}>{name}</span>
      </h2>
      <hr />
      <h1> This is the post content</h1>
      {children}
    </div>
  );
}
export default function Post (){
    return(
        <div>
            {postLists}
        </div>
    )
}
