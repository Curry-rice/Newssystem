import React from 'react';
import { useRoutes } from "react-router-dom";
import './App.css';
import routers from './router';
function App() {
  const element = useRoutes(routers);
  return (
    <>{element}</>
  );
}

export default App;
