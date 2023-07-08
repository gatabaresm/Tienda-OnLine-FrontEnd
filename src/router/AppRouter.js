import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Component1 } from '../components/Component1';
import { Component2 } from '../components/Component2';
import { Component3 } from "../components/Component3";
import { DefaultComponent } from '../components/DefaultComponent';
import { ProductList } from "../components/ProductList"

export const AppRouter=()=>{
    return (
        <BrowserRouter>
            <div>
                <Routes>
                    <Route exact path="/" element={<ProductList />} />
                    <Route exact path="/c1/" element={<Component1/>} />
                    <Route caseSensitive path="/C2/" element={<Component2/>} />
                    <Route caseSensitive path="/C2/:value" element={<Component3/>} />
                    <Route path="*" element={<DefaultComponent/>} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default AppRouter;