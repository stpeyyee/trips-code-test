
import { Route, BrowserRouter, Routes } from "react-router-dom";
import TripPage from "../pages/TripPage";
import MainPage from "../pages/MainPage";
export default function RoutesPage() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact
                    element={<MainPage></MainPage>}>
                </Route>
                <Route path="/trips" exact
                    element={<TripPage></TripPage>}>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}