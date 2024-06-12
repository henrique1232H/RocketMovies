import {Routes, Route} from "react-router-dom";

import CreateMovie from "../Pages/CreateMovie";

import MoviePreview from "../Pages/MoviePreview";
import Home from "../Pages/Home"

export default function AppRoutes() {

    return (
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path='/createMovie' element={<CreateMovie />}/>
            <Route path='/moviePreview/:id' element={<MoviePreview />}/>
        </Routes>
    )
}