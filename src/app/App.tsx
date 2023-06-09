import React from "react";
import './main.global.css';
import { MainPage } from "./pages/MainPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";


function AppComponent() {
  return (
    <BrowserRouter basename="/spaceX">
       <Routes>
          <Route path="/" element={<MainPage />}/>
          {/* <Route path="/statistics" element={<StatisticsPage />}/>
          <Route path="/settings" element={<SettingsPage />}/> */}
        </Routes>
    </BrowserRouter>
  )
}

export const App = AppComponent
