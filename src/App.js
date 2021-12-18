import logo from "./logo.svg";
import "./App.css";
import { Counter } from "./components/Counter";
import TableView from "./components/tableView";
import Reactcounter from "./components/Reactcounter";

function App() {
  return (
    <div className="App">
      <Counter />
      <TableView />
      {/* <Reactcounter /> */}
    </div>
  );
}

export default App;
