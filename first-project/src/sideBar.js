import "./sideBar.css";
import TagButton from "./tagButton";
const img = {
  width: "20px",
  margin: "8px",
};
const categories = [
  {
    id: 1,
    title: "click !",
    img: "",
    comp: <div>😊😊😊</div>,
  },
  {
    id: 2,
    title: "click !",
    comp: <img style={img} src="logo192.png" alt="hi"></img>,
  },
  { id: 3, title: "Latest", comp: <div>😊😊😊</div> },
];
const catLists = categories.map((cat) => {
  return (
    <TagButton key={cat.id} title={cat.title}>
      {cat.img}
      {cat.comp}
    </TagButton>
  );
});
export default function SideBar() {
  return <div className="sidebar">{catLists}</div>;
}
