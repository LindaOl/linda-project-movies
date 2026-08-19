import { Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Details } from "../pages/Details";

export const routes = (
    <>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={< Details />} />
    </>
);

