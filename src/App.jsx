import { HashRouter} from "react-router-dom";
import AppRoutes from "./routes/index.jsx";

export default function App() {
    return (
        <HashRouter>
            <AppRoutes />
        </HashRouter>
    )
}