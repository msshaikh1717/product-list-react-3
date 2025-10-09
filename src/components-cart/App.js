import DessertsContainerList from "./DessertsContainerList";
import SideBar from "./SideBar";
import Overlay from "./Overlay.js";
import data from "./data.json";

export default function App() {
  return (
    <div className="main-container">
      <header className="main-heading">Desserts</header>
      <DessertsContainerList data={data} />
      <SideBar />
      <Overlay />
    </div>
  );
}
