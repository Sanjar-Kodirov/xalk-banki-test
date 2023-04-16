import "./styles/App.css";
import { KanbanBoard } from "../entities/Kanbanboard";
// import { CreateTodos } from "src/features/FormTodos";

function App() {

  return (
    <div className="App">
      {/* <CreateTodos /> */}
      <KanbanBoard />
    </div>
  );
}

export default App;
