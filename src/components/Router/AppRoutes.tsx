import React from 'react';
import {Route, Routes} from 'react-router-dom'
import Home from "../../pages/Home/Home";
import Character from "../../pages/Character/Character";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path={'/'}>
                <Route index element={<Home/>}/>
                <Route path={'characters/:characterId'} element={<Character/>}/>
            </Route>
        </Routes>
    );
};

export default AppRoutes;