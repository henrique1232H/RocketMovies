import AppRoutes  from "./app.routes";
import { BrowserRouter } from "react-router-dom";
import AuthRoute from "./auth.routes";

export default function Routes() {
    return (
    <BrowserRouter>
        <AuthRoute />
    </BrowserRouter>

    )
}