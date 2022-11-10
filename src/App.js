import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import routes from "./Routes/routes";

function App() {
  return (
    <div className="App">
      <RouterProvider router={routes}>
        {" "}
        <Toaster />{" "}
      </RouterProvider>
    </div>
  );
}

export default App;
