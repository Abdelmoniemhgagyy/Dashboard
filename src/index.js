import React from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import ReactDOM from 'react-dom/client';
import App from './App';
import "./App.css"
// Pages
import Dashboard from "./pages/Dashboard/Dashboard.jsx"
import Contacte from "./pages/Contacte/Contacte.jsx"
import Manage from "./pages/Manage/Manage.jsx"
import Invoices from "./pages/Invoices/Invoices.jsx"
import Calendar from "./pages/Calendar/Calendar.jsx"
import Profile from "./pages/Profile/Profile"
import Faq from "./pages/Faq/Faq"
import Bar from "./pages/Bar/Bar"
import Poe from "./pages/Poe/Poe"
import Line from "./pages/Line/Line"
import Geography from "./pages/Geography/Geography"
import NotFound from "./Components/NotFound.jsx"



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Dashboard />} />
      <Route path="contacte" element={<Contacte />} />
      <Route path="manage" element={<Manage/>} />
      <Route path="invoices" element={<Invoices/>} />
      <Route path="profile" element={<Profile/>} />
      <Route path="calendar" element={<Calendar/>} />
      <Route path="faq" element={<Faq/>} />
      <Route path="bar" element={<Bar/>} />
      <Route path="poe" element={<Poe/>} />
      <Route path="line" element={<Line/>} />
      <Route path="geography" element={<Geography/>} />
      <Route path="*" element={<NotFound/>} />
    </Route>
  )
);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
