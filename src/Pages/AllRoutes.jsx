import { Routes, Route } from "react-router-dom";
import PlaceCard from "./PlaceCard";
import SingleCard from "./SingleCardPage";

const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<PlaceCard />} />
            <Route path="/:id" element={<SingleCard />} />
        </Routes>
    )
}

export default AllRoutes;

