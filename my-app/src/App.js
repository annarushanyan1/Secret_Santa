import "./App.css"
import React from "react";
import Block from "./components/Block/Block";

import { BrowserRouter, Route ,Routes} from 'react-router-dom';
import SecretSanta from "./components/SecretSanta/SecretSanta";

function App() {
  return (
    <div className="App">
        <React.StrictMode>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Block />} />
        <Route path="/secretsanta" element={<SecretSanta />} />

    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
    </div>
  );
}

export default App;
