import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Outlet />
      </main>
      <Analytics />
    </div>
  );
}

export default App;
