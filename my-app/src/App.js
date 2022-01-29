import "./App.css"
import React from "react";
import Block from "./components/Block/Block";
import Workspace from "./components/Workspace/Workspace";
import Main from "./components/Main/Main"
import { BrowserRouter, Route ,Routes} from 'react-router-dom';
import SecretSanta from "./components/SecretSanta/SecretSanta";

function App() {
  return (
    <div className="App">
        <React.StrictMode>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/searchgifs" element={<Block />} />
        <Route path="/secretsanta" element={<SecretSanta />} />
        <Route path="/workspace" element={<Workspace />} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
    </div>
  );
}

export default App;
