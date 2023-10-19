import Toolbar from "./Components/Toolbar";
import ModuleList from "./ModuleList";
import "./index.css";
function Modules() {
  return (
    <div className="col" style={{ marginLeft: "20px" }}>
      <Toolbar />
      <ModuleList />
    </div>
  );
}

export default Modules;
