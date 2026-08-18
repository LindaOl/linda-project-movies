import { Route } from "react-router-dom";
import Home from "../pages/Home";
import Details from "../pages/Details";

const routes = (
    <>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={< Details />} />

    </>
);

export default routes;