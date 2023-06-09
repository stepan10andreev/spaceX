import React from "react";
import './main.global.css';
import { MainPage } from "./pages/MainPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TechnologyPage } from "./pages/TechnologyPage";
import { FlightPage } from "./pages/FlightPage";
import { GuaranteesPage } from "./pages/GuaranteesPage";
import { AboutPage } from "./pages/AboutPage";
import { ContactsPage } from "./pages/ContactsPage";


function AppComponent() {
  return (
    <BrowserRouter basename="/spaceX">
       <Routes>
          <Route path="/" element={ <MainPage /> }/>
          <Route path="/technology" element={ <TechnologyPage /> }/>
          <Route path="/flight-schedule" element={ <FlightPage /> }/>
          <Route path="/guarantees" element={ <GuaranteesPage/> }/>
          <Route path="/about" element={ <AboutPage/> }/>
          <Route path="/contacts" element={ <ContactsPage/> }/>
        </Routes>
    </BrowserRouter>
  )
}

export const App = AppComponent
