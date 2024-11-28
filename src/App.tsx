import React from "react";
import "./styles.css";
import {Route, Routes} from "react-router-dom";
import ProtectedRoute from "./utils/ProtectedRoute";
import Home from "./views/Home";
import SignIn from "./views/SignIn";
import SignUp from "./views/SignUp";
import Dashboard from "./views/Dashboard";
import Settings from "./views/Settings";
import Form from "./views/Form";
export default function App() {
  return (
    <div className="App">
        <Routes>
            <Route path="/" element={<div>Vá para uma página</div>} />
            <Route path="/home" element={<Home/>} />
            <Route path="/sign-in" element={<SignIn/>} />
            <Route path="/sign-up" element={<SignUp/>} />
            <Route path="/dashboard" element={<Dashboard/>} />
            <Route path="/settings" element={<Settings/>} />
            <Route
                path="/form"
                element={
                    <ProtectedRoute>
                        <Form/>
                    </ProtectedRoute>
                }
            />
        </Routes>
    </div>
  );
}
