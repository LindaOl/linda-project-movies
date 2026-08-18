import { BrowserRouter, Link, Routes } from "react-router-dom";
import routes from "./routes/routes";
import "./App.css";

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <div>Find me in src/app.jsx!</div>

        <main>
          <Routes>{routes}</Routes>
        </main>
      </BrowserRouter>
    </>
  )

}
